var fintechQuizApp = angular.module('casheLearningsApp',[]);
var min=0;
var remSec = 0;

/* Quiz Questions and answers */

/* JavaScript functions */
/*=========================*/

var div_clicked = false;
var current_div = '';
var ch=0;
function hoverApplied(id,color)
{
    document.getElementById(id).style.backgroundColor = color;
    document.getElementById(current_div).style.backgroundColor = 'orange';
}

var accordion_clicked = false;

var ch01=0;
function hoverLost(id,color)
{
        document.getElementById(id).style.backgroundColor = color;
        document.getElementById(current_div).style.backgroundColor = 'orange';
} 

var ctrl = function($scope)
{
        $scope.startCountDown = false;
        $scope.color = false;
        $scope.displayFintechQuiz = false;
        $scope.casheQuizDisplay =true;
        $scope.fintechQuizScoreDisplay=false;
        $scope.scoreDisplay=false;
        $scope.selections = [-1, -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
        $scope.status = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
        var progress = 0;
        $scope.width = "";
        $scope.currentProgress = 0;

        $scope.questions = [
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
                "qid" : 7, "Question" : "what is the fundamental belief of CASHe?", 
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
                "qid" : 11, "Question" : "What is full form of NBFC", 
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
            }
        ];
        var scoreFeedback = ['Poor','Average','Good','Excellent'];
        $scope.casheQuizTips = false;

        var prev_div = 0;
        var prev_accordion_visited = false;

        $scope.changeBackground = function(event)
        {
            current_div = event.target.id;
            if(prev_accordion_visited==true)
            {
                document.getElementById(prev_div).style.backgroundColor = 'rgb(64,64,64)';
            }
            document.getElementById(current_div).style.backgroundColor = 'orange';
            hoverApplied(current_div,'orange');
            hoverLost(current_div,'orange');
            prev_div = current_div;
            prev_accordion_visited=true;
        }

        $scope.displayFintechQuizTips = function(event)
        {
                $('.fintechQuestions').slideUp(500); 
                $('.casheQuestions').slideUp(500); 
                $('.bhanixQuestions').slideUp(500); 

                $scope.changeBackground(event);
                document.getElementById('display-quiz-pages').style.display = "block";
                document.getElementById('display-fintech-quiz-page').style.display = 'block';
                document.getElementById('display-cashe-quiz-page').style.display = 'none';
                document.getElementById('display-bhanix-quiz-page').style.display = 'none';
                document.getElementById('fintech-quiz-tips').style.display = 'block';
                document.getElementById('fintech-quiz-page').style.display = 'none';
                document.getElementById('displayFintechQuizScore').style.display = 'none';
                
                clearInterval($scope.downloadTimer);
                
                $scope.timeleft = 0;
                document.getElementById('displayDIV').style.display = 'none';

        }
        

    $scope.submitFintechQuiz = function(submit)
    {      
        $('.fintechQuestions').slideUp(500); 
        $('.casheQuestions').slideUp(500); 
        $('.bhanixQuestions').slideUp(500); 
        
        var score=0;
        $scope.quizFeedback = '';
        if(submit == false)
        {
            if(confirm("Are you sure you want to submit?")==submit)
            {
                submit = true;
            }
        }
        else
        {
            // $scope.currentProgress =
            // {
            //     width : "0%"
            // }
            document.getElementById('displayFintechQuizScore').style.display = "block";
            document.getElementById('fintech-quiz-page').style.display='none';
                        /* score calculation takes place here */
            for(var i=0 ; i<5 ; i++)
            {
                if($scope.selections[i] == $scope.questions[i].rightOption)
                {
                    score++;
                } 
            }
            document.getElementById('score').innerHTML = "<h1>Score : "+score+"/5</h1>";

            if(score<=1)
            {
                document.getElementById('feedback').innerHTML= "Feedback : "+scoreFeedback[0];
            }
            else if(score>1 && score<=2)
            {
                document.getElementById('feedback').innerHTML = "Feedback : "+scoreFeedback[1];
            }
            else if(score>2 && score<=3)
            {
                document.getElementById('feedback').innerHTML = "Feedback : "+scoreFeedback[2];
            }
            else
            {
                document.getElementById('feedback').innerHTML = "Feedback : "+scoreFeedback[3];
            }
            $scope.selections = [-1, -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
           
        }  
    }

    // jump to Question
    $scope.jumpToQuestion = function(event)
    {
            $scope.changeBackground(event);
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

    $scope.startFintechQuiz = function()
    {
        $('.fintechQuestions').slideDown(500);
        $('.links').slideUp(500);
        $('.ppt-docs').slideUp(500);
        $('.word-doc').slideUp(500);
        $('.word-docs').slideUp(500);
        $('.videos').slideUp(500);
        $('.pdf-docs').slideUp(500);  
        $('.pdf-doc').slideUp(500);
        $('.casheQuestions').slideUp(500); 
        $('.competitiveAnalysisQuestions').slideUp(500); 
    
        progress = 0;
        $scope.currentQ = 1;
        $scope.timeleft = 300;
        $scope.status = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
        $scope.currentProgress = 
        {
                 width : progress + '%'
        }
        $scope.selections = [-1, -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
        document.getElementById('fintech-quiz-page').style.display = "block";
        document.getElementById('fintech-quiz-tips').style.display = 'none';

        $scope.selectFintechAnswer = function(answerNo)
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

        $scope.selectBhanixAnswer = function(answerNo)
        {
                $scope.selections[$scope.currentQ-1] = answerNo;
                
                if($scope.status[$scope.currentQ-1] == false)
                {
                        $scope.status[$scope.currentQ-1] = true;
                        progress = progress+1;
                }    
                $scope.currentProgress =
                {
                        width : progress/5*100 + "%"
                }
        }


        
        $scope.downloadTimer = setInterval(function()
        {
            if($scope.timeleft <= 0)
            {
                clearInterval($scope.downloadTimer);
                $scope.submitFintechQuiz(true);
            }
            min= Math.floor($scope.timeleft/60);
            sec = $scope.timeleft%60;
            if(sec<10)
            {
                sec="0"+sec;
            }
                if(min<10)
                {
                        min="0"+min;
                }
                
                document.getElementById("countdown-timer").style.fontWeight = "bold";
                document.getElementById("countdown-timer").style.fontSize = "20px";
                document.getElementById("countdown-timer").style.top = "10px";
                document.getElementById("countdown-timer").innerHTML = min + ":" + sec;
                $scope.timeleft = $scope.timeleft - 1;
        }, 1000);
      
        
        
        
        document.getElementById('fintech-previous-button').style.display = 'block';
        document.getElementById('progressBar').style.display = 'block';
        
        document.getElementById('countdown').style.display = 'block';

        document.getElementById('fintech-next-button').style.display = 'block';

        document.getElementById('display-fintech-quiz-page').style.display = 'block';
        document.getElementById('displayDIV').style.display = 'none';
      
        $scope.currentQ=1;
    
    }

    // =======================================================================
             // CASHe quiz
             //===========

    $scope.displayCasheQuizTips = function(event)
    {
        $('.fintechQuestions').slideUp(500); 
        $('.casheQuestions').slideUp(500); 
        $('.bhanixQuestions').slideUp(500); 

        document.getElementById('casheQuiz').style.backgroundColor = "orange";
        $scope.changeBackground(event);
        document.getElementById('display-quiz-pages').style.display = "block";
        document.getElementById('display-cashe-quiz-page').style.display = 'block';
        document.getElementById('display-bhanix-quiz-page').style.display = 'none';
        document.getElementById('cashe-quiz-tips').style.display = 'block';

        document.getElementById('displayCasheQuizScore').style.display = 'none';
        document.getElementById('displayDIV').style.display = 'none';
        document.getElementById('display-fintech-quiz-page').style.display = 'none';
        document.getElementById('cashe-quiz-page').style.display = 'none';
      
        clearInterval($scope.downloadTimer);
        
        $scope.casheTimeLeft = 0;
        document.getElementById('displayDIV').style.display = 'none';        
    }

    $scope.submitCasheQuiz = function()
    {      
        $('.fintechQuestions').slideUp(500); 
        $('.casheQuestions').slideUp(500); 
        $('.bhanixQuestions').slideUp(500); 

        var score=0;
        
        $scope.currentProgress =
        {
            width : "0%"
        }
        document.getElementById('displayCasheQuizScore').style.display = "block";
        document.getElementById('cashe-quiz-page').style.display='none';
        
                        /* score calculation takes place here */
        for(var i=5 ; i<10 ; i++)
        {
            if($scope.selections[i] == $scope.questions[i].rightOption)
            {
                score++;
            } 
        }
        document.getElementById('cashe-quiz-score').innerHTML = "Score : "+score+"/5";

        if(score<=1)
        {
            document.getElementById('cashe-quiz-feedback').innerHTML= "Feedback : "+scoreFeedback[0];
        }
        else if(score>1 && score<=2)
        {
            document.getElementById('cashe-quiz-feedback').innerHTML = "Feedback : "+scoreFeedback[1];
        }
        else if(score>2 && score<=3)
        {
            document.getElementById('cashe-quiz-feedback').innerHTML = "Feedback : "+scoreFeedback[2];
        }
        else
        {
            document.getElementById('cashe-quiz-feedback').innerHTML = "Feedback : "+scoreFeedback[3];
        }
        $scope.selections = [-1, -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    }

    $scope.startCasheQuiz = function()
    {
         $('.casheQuestions').slideDown(500);  
            $('.links').slideUp(500);
            $('.ppt-docs').slideUp(500);
            $('.word-doc').slideUp(500);
            $('.word-docs').slideUp(500);
            $('.videos').slideUp(500);
            $('.pdf-docs').slideUp(500);  
            $('.pdf-doc').slideUp(500);
            $('.fintechQuestions').slideUp(500); 
            $('.bhanixQuestions').slideUp(500);  

        $scope.casheTimeLeft = 300;
        $scope.currentQ = 6;
        progress = 0;
        $scope.status = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
        $scope.currentProgress = 
        {
                width : "0%"
        }
        $scope.selections = [-1, -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
        document.getElementById('cashe-quiz-page').style.display = "block";
        document.getElementById('cashe-quiz-tips').style.display = 'none';

        $scope.downloadTimer = setInterval(function()
        {
            if($scope.casheTimeLeft <= 0)
            {
                clearInterval($scope.downloadTimer);
                $scope.submitCasheQuiz();
            }
            
            min= Math.floor($scope.casheTimeLeft/60);
            sec = $scope.casheTimeLeft%60;
            if(sec<10)
            {
                sec="0"+sec;
            }
                if(min<10)
                {
                        min="0"+min;
                }
                document.getElementById("cashe-countdown-timer").style.fontWeight = "bold";
                document.getElementById("cashe-countdown-timer").style.fontSize = "20px";
                document.getElementById("cashe-countdown-timer").style.top = "10px";
                document.getElementById("cashe-countdown-timer").innerHTML = min + ":" + sec;
                
                $scope.casheTimeLeft = $scope.casheTimeLeft - 1;
        }, 1000);
      
        document.getElementById('fintech-previous-button').style.display = 'block';
        document.getElementById('progressBar').style.display = 'block';

        document.getElementById('countdown').style.display = 'block';

        document.getElementById('fintech-next-button').style.display = 'block';
        document.getElementById('displayDIV').style.display = 'none';
      
       // $scope.isDisplayed = false;
    
        
        $scope.selectCasheAnswer = function(answerNo)
        {
                $scope.selections[$scope.currentQ-1] = answerNo;
                
                if($scope.status[$scope.currentQ-1] == false)
                {
                        $scope.status[$scope.currentQ-1] = true;
                        progress = progress+1;
                }    
                $scope.currentProgress =
                {
                        width : progress/5*100 + "%"
                }
        }
    }

    $scope.displayBhanixQuizTips = function(event)
    {
        $('.fintechQuestions').slideUp(500); 
        $('.casheQuestions').slideUp(500); 
        $('.bhanixQuestions').slideUp(500); 
        
        $scope.changeBackground(event);
        document.getElementById('display-quiz-pages').style.display = "block";
        document.getElementById('display-bhanix-quiz-page').style.display = 'block';
        document.getElementById('display-cashe-quiz-page').style.display = 'none';
        document.getElementById('display-fintech-quiz-page').style.display = 'none';
        document.getElementById('bhanix-quiz-tips').style.display = 'block';
        document.getElementById('bhanix-quiz-page').style.display = 'none';
        document.getElementById('displayBhanixQuizScore').style.display = 'none';
        
        clearInterval($scope.downloadTimer);
        $scope.timeleft = 0;
        document.getElementById('displayDIV').style.display = 'none';
    }

    /* =================================================================*/

    /* bhanix quiz submission functionality starts here */
    $scope.submitBhanixQuiz = function()
    {      
        $('.fintechQuestions').slideUp(500); 
        $('.casheQuestions').slideUp(500); 
        $('.bhanixQuestions').slideUp(500); 

        var score=0;
        
        $scope.currentProgress =
        {
            width : "0%"
        }
        document.getElementById('displayBhanixQuizScore').style.display = "block";
        document.getElementById('bhanix-quiz-page').style.display='none';
        
                        /* score calculation takes place here */
        for(var i=10 ; i<15 ; i++)
        {
            if($scope.selections[i] == $scope.questions[i].rightOption)
            {
                score++;
            } 
        }
        document.getElementById('bhanix-quiz-score').innerHTML = "Score : "+score+"/5";

        if(score<=1)
        {
            document.getElementById('bhanix-quiz-feedback').innerHTML= "Feedback : "+scoreFeedback[0];
        }
        else if(score>1 && score<=2)
        {
            document.getElementById('bhanix-quiz-feedback').innerHTML = "Feedback : "+scoreFeedback[1];
        }
        else if(score>2 && score<=3)
        {
            document.getElementById('bhanix-quiz-feedback').innerHTML = "Feedback : "+scoreFeedback[2];
        }
        else
        {
            document.getElementById('bhanix-quiz-feedback').innerHTML = "Feedback : "+scoreFeedback[3];
        }
        $scope.selections = [-1, -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    }

    /* ===============================================================================*/

    /* bhanix quiz functionality starts here */
    $scope.startBhanixQuiz = function()
    {
        $('.bhanixQuestions').slideDown(500);  
        $('.links').slideUp(500);
        $('.ppt-docs').slideUp(500);
        $('.word-doc').slideUp(500);
        $('.word-docs').slideUp(500);
        $('.videos').slideUp(500);
        $('.pdf-docs').slideUp(500);  
        $('.pdf-doc').slideUp(500);
        $('.fintechQuestions').slideUp(500); 
        $('.casheQuestions').slideUp(500);  

        $scope.casheTimeLeft = 300;
        $scope.currentQ = 11;
        progress = 0;
        $scope.status = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
        $scope.currentProgress = 
        {
                width : "0%"
        }
        $scope.selections = [-1, -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
        document.getElementById('bhanix-quiz-page').style.display = "block";
        document.getElementById('bhanix-quiz-tips').style.display = 'none';

        $scope.downloadTimer = setInterval(function()
        {
            if($scope.casheTimeLeft <= 0)
            {
                clearInterval($scope.downloadTimer);
                $scope.submitCasheQuiz();
            }
            
            min= Math.floor($scope.casheTimeLeft/60);
            sec = $scope.casheTimeLeft%60;
            if(sec<10)
            {
                sec="0"+sec;
            }
                if(min<10)
                {
                        min="0"+min;
                }
                document.getElementById("bhanix-countdown-timer").style.fontWeight = "bold";
                document.getElementById("bhanix-countdown-timer").style.fontSize = "20px";
                document.getElementById("bhanix-countdown-timer").style.top = "10px";
                document.getElementById("bhanix-countdown-timer").innerHTML = min + ":" + sec;
                
                $scope.casheTimeLeft = $scope.casheTimeLeft - 1;
        }, 1000);
      
        document.getElementById('fintech-previous-button').style.display = 'block';
        document.getElementById('progressBar').style.display = 'block';

        document.getElementById('countdown').style.display = 'block';

        document.getElementById('fintech-next-button').style.display = 'block';
        document.getElementById('displayDIV').style.display = 'none';
      
       // $scope.isDisplayed = false;
    
        
        $scope.selectBhanixAnswer = function(answerNo)
        {
                $scope.selections[$scope.currentQ-1] = answerNo;
                
                if($scope.status[$scope.currentQ-1] == false)
                {
                        $scope.status[$scope.currentQ-1] = true;
                        progress = progress+1;
                }    
                $scope.currentProgress =
                {
                        width : progress/5*100 + "%"
                }
        }
    }
}

fintechQuizApp.controller('quizController',ctrl);
