var default_video_clicked = true;
const casheFiles = new Map();
var accordions_list = ['.quiz-topics'];

//====================================================================================

                /* Jquery slideup and slide toggling accordion menu */
                //===================================================

var toggleAccordion = '';
var timer = 0;
var min=0;
var sec=0;
var current_div = '';
var current_div_clicked=false;
var className = 0;
var questionVisited = 0;

var fintechQuizApp = angular.module('casheLearningsApp',[]);
 
var ctrl = function($scope)
{   
    var already_started_quiz_ended=false;
    $scope.ite = 0;
    $scope.wordDocDisplayScreen = false;
    $scope.pdfDocDisplayScreen = false;
    $scope.pptDocDisplayScreen = false;
    $scope.showCasheContents=false;
    $scope.showBhanixContents=false;
    //var current_file = 0;
    $scope.slideAccordions = function(toggleAccordion)
    {
        if(toggleAccordion != '')
        {
            for(var i=0;i<accordions_list.length;i++)
            {
                if(accordions_list[i] == toggleAccordion)
                {
                    $(accordions_list[i]).slideToggle(500);  
                }
                else
                {
                    $(accordions_list[i]).slideUp(500);  
                }
            }
        }
    }

    $scope.quizTitle = "QUIZ";
    $scope.question = 0;
    $scope.fontWeight='bold';
    $scope.fontSize='20px';
    $scope.top='10px';

    $scope.foregroundColor = '';

    $scope.quizTopicsList = 
    [
        { 
            quizID : 'fintechQuiz', quizTopicClass : 'fintechQuestions', quizName : 'Fintech Eco System', fintechQuestionaire :
            [
                {questionID : 'fintech_1', questionName : 'When to choose Buy Now Pay later?'},
                {questionID : 'fintech_2', questionName : 'Does Buy Now Pay Later charge interest?'},
                {questionID : 'fintech_3', questionName : 'Is early salary a mobile app or desktop app?'},
                {questionID : 'fintech_4', questionName : "Traditional lending saves customer's time compared to digital lending?"},
                {questionID : 'fintech_5', questionName : 'Competition, collaboration and convergence makes healthy relationship between bank and NBFC'}
            ]  
        },
        {
            quizID : 'casheQuiz',  quizTopicClass : 'casheQuestions', quizName : 'CASHe', casheQuestionaire :
            [
                {questionID : 'cashe_6', questionName : 'What Is CASHe’s mission?'},
                {questionID : 'cashe_7', questionName : 'What is the fundamental belief of CASHe?'},
                {questionID : 'cashe_8', questionName : 'CASHe was founded in _______'},
                {questionID : 'cashe_9', questionName : 'CASHe is a mobile app'},
                {questionID : 'cashe_10', questionName : 'Bhanix was established on?'}
            ]
        },
        {
            quizID : 'bhanixQuiz',  quizTopicClass : 'bhanixQuestions', quizName : 'BHANIX', bhanixQuestionaire :
            [
                {questionID : 'bhanix_11', questionName : 'What is full form of NBFC?'},
                {questionID : 'bhanix_12', questionName : "NBFC's allow deposits from customers"},
                {questionID : 'bhanix_13', questionName : 'Bhanix provides loan through'},
                {questionID : 'bhanix_14', questionName : 'Fair practice code is meant for'},
                {questionID : 'bhanix_15', questionName : 'Who is the founder of CASHe?'}
            ]
        },
        {
            quizID : 'competitiveAnalysisQuiz',  quizTopicClass : 'competitiveAnalysisQuestions', quizName : 'Competitive Analysis', competitiveAnalysisQuestionaire :
            [
                {questionID : 'competitive_16', questionName : "How much is MoneyView's Maximum Loan Ticket Size"},
                {questionID : 'competitive_17', questionName : 'Which of the following demographic are eligible to apply for a loan at MoneyView'},
                {questionID : 'competitive_18', questionName : 'MoneyView is available in Gpay'},
                {questionID : 'competitive_19', questionName : 'MoneyView Advantage Card offers an interest free period of up to'},
                {questionID : 'competitive_20', questionName : 'PostPe card has a credit limit of upto'}
            ]
        }
    ]


    $scope.changeBackgroundTopic = function(index,event)
    {
        className = event.target.className;

        $scope.selectedQuizTopics = -1;
        $scope.selectedQuizTitle = -1;

        $scope.selectedCompetitiveAnalysisQuestion = -1;
        $scope.selectedBhanixQuestion = -1;
        $scope.selectedCasheQuestion = -1;
        $scope.selectedFintechQuestion = -1;

        switch(className)
        {
            case 'fintechQuestions ng-binding':
                questionVisited = index;
                $scope.selectedQuizTopics = 0;
                $scope.selectedFintechQuestion = index;
                break;

            case 'casheQuestions ng-binding':
                questionVisited = index;
                $scope.selectedQuizTopics = 1;
                $scope.selectedCasheQuestion = index;
                break;

            case 'bhanixQuestions ng-binding':
                questionVisited = index;
                $scope.selectedQuizTopics = 2;
                $scope.selectedBhanixQuestion = index;
                break;

            case 'competitiveAnalysisQuestions ng-binding':
                questionVisited = index;
                $scope.selectedQuizTopics = 3;
                $scope.selectedCompetitiveAnalysisQuestion = index;
                break;           
            
            case 'quizzTitle ng-binding':
                $scope.selectedQuizTitle = $scope.quizTitle;
                break;
                
            case 'quiz-topics ng-binding':
                $scope.selectedQuizTitle = $scope.quizTitle;
                $scope.selectedQuizTopics = index;
                break;
        } 
    }

    $scope.startQ=1;
    $scope.prevButton = false;
    $scope.nextButton=false;
    $scope.quiz = '';
    $scope.scoreIsDisplayed = false;

    $scope.displayFintechQuizPage = false;
    $scope.fintechQuizPage = false;
    $scope.displayFintechQuizTips = false;
    $scope.displayFintechQuizScorePage = false;

    $scope.displayCasheQuizPage = false;
    $scope.displayCasheQuizTips = false;
    $scope.casheQuizPage = false;
    $scope.displayCasheQuizScore = false;

    $scope.displayBhanixQuizPage = false;
    $scope.displayBhanixQuizTips = false;
    $scope.bhanixQuizPage = false;
    $scope.displaybhanixQuizScore = false;

    $scope.displayCompetitiveAnalysisQuizPage = false;
    $scope.displayCompetitiveAnalysisQuizTips = false;
    $scope.competitiveAnalysisQuizPage = false;
    $scope.displayCompetitiveAnalysisQuizScore = false;

    $scope.displayQuizPages = false;

    $scope.displayCasheQuizPage = false;
    $scope.displayCasheQuizTips = false;
    
    $scope.displayFintechQuizTips = false;

    $scope.displayVideosDocsPage = true;
    $scope.displayNavigateTipPage = false;
    
// ---------X----------X----------X---------X-----------X-----------X---------

    $scope.quiz_running  = false;

    $scope.slideUpQuizQuestions = function()
    {
        $('.fintechQuestions').slideUp(500);  
        $('.bhanixQuestions').slideUp(500);  
        $('.casheQuestions').slideUp(500);  
        $('.competitiveAnalysisQuestions').slideUp(500);
    }

    //var prev_selected_accordion=0;
    $scope.video_clicked = [false,false,false,false,false,false];
    var current_index = 0;
    var pagesTobeDisplayed = 0;
    $scope.quiz_running = false;
    $scope.displayVideosDocsPage = true;
    //var current_file = 'vid1';
    //var already_selected_file='vid1';
    //var first_files = ['vid1','word-doc-1','pdf-doc-1','ppt-doc-1'];
    
    //$scope.displayInThePage = function(event)
    $scope.displayInThePage = function(index,event)
    {
        id = event.target.id;
        default_video_clicked = false;
        if($scope.quiz_running == true)
        {
            if(confirm("Would you like to end the quiz?")==true)
            {
                document.getElementById('display').data = casheFiles.get('vid1');
                already_started_quiz_ended = true;
                clearInterval(timer); 
                document.getElementById($scope.quiz+"-countdown-timer").innerHTML = '';
                //$scope.displayNavigateTipPage=true;
                //$scope.displayQuizPages = false;
                $scope.submitQuiz($scope.running_quiz,true);
                $scope.displayFintechQuizScorePage=false;
                $scope.displayCasheQuizScorePage=false;
                $scope.displayBhanixQuizScorePage=false;
                $scope.displayCompetitiveAnalysisQuizScorePage=false;
                
        
                //$scope.quizTipsAreDisplayed = false;
                current_div = id;

                pagesTobeDisplayed = true;
            }
            else
            {
                pagesTobeDisplayed = false;
                switch(id)
                {
                    case 'quiz':
                        $scope.selectedQuizTitle = -1;

                }
                switch($scope.running_quiz)
                {
                    case 'fintechQuiz':
                        $scope.selectedQuizTopics = 0;
                        $scope.selectedFintechQuestion = questionVisited;
                        break;

                    case 'casheQuiz':
                        $scope.selectedQuizTopics = 1;
                        $scope.selectedCasheQuestion = questionVisited;
                        break;

                    case 'bhanixQuiz':
                        $scope.selectedQuizTopics = 2;
                        $scope.selectedBhanixQuestion = questionVisited;
                        break;
                
                    case 'competitiveAnalysisQuiz':
                        $scope.selectedQuizTopics = 3;
                        $scope.selectedCompetitiveAnalysisQuestion = questionVisited;
                }

                $scope.quizTipsAreDisplayed = false;
                current_div = $scope.running_quiz;
            }
        }
        else
        {
            pagesTobeDisplayed = true;     
        }
        if(pagesTobeDisplayed == true)
        {
            // $scope.showCasheContents=false;
            // $scope.showBhanixContents=false;
            // $scope.wordDocDisplayScreen = false;
            // $scope.pdfDocDisplayScreen = false;
            // $scope.pptDocDisplayScreen = false;
            // $scope.displayQuizPages=false;
            // $scope.displayVideosDocsPage=false;
            // $scope.displayWebsiteLinksPage=false;

            switch(id)
            {   
                case 'quiz':
                    if($scope.quiz_running==true)
                    {
                        
                        $scope.displayQuizPages=true;
                        $scope.displayFintechQuizPage=true;
                        $scope.displayFintechQuizTips=true;
                        $scope.selectedQuizTopics=0;
                        $scope.quiz_running = false;
                    }
                    else
                    {
                        $scope.hideAllQuizRelatedPages();
                        toggleAccordion = '.quiz-topics';
                        $scope.slideAccordions(toggleAccordion);
                    }
                    $scope.selectedQuizTitle = $scope.quizTitle;
                    break;

                default:
                    $scope.quiz_running=false;
                    //console.log("default");
                    $scope.displayQuizPages = false;
                    break;
            }
    
            $scope.slideUpQuizQuestions();
        }
    }
// ---------X----------X----------X---------X-----------X-----------X---------

    $scope.selections = 
    [
        -1, -1,-1,-1,-1,
        -1,-1,-1,-1,-1,
        -1,-1,-1,-1,-1,
        -1, -1,-1,-1,-1
    ];

    $scope.status = 
    [
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false
    ];
        
    var progress = 0;
    $scope.width = "";
    $scope.currentProgress = 0;

    $scope.questions = 
    [
        {
            "qid" : 1, "Question" : "When to choose Buy Now Pay later?", 
            "options" :
            [
                "No credit history", "having good credit history"
            ],
            "rightOption" : 0
        },
        {
            "qid" : 2, "Question" : "Does Buy Now Pay Later charge interest?", 
            "options" :
            [
                "Yes", "No"
            ],
            "rightOption" : 1
        },
        {
            "qid" : 3, "Question" : "Is early salary a mobile app or desktop app?", 
            "options" :
            [
                "Mobile App", "Desktop App"
            ],
            "rightOption" : 0
        },
        {
            "qid" : 4, "Question" : "Traditional lending saves customer's time compared to digital lending", 
            "options" :
            [
                "True", "False"
            ],
            "rightOption" : 1
        },
        
        {
            "qid" : 5, "Question" : "Competition, collaboration and convergence makes healthy relationship between bank and NBFC",
            "options" :
            [
                "True", "False"
            ],
            "rightOption" : 0
        },
            
        {
            "qid" : 6, "Question" : "What Is CASHe’s mission?", 
            "options" :
            [
                "To deliver transparent short-term loans to young Indian salaried millennials", 
                "To deliver transparent short-term loans to young Indian unsalaried millennials"
            ],
            "rightOption" : 0
        },
        {
            "qid" : 7, "Question" : "What is the fundamental belief of CASHe?", 
            "options" :
            [
                "Technology should be built not to address immediate credit requirements",
                "Technology should be built to address immediate credit requirements"
            ],
            "rightOption" : 1
        },
        {
            "qid" : 8, "Question" : "CASHe was founded in _______", 
            "options" :
            [
                "2016","2018"
            ],
            "rightOption" : 0
        },
        {
            "qid" : 9, "Question" : "CASHe is a mobile app", 
            "options" :
            [
                "True","False"
            ],
            "rightOption" : 0
        },
        {
            "qid" : 10, "Question" : "Bhanix was established on?", 
            "options" :
            [
                "March 15, 1996","March 15,1999"   
            ],
            "rightOption" : 0
        },
        {
            "qid" : 11, "Question" : "What is full form of NBFC?", 
            "options" :
            [
                "Non-banking functional company","Non-banking financial company"    
            ],
            "rightOption" : 1
        },
        {
            "qid" : 12, "Question" : "NBFC's allow deposits from customers", 
            "options" :
            [
                "True","False"
            ],
            "rightOption" : 1
        },
        {
            "qid" : 13, "Question" : "Bhanix provides loan through", 
            "options" :
            [
                "Website CASHe","Application CASHe" 
            ],
            "rightOption" : 1
        },
        {
            "qid" : 14, "Question" : "Fair practice code is meant for", 
            "options" :
            [
                "Easy loan disbursement","For maintaining transparency and honesty"
            ],
            "rightOption" : 1
        },
        {
            "qid" : 15, "Question" : "Who is the founder of CASHe?", 
            "options" :
            [
                "Yashoraj Tyagi", "V. Raman Kumar"
            ],
            "rightOption" : 1
        },
        {
            "qid" : 16, "Question" : "How much is MoneyView's Maximum Loan Ticket Size?", 
            "options" :
            [
                "Rs.4,00,000", "Rs.5,00,000"
            ],
            "rightOption" : 1
        },
        {
            "qid" : 17, "Question" : "Which of the following demographic are eligible to apply for a loan at MoneyView?", 
            "options" :
            [
                "Salaried or Self-Employed Individuals between the Age of 21 to 57", "Salaried Individuals only between the Age of 21 to 57"
            ],
            "rightOption" : 0
        },
        {
            "qid" : 18, "Question" : "MoneyView is available in Gpay", 
            "options" :
            [
                "TRUE", "FALSE"
            ],
            "rightOption" : 0
        },
        {
            "qid" : 19, "Question" : "MoneyView Advantage Card offers an interest free period of up to", 
            "options" :
            [
                "55 days", "40 days"
            ],
            "rightOption" : 1
        },
        {
            "qid" : 20, "Question" : "PostPe card has a credit limit of upto", 
            "options" :
            [
                "Rs.4 Lakhs", "Rs.10 Lakhs"
            ],
            "rightOption" : 1
        }
    ];
        
    var scoreFeedback = ['Poor','Average','Good','Excellent'];

        /* display website links functionality */
    $scope.displayLinks = function(event)
    { 
        if($scope.quiz_running == true)
        {
            if(confirm("Would you like to end the quiz?")==true)
            {
                displayTheLinks(event);
                $scope.quiz_running = false;
            }
        }
        else
        {
            displayTheLinks(event);
        }
        function displayTheLinks(event)
        {
            $scope.displayQuizPages = false;
        }
    }
        
        /* making a single function for Quiz Tips */
        
    $scope.prev_quiz = '';

    $scope.hideAllQuizRelatedPages = function()
    {
        $scope.displayFintechQuizPage = false;
        $scope.displayCasheQuizPage = false;
        $scope.displayBhanixQuizPage = false;
        $scope.displayCompetitiveAnalysisQuizPage = false;
        
        $scope.displayFintechQuizTips = false;
        $scope.displayCasheQuizTips = false;
        $scope.displayBhanixQuizTips = false;
        $scope.displayCompetitiveAnalysisQuizTips = false;

        $scope.fintechQuizPage = false;
        $scope.casheQuizPage = false;
        $scope.bhanixQuizPage = false;
        $scope.competitiveAnalysisQuizPage = false;

        $scope.displayFintechQuizScorePage = false;
        $scope.displayCasheQuizScorePage = false;
        $scope.displayBhanixQuizScorePage = false;
        $scope.displayCompetitiveAnalysisQuizScorePage = false;
    }
    $scope.hideAllQuizRelatedPages();

    $scope.displayQuizTips = function(event)
    {
        document.getElementById('display').data = casheFiles.get('vid1');
        id = event.target.id;
            // original code
        if($scope.quiz_running == true)
        {
            if(confirm("Would you like to end the quiz?")==true)
            {
                current_div = id;

                switch(id)
                {
                    case 'fintechQuiz':
                        $scope.selectedQuizTopics = 0;
                        break;

                    case 'casheQuiz':
                        $scope.selectedQuizTopics = 1;
                        break;

                    case 'bhanixQuiz':
                        $scope.selectedQuizTopics = 2;
                        break;

                    case 'competitiveAnalysisQuiz':
                        $scope.selectedQuizTopics = 3;
                        break;
                }
                $scope.quizTipsAreDisplayed = true;
                $scope.quiz_running = false;
            }
            else
            {
                switch($scope.running_quiz)
                {
                    case 'fintechQuiz':
                        $scope.selectedQuizTopics = 0;
                        $scope.selectedFintechQuestion = questionVisited;
                        break;

                    case 'casheQuiz':
                        $scope.selectedQuizTopics = 1;
                        $scope.selectedCasheQuestion = questionVisited;
                        break;

                    case 'bhanixQuiz':
                        $scope.selectedQuizTopics = 2;
                        $scope.selectedBhanixQuestion = questionVisited;
                        break;

                    case 'competitiveAnalysisQuiz':
                        $scope.selectedQuizTopics = 3;
                        $scope.selectedCompetitiveAnalysisQuestion = questionVisited;
                        break;
                }
                $scope.quizTipsAreDisplayed = false;
                current_div = $scope.running_quiz;
            }
        }
        else
        {
            $scope.quizTipsAreDisplayed = true;
        }
        if($scope.quizTipsAreDisplayed == true)
        {
            $scope.hideAllQuizRelatedPages();
            $scope.displayQuizPages = true;
            $scope.displayFintechQuizScorePage = false;
            $scope.displayVideosDocsPage=false;
            $scope.wordDocDisplayScreen=false;
            $scope.pdfDocDisplayScreenDocDisplayScreen=false;
            $scope.pptDocDisplayScreen=false;
            $scope.currentProgress = 
            {
                width : "0%"
            }

            clearInterval(timer);

            $scope.displayWebsiteLinksPage = false;
            $scope.displayNavigateTipPage = false;
            $scope.slideUpQuizQuestions();

            quiz_topic_enabled = true;

            switch(id)
            {
                case 'fintechQuiz':
                    $scope.displayFintechQuizTips = true;
                    $scope.displayFintechQuizPage = true;
                    $scope.quiz = 'fintech';
                    break;

                case 'casheQuiz':
                    $scope.displayCasheQuizTips = true;
                    $scope.displayCasheQuizPage = true;
                    $scope.quiz = 'cashe';
                    break;
                    
                case 'bhanixQuiz':
                    $scope.displayBhanixQuizTips = true;
                    $scope.displayBhanixQuizPage = true;
                    $scope.quiz = 'bhanix';
                    break;
                        
                case 'competitiveAnalysisQuiz':
                    $scope.displayCompetitiveAnalysisQuizTips = true;
                    $scope.displayCompetitiveAnalysisQuizPage = true;
                    $scope.quiz = 'competitive-analysis';
                    break;
            }
            document.getElementById($scope.quiz+"-countdown-timer").innerHTML = '';
            clearInterval(timer);
            $scope.displayVideosDocsPage = false;
            $scope.quizTipsAreDisplayed = false;
        }
    }

    
    $scope.startQuiz = function(id)
    {
        var quizAutoSubmit = false;
        $scope.question = 0;
        $scope.hideAllQuizRelatedPages();

        $scope.selectedFintechQuestion = 0;
        $scope.selectedCasheQuestion = 0;
        $scope.selectedBhanixQuestion = 0;
        $scope.selectedCompetitiveAnalysisQuestion = 0;

        $scope.running_quiz = id;
        $scope.quiz_running = true;

        $scope.displayWebsiteLinksPage = false;
        
        $scope.slideUpQuizQuestions();
            
        $('.links').slideUp(500);
        $('.ppt-docs').slideUp(500);
        $('.word-doc').slideUp(500);
        $('.word-docs').slideUp(500);
        $('.videos').slideUp(500);
        $('.pdf-docs').slideUp(500);  
        $('.pdf-doc').slideUp(500);

        progress = 0;

        $scope.status = 
        [
            false,false,false,false,false,
            false,false,false,false,false,
            false,false,false,false,false,
            false,false,false,false,false
        ];

        $scope.currentProgress = 
        {
            width : "0%"
        }

        $scope.selections = 
        [
            -1, -1,-1,-1,-1,
            -1,-1,-1,-1,-1,
            -1,-1,-1,-1,-1,
            -1, -1,-1,-1,-1
        ];

        switch(id)
        {
            case 'fintechQuiz':
                $scope.displayFintechQuizPage=true;
                $scope.fintechQuizPage = true;
                $scope.quiz = 'fintech';
                $scope.topicQuestions = '.fintechQuestions';
                $scope.currentQ = 1;
                break;

            case 'casheQuiz':
                $scope.displayCasheQuizPage=true;
                $scope.casheQuizPage = true;
                $scope.quiz = 'cashe';
                $scope.topicQuestions = '.casheQuestions';
                $scope.currentQ = 6;
                break;
                    
            case 'bhanixQuiz':
                $scope.displayBhanixQuizPage=true;
                $scope.bhanixQuizPage = true;
                $scope.quiz = 'bhanix';
                $scope.topicQuestions = '.bhanixQuestions';
                $scope.currentQ = 11;
                break;                    
                        
            case 'competitiveAnalysisQuiz':
                $scope.displayCompetitiveAnalysisQuizPage = true;
                $scope.competitiveAnalysisQuizPage = true;
                $scope.quiz = 'competitive-analysis';
                $scope.topicQuestions = '.competitiveAnalysisQuestions';
                $scope.currentQ = 16;
                break;
        }
        $($scope.topicQuestions).slideDown(500);
        $scope.selectAnswer = function(answerNo)
        {
            $scope.selections[$scope.currentQ-1] = answerNo;
            if($scope.status[$scope.currentQ-1] == false)
            {
                $scope.status[$scope.currentQ-1] = true;
                progress =  progress+1;
            }    
            $scope.currentProgress =
            {
                width : progress/5*100 + "%"
            }
        }

        $scope.countDownTimer = 600;    
        timer = setInterval(function()
	    {
            if($scope.countDownTimer <= 0)
            {
                clearInterval(timer);
                $scope.submitQuiz(id,true);
            }
            
            min= Math.floor($scope.countDownTimer/60);
            sec = $scope.countDownTimer%60;
            if(sec<10)
            {
                sec="0"+sec;
            }
            if(min<10)
            {
                min="0"+min;
            }
            if(min==0)
            {
                if(sec<10)
                {
                    $scope.foregroundColor = 'red';
                }
                else
                {
                    $scope.foregroundColor = 'black';
                }
            }
            else
            {
                $scope.foregroundColor = 'black';
            }
            $scope.fontWeight='bold';
            $scope.fontSize='20px';
            $scope.top='10px';
            document.getElementById($scope.quiz+"-countdown-timer").innerHTML = min + ":" + sec;
            $scope.countDownTimer--;
            $scope.$apply();
        }, 1000);
        $scope.prevButton = true;
        $scope.nextButton=true;
        $scope.countDown = true;
        $scope.displayVideosDocsPage = false;
    }

    /* --------------------------------------------------------------------------------*/
    $scope.quizAutoSubmitted = function(id)
    {
        $scope.hideAllQuizRelatedPages();
            //clearInterval(timer);
            $scope.quiz_running = false;
            $scope.currentProgress =
            {
                width : "0%"
            }
            switch(id)
            {
                case 'fintechQuiz':
                    $scope.displayFintechQuizPage = true;
                    $scope.displayFintechQuizScorePage = true;
                    startQ=1;
                    $scope.quiz_score = 'fintech'
                    break;
    
                case 'casheQuiz':
                    $scope.displayCasheQuizPage = true;
                    $scope.displayCasheQuizScore = true;
                    startQ=6;
                    $scope.quiz_score = 'cashe'
                    break;
    
                case 'bhanixQuiz':
                    $scope.displayBhanixQuizPage = true;
                    $scope.displayBhanixQuizScore = true;
                    startQ=11;
                    $scope.quiz_score = 'bhanix'
                    break;
    
                case 'competitiveAnalysisQuiz':
                    $scope.displayCompetitiveAnalysisQuizPage = true;
                    $scope.displayCompetitiveAnalysisQuizScore = true;
                    startQ=16;
                    $scope.quiz_score = 'competitive-analysis'
                    break;
            }
            for(var i=startQ-1 ; i<startQ+4 ; i++)
            {
                if($scope.selections[i] == $scope.questions[i].rightOption)
                {
                    score++;
                } 
            }
            document.getElementById($scope.quiz_score+'-quiz-score').innerHTML = "<h1>Score : "+score+"/5</h1>";

            if(score<=1)
            {
                document.getElementById($scope.quiz_score+'-quiz-feedback').innerHTML= "Feedback : "+scoreFeedback[0];
            }
            else if(score>1 && score<=2)
            {
                document.getElementById($scope.quiz_score+'-quiz-feedback').innerHTML = "Feedback : "+scoreFeedback[1];
            }
            else if(score>2 && score<=3)
            {
                document.getElementById($scope.quiz_score+'-quiz-feedback').innerHTML = "Feedback : "+scoreFeedback[2];
            }
            else
            {
                document.getElementById($scope.quiz_score+'-quiz-feedback').innerHTML = "Feedback : "+scoreFeedback[3];
            } 
    }
    /* submit Quiz */
    var score=0;
    var startQ=0;

    $scope.submitQuiz = function(id,auto_submit)
    {
        score=0;
        if(auto_submit == true)
        {
            $scope.slideUpQuizQuestions();
            $scope.scoreIsDisplayed = true;
        }
        else if(auto_submit == false)
        {
            if(confirm("Are you sure you want to submit?")==true)
            {
                $scope.slideUpQuizQuestions();
                $scope.quiz_running = false;
                $scope.scoreIsDisplayed = true;
            }
            else
            {
                $scope.scoreIsDisplayed = false;
            }
        }
        if($scope.scoreIsDisplayed == true)
        {
            $scope.hideAllQuizRelatedPages();
            $scope.quiz_running = false;
            $scope.currentProgress =
            {
                width : "0%"
            }
            switch(id)
            {
                case 'fintechQuiz':
                    $scope.displayFintechQuizPage = true;
                    $scope.displayFintechQuizScorePage = true;
                    startQ=1;
                    $scope.quiz_score = 'fintech'
                    break;
    
                case 'casheQuiz':
                    $scope.displayCasheQuizPage = true;
                    $scope.displayCasheQuizScorePage = true;
                    startQ=6;
                    $scope.quiz_score = 'cashe'
                    break;
    
                case 'bhanixQuiz':
                    $scope.displayBhanixQuizPage = true;
                    $scope.displayBhanixQuizScorePage = true;
                    startQ=11;
                    $scope.quiz_score = 'bhanix'
                    break;
    
                case 'competitiveAnalysisQuiz':
                    $scope.displayCompetitiveAnalysisQuizPage = true;
                    $scope.displayCompetitiveAnalysisQuizScorePage = true;
                    startQ=16;
                    $scope.quiz_score = 'competitive-analysis'
                    break;
            }
            for(var i=startQ-1 ; i<startQ+4 ; i++)
            {
                if($scope.selections[i] == $scope.questions[i].rightOption)
                {
                    score++;
                } 
            }
            document.getElementById($scope.quiz_score+'-quiz-score').innerHTML = "<h1>Score : "+score+"/5</h1>";

            if(score<=1)
            {
                document.getElementById($scope.quiz_score+'-quiz-feedback').innerHTML= "Feedback : "+scoreFeedback[0];
            }
            else if(score>1 && score<=2)
            {
                document.getElementById($scope.quiz_score+'-quiz-feedback').innerHTML = "Feedback : "+scoreFeedback[1];
            }
            else if(score>2 && score<=3)
            {
                document.getElementById($scope.quiz_score+'-quiz-feedback').innerHTML = "Feedback : "+scoreFeedback[2];
            }
            else
            {
                document.getElementById($scope.quiz_score+'-quiz-feedback').innerHTML = "Feedback : "+scoreFeedback[3];
            }  
        }
    }
    /* ---------------------------------------------------------------------------------*/ 

    $scope.currentQ=1;   
        // jump to Question
    $scope.jumpToQuestion = function(event)
    {   
        $scope.displayWebsiteLinksPage = false;   
        quiz_topic_enabled = true;
        id=event.target.id;
        var ch=0;
        var new_id = '';
        var new_i=0;
        for(var i=0;i<id.length;i++)
        {
            if(id.charAt(i) == "_")
            {
                ch=1;
                break;
            }
        }
        if(ch == 1)
        {
            for(var i=0;i<id.length;i++)
            {
                if(id.charAt(i) == "_")
                {
                    new_i=i+1;
                    break;
                }
            }
            for(i=new_i;i<id.length;i++)
            {
                new_id = new_id+id.charAt(i);
            }
            id = parseInt(new_id);
        }
        else
        {
            id=parseInt(id);
        }
        $scope.currentQ = id;
    }

        /* ---------------------------------------------------------------------*/
        /* start quiz */

    $scope.questionDecrement = function()
    {
        $scope.question--;
        switch($scope.running_quiz)
        {
            case 'fintechQuiz':
                $scope.selectedFintechQuestion = $scope.question;

            case 'casheQuiz':
                $scope.selectedCasheQuestion = $scope.question;

            case 'bhanixQuiz':
                $scope.selectedBhanixQuestion = $scope.question;
            
            case 'competitiveAnalysisQuiz':
                $scope.selectedCompetitiveAnalysisQuestion = $scope.question;
        }
    }

    $scope.questionIncrement = function()
    {
        $scope.question++;
        switch($scope.running_quiz)
        {
            case 'fintechQuiz':
                $scope.selectedFintechQuestion = $scope.question;

            case 'casheQuiz':
                $scope.selectedCasheQuestion = $scope.question;

            case 'bhanixQuiz':
                $scope.selectedBhanixQuestion = $scope.question;
            
            case 'competitiveAnalysisQuiz':
                $scope.selectedCompetitiveAnalysisQuestion = $scope.question;
        }
    }
}
fintechQuizApp.controller('quizController',ctrl);