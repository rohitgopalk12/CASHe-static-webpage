var quizApp = angular.module('quiz-app-unique', []);

quizApp.controller('quiz-controller-unique', function($scope, $http, $window, $interval) {

    $scope.quizTopics = [
        "CASHe",
        "BHANIX",
        "FinTech EcoSystem",
        "Competitive Analysis"
    ];

    /**  
     * Quiz Topics and their corresponding src urls configured here
     */
    $scope.quizTopicsAndSources = new Map();
    $scope.quizTopicsAndSources.set("CASHe", "./js/CASHe.json");
    $scope.quizTopicsAndSources.set("BHANIX", "./js/BHANIX.json");
    $scope.quizTopicsAndSources.set("FinTech EcoSystem", "./js/FinTechEcoSystem.json");
    $scope.quizTopicsAndSources.set("Competitive Analysis", "./js/CompetitiveApps.json");  

    /** 
     * Currently active quiz topic (only one quiz topic can be active at a time)
     */
    $scope.activeQuizTopic = "CASHe";

    /**
     * Shows the quiz start page with the start quiz button, if true and hides the quiz body and vice versa
     */
    $scope.quizStartPageVisible = true;

    /**
     * Shows the score Modal if true
     */
    $scope.showScoreModal = false;

    /**
     * State Maintenance of current set of questions and answers selected
     */
    $scope.questions = null;
    $scope.currentQuestionIndex = -1;
    $scope.score = 0;
    $scope.timeLeft = null; /* in seconds (15 minutes)*/ 
    $scope.timerId = null;
    $scope.timeLeftDisplay = "00:00";

    /**
     * No of questions answered for depicting progress in progress bar
     */
    $scope.quizProgress = 0;

    const quizDuration = 15*60;

    /**
     * Selects a particular Quiz Topic and if a quiz is already running submits quiz 
     * before changing topic and resetting back to start quiz page
     */
    $scope.selectQuiz = function(topic) {
        if (!$scope.quizStartPageVisible) {
            $scope.submitQuiz();
        }
        $scope.activeQuizTopic = topic;
    }

    /**
     * starts the currently active quiz topic
     * starts a timer for 15 minutes
     */
    $scope.startQuiz = function() {
        /**
         * load the questions from the src map quizTopicsAndSources for the corresponding active quiz topic 
         */
        const srcUrl = $scope.quizTopicsAndSources.get($scope.activeQuizTopic);
        $http.get(srcUrl).then(function (response) {
            $scope.questions = response.data;
            $scope.initializeQuiz();
        });
    }

    /**
     * stops the timer using its id returned from setInterval 
     * calculates score and displays score in modal and sets the quizProgress to 0 (for progress bar, no questions answered)
     */
    $scope.submitQuiz = function() {
        $interval.cancel($scope.timerId);
        $scope.score = $scope.calculateScore();
        $scope.openScoreModal();
        $scope.quizProgress = 0;
    }

    /**
     * calculates score from current state of questions
     */
    $scope.calculateScore = function() {
        let score = 0;
        for (let i=0; i<$scope.questions.length; i++) {
            const question = $scope.questions[i];
            const correct_option = question.answer.correct_option;
            if (question.selected_option === question.answer.options[correct_option-1].option_id) {
                score++;
            }
        }
        return score;
    }

    /**
     * opens the score modal
     */
    $scope.openScoreModal = function() {
        $scope.showScoreModal = true;
    }

    /**
     * closes score modal on clicking X or anywhere outside the modal and resets back to 
     * start quiz page , resets the timeLeft value to initial duration
     */
    $scope.closeModal = function($event) {
        const target_id = $event.target.id;
        if (target_id === "x-modal-close" || target_id === "scoreModal") {
            $scope.quizStartPageVisible = true;
            $scope.showScoreModal = false;
        }   
        $scope.timeLeft = quizDuration;
    }

    /**
     * selects the option for the current question and maintains its state
     * option_id should be unique over the entire questions data set
     * and
     * increases the quizProgress by appropriate percentage for one question 
     */
    $scope.selectOption = function(option_id) {
        /**
         * increase quizProgress only if answering previously unanswered questions
         */
        if ($scope.questions[$scope.currentQuestionIndex].selected_option === -1) {
            $scope.quizProgress++;
        }
        
        document.getElementById("progressbar").style.width = ($scope.quizProgress/$scope.questions.length)*100 + "%";
        console.log(document.getElementById("progressbar").style.width);
        $scope.questions[$scope.currentQuestionIndex].selected_option = option_id;
    }

    /**
     * switches to the next question 
     */
    $scope.nextQuestion = function() {
        if ($scope.currentQuestionIndex < $scope.questions.length-1) {
            $scope.currentQuestionIndex++;
        }
    }

    /**
     * switches to the previous question 
     */    
    $scope.previousQuestion = function() {
        if ($scope.currentQuestionIndex > 0) {
            $scope.currentQuestionIndex--;
        }
    }

    /**
     * switches to the question selected in the left side accordion view
     */
    $scope.selectQuestion = function(questionIndex) {
        $scope.currentQuestionIndex = questionIndex;
    }

    $scope.initializeQuiz = function() {
        /**
         * add selected_option property to each question in questions (containing list of questions)
         * with default value as -1 (unselected)
         */
        for(let i=0; i<$scope.questions.length; i++) {
            $scope.questions[i]["selected_option"] = -1;
        }

        /**
         * set current question as the first question and make the quiz body visible
         * start the timer
         */
        $scope.currentQuestionIndex = 0;
        $scope.quizStartPageVisible = false;

        /**
         * start timer
         */
        $scope.timeLeft = quizDuration;
        $scope.startTimer();
    }

    /**
     * starts the timer using setInterval and returns the setInterval Id for clearing later
     */
    $scope.startTimer = function() {
        $scope.timerId = $interval(function() {
            
            if ($scope.timeLeft > 0) {
                $scope.timeLeft--;
                
                let minutes = Math.floor($scope.timeLeft/60);
                minutes = (minutes > 10) ? minutes.toString() : "0" + minutes.toString();
                let seconds = $scope.timeLeft%60;
                seconds = (seconds > 10) ? seconds.toString() : "0" + seconds.toString();
                $scope.timeLeftDisplay = minutes + ":" + seconds;
            }

            /**
             * submitQuiz calls clearInterval()
             */
            if ($scope.timeLeft === 0) {
                $scope.submitQuiz();
            }
        }, 1000);
    }

});