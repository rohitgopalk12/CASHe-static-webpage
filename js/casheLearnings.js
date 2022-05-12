var default_video_clicked = true;
const casheFiles = new Map();
var accordions_list = ['.videos','.documents','.ppt-docs','.links','.quiz-topics']

//=====================================================================================
                                /* youtube video links */
                                /* ============================== */
casheFiles.set('vid1','https://www.youtube.com/embed/Pl7XP8o7v6g?autoplay=0');
casheFiles.set('vid2','https://www.youtube.com/embed/JvNvINEgW1s?autoplay=0');
casheFiles.set('vid3','https://www.youtube.com/embed/ww_83m_bB_U?autoplay=0');
casheFiles.set('vid4','https://www.youtube.com/embed/C1E5tHaZaks?autoplay=0');
casheFiles.set('vid5','https://www.youtube.com/embed/7jS9JMxg5R4?autoplay=0');
casheFiles.set('vid6','https://www.youtube.com/embed/z_zj2OmTRJk?autoplay=0');

//=====================================================================================

                                /* word documents links */
                                //=========================

casheFiles.set('word-doc-1','assets/3_reasons_BNPL_is_a_hit_among_young_shoppers_this_festive_season.pdf');
casheFiles.set('word-doc-2','assets/5_apps_to_consider_for_micro_loans_this_festive_season.pdf');
casheFiles.set('word-doc-3','assets/5_Tech-Based_Platforms_Driving_Credit_Literacy.pdf');
casheFiles.set('word-doc-4','assets/Banking_2_dot_0.pdf');
casheFiles.set('word-doc-5','assets/BHANIX_FINANCE.pdf');

casheFiles.set('word-doc-6','assets/BNPL_lights_up_India’s_ecommerce_sales_this_Diwali.pdf');
casheFiles.set('word-doc-7','assets/Buy_now_pay_later_set_to_surge_over_ten_fold_in_India.pdf');
casheFiles.set('word-doc-8','assets/Buy_now,pay_later_set_to_surge_over_ten-fold_in_India-reuters.pdf');
casheFiles.set('word-doc-9','assets/Buy-Now,_Pay-Later_Loans_Help_Fuel_India’s_Festive_Recovery.pdf');
casheFiles.set('word-doc-10','assets/CASHe_appoints_veteran_banker_Jogindar_Rana_to_Top_Role.pdf');

casheFiles.set('word-doc-11','assets/CASHe_product_pipeline.pdf');
casheFiles.set('word-doc-12','assets/CASHe_Raises_Rs_140_Cr_V_Raman_Kumar_Talks_About_Growth_Ahead.pdf');
casheFiles.set('word-doc-13','assets/CASHe_roadmap.pdf');
casheFiles.set('word-doc-14','assets/CASHe.pdf');
casheFiles.set('word-doc-15','assets/CXO_Exclusive-Building_a_Digital-first_Customer_Acquisition_and_Collection_Process.pdf');

casheFiles.set('word-doc-16','assets/Exploring_AI-Driven_Financial_Inclusion_with_Yashoraj_Tyagi,_CTO_of_CASHe.pdf');
casheFiles.set('word-doc-17','assets/Fintech_Platform_raises_$19_million_from_its_Singaporean_parent_TSLC.pdf');
casheFiles.set('word-doc-18','assets/How_to_safeguard_yourself_from_financial_frauds.pdf');
casheFiles.set('word-doc-19','assets/Is_Buy_Now,_Pay_Later_A_Good_Idea_For_Consumers.pdf');
casheFiles.set('word-doc-20','assets/Pandemic_Fuels_Tech_Inclusion_in_the_Financial_Sector.pdf');

casheFiles.set('word-doc-21','assets/Personal_Lending_Startup_CASHe_secures_INR_140_Crores_Equity_funding.pdf');
casheFiles.set('word-doc-22','assets/Personal_Loans_for_young_salaried_millennials_across_India.pdf');
casheFiles.set('word-doc-23','assets/Sept_records_35_percent_rise_in_BNPL_loan_applications.pdf');
casheFiles.set('word-doc-24','assets/The_evolution_of_the_digital_lending_sector_in_India.pdf');
casheFiles.set('word-doc-25','assets/Top_apps_that_help_you_take_an_instant_personal_loan.pdf');
casheFiles.set('word-doc-26','assets/With_10x_growth_for_BNPL_products_during_sales.pdf');

//====================================================================================
                                        /* pdf docs */
                                        //============

casheFiles.set('pdf-doc-1','assets/BHANIX-and-CASHe.pdf');
casheFiles.set('pdf-doc-2','assets/BUY-NOW-PAY-LATER.pdf');
casheFiles.set('pdf-doc-3','assets/FinTech-Financial-Sector.pdf');

//====================================================================================

                                        /* ppt files */
                                        //================

casheFiles.set('ppt-doc-1','assets/BHANIX-and-CASHe.pdf');
casheFiles.set('ppt-doc-2','assets/BUY-NOW-PAY-LATER.pdf');
casheFiles.set('ppt-doc-3','assets/FinTech-Financial-Sector.pdf');

//====================================================================================

//====================================================================================

                /* function to display on the right part of the page */
                //=====================================================



//====================================================================================

                /* Jquery slideup and slide toggling accordion menu */
                //===================================================

var toggleAccordion = '';
var downloadTimer = 0;
var timeleft = 0;
var timer = 0;
function slideAccordions(toggleAccordion)
{
    for(var i=0;i<accordions_list.length;i++)
    {
        if(toggleAccordion != '')
        {
            if(accordions_list[i] == toggleAccordion)
            {
                $(toggleAccordion).slideToggle(500);  
            }
            else
            {
                $(accordions_list[i]).slideUp(500);  
            }
        }
    }
}

var fintechQuizApp = angular.module('casheLearningsApp',[]);
var min=0;
var remSec = 0;

/* Quiz Questions and answers */

/* JavaScript functions */
/*=========================*/

var current_div = '';
var current_div_clicked=false;
var current_quiz_name = '';

function hoverApplied(id,color)
{
    if(default_video_clicked == true)
    {
        document.getElementById('vid1').style.backgroundColor = 'orange';
    }
    else
    {
        document.getElementById(id).style.backgroundColor = color;
        if(current_div_clicked == true)
        {
            document.getElementById(current_div).style.backgroundColor = 'orange';
        } 
    }
}

function hoverLost(id,color)
{
    if(default_video_clicked == true)
    {
        document.getElementById('vid1').style.backgroundColor = 'orange';
    }
    else
    {
        document.getElementById(id).style.backgroundColor = color;
        if(current_div_clicked == true)
        {
            document.getElementById(current_div).style.backgroundColor = 'orange';
        }
    }
} 

document.getElementById('vid1').style.backgroundColor = 'orange';
// document.getElementById('displayBlankPage').style.display = "none";

var ctrl = function($scope)
{
    $scope.intervalCleared = false;
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
    $('.videos').slideDown(500);
// ---------X----------X----------X---------X-----------X-----------X---------
  
    $scope.wordDocPdfDocSlideUp = true;
    $scope.quiz_running  = false;

    $scope.slideUpQuizQuestions = function()
    {
        $('.fintechQuestions').slideUp(500);  
        $('.bhanixQuestions').slideUp(500);  
        $('.casheQuestions').slideUp(500);  
        $('.competitiveAnalysisQuestions').slideUp(500);
    }

    $scope.displayInThePage = function(event)
    {
        id = event.target.id;
        default_video_clicked = false;
        if($scope.quiz_running == true)
        {
            if(confirm("Would you like to end the quiz?")==true)
            {
                $scope.quiz_running = false;
                $scope.pageToBeDisplayed(id);            
            }
            else
            {
                $scope.quizTipsAreDisplayed = false;
            }
        }
        else
        {
            $scope.pageToBeDisplayed(id);       
        }
    }

    $scope.pageToBeDisplayed = function(id)      
    {
        if(id=='vidRec' || id=='document' || id=='word' || id=='pdf' || id=='ppt-doc' || id=='websites' || id=='quiz')
        {
            switch(id)
            {
                case 'vidRec':
                    toggleAccordion = '.videos';
                    $scope.wordDocPdfDocSlideUp = true;
                    break;

                case 'document':
                    document.getElementById('display').data = casheFiles.get('vid1');
                    toggleAccordion = '.documents';
                    $scope.wordDocPdfDocSlideUp = true;
                    break;

                case 'word':
                    toggleAccordion = '';
                    document.getElementById('display').data = casheFiles.get('vid1');
                    $scope.wordDocPdfDocSlideUp = false;
                    $('.word-docs').slideToggle(500);
                    $('.pdf-docs').slideUp(500);
                    break;

                case 'pdf':
                    toggleAccordion = '';
                    document.getElementById('display').data = casheFiles.get('vid1');
                    $scope.wordDocPdfDocSlideUp = false;
                    $('.word-docs').slideUp(500);
                    $('.pdf-docs').slideToggle(500);
                    break;

                case 'ppt-doc':
                    document.getElementById('display').data = casheFiles.get('vid1');
                    toggleAccordion = '.ppt-docs';
                    $scope.wordDocPdfDocSlideUp = true;
                    break;

                case 'websites':
                    document.getElementById('display').data = casheFiles.get('vid1');
                    toggleAccordion = '.links'
                    $scope.wordDocPdfDocSlideUp = true;
                    break;
                
                case 'quiz':
                    document.getElementById('display').data = casheFiles.get('vid1');
                    toggleAccordion = '.quiz-topics';
                    $scope.wordDocPdfDocSlideUp = true;
                    break;
            }
            if($scope.wordDocPdfDocSlideUp == true)
            {
                        $('.word-docs').slideUp(500);
                        $('.pdf-docs').slideUp(500);
                        $scope.wordDocPdfDocSlideUp = false;
            }
            slideAccordions(toggleAccordion);
            $scope.slideUpQuizQuestions();
            $scope.displayQuizPages=false;
            $scope.displayVideosDocsPage = false;
            $scope.displayNavigateTipPage = true;
            $scope.displayWebsiteLinksPage = false;
            id='vid1';
            document.getElementById('display').data = casheFiles.get(id);
        }
        else
        {
            $scope.displayQuizPages = false;
            $scope.displayVideosDocsPage = true;
            $scope.displayNavigateTipPage = false;
            document.getElementById('display').data = casheFiles.get(id);
            $scope.displayWebsiteLinksPage = false;
                // document.getElementById('displayBlankPage').style.display = "none";   
        }
        //document.getElementById('display-quiz-pages').style.display = "none";
        //document.getElementById('displayWebsiteLinks').style.display = "none";
    }
// ---------X----------X----------X---------X-----------X-----------X---------

    
    $scope.displayWebsiteLinksPage = false;
    //document.getElementById('displayWebsiteLinks').style.display = "none";
    $scope.selections = [-1, -1,-1,-1,-1,
            -1,-1,-1,-1,-1,
            -1,-1,-1,-1,-1,
            -1, -1,-1,-1,-1];

    $scope.status = [false,false,false,false,false,
            false,false,false,false,false,
            false,false,false,false,false,
            false,false,false,false,false];
        
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
    $scope.casheQuizTips = false;

    var prev_div = 0;
    var prev_accordion_visited = false;
    var quiz_topic_enabled = false;

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
        function displayTheLinks()
        {
            $scope.displayQuizPages = false;
            $scope.displayNavigateTipPage = false;
            $scope.displayVideosDocsPage = false;
            $scope.displayWebsiteLinksPage = true;
                        //document.getElementById('display-quiz-pages').style.display = "none";
                        //document.getElementById('displayBlankPage').style.display="none";
                        //document.getElementById('displayDIV').style.display = "none";
                        //document.getElementById('displayWebsiteLinks').style.display = "block";
            var id = event.target.id;
            if(id=='cashe')
            {
                $scope.links = "https://www.cashe.co.in";
            }
            else
            {
                $scope.links = "https://www.bhanixfinance.com";
            }
        }
    }

    $scope.changeBackground = function(event)
    {
        default_video_clicked = false;
        document.getElementById('vid1').style.backgroundColor="rgb(64,64,64)";
        current_div = event.target.id;
        $scope.displayWebsiteLinksPage = false;
        current_div_clicked = true;
        if(prev_accordion_visited==true)
        {
            document.getElementById(prev_div).style.backgroundColor = 'rgb(64,64,64)';
        }
        document.getElementById(current_div).style.backgroundColor = 'orange';
        prev_div = current_div;
        prev_accordion_visited=true;
    }

        /* ------------------------------------------------------------------*/

        /* Quiz topics highlighted */
        /* ======================= */

    var quiz_topic = '';
    var prev_quiz_topic_visited = false;  
    var display_quiz_tips = false;
        /* ------------------------------------------------------------------*/

        
        /* making a single function for Quiz Tips */
        
    $scope.prev_quiz = '';
    $scope.displayQuizTips = function(event)
    {
        id = event.target.id;
            // original code
        if($scope.quiz_running == true)
        {
            if(confirm("Would you like to end the quiz?")==true)
            {
                current_div = id;
                document.getElementById($scope.running_quiz).style.backgroundColor = 'rgb(64,64,64)';
                $scope.quizTipsAreDisplayed = true;
                $scope.quiz_running = false;
            }
            else
            {
                $scope.quizTipsAreDisplayed = false;
                current_div = $scope.running_quiz;
                document.getElementById($scope.running_quiz).style.backgroundColor = 'orange';
                document.getElementById(id).style.backgroundColor = 'rgb(64,64,64)';
            }
        }
        else
        {
            $scope.quizTipsAreDisplayed = true;
        }
        if($scope.quizTipsAreDisplayed == true)
        {
            

            document.getElementById('display-quiz-pages').style.display = 'block'; 
            $scope.displayQuizPages = true;
            document.getElementById('fintech-quiz-tips').style.display = 'none';
            document.getElementById('cashe-quiz-tips').style.display = 'none';
            document.getElementById('bhanix-quiz-tips').style.display = 'none';
            document.getElementById('competitive-analysis-quiz-tips').style.display = 'none';

            document.getElementById('displayFintechQuizScore').style.display = 'none';
            document.getElementById('displayCasheQuizScore').style.display = 'none';
            document.getElementById('displayBhanixQuizScore').style.display = 'none';
            document.getElementById('displayCompetitiveAnalysisQuizScore').style.display = 'none';

            $scope.currentProgress = 
            {
                width : "0%"
            }

            clearInterval(timer);

            $scope.displayWebsiteLinksPage = false;
            $scope.displayNavigateTipPage = false;

            document.getElementById('display-fintech-quiz-page').style.display = 'none';
            document.getElementById('display-cashe-quiz-page').style.display = 'none';
            document.getElementById('display-bhanix-quiz-page').style.display = 'none';
            document.getElementById('display-competitive-analysis-quiz-page').style.display = 'none';

            $scope.slideUpQuizQuestions();

            quiz_topic_enabled = true;

            switch(id)
            {
                case 'fintechQuiz':
                    document.getElementById('fintech-quiz-tips').style.display = 'block';
                    document.getElementById('display-fintech-quiz-page').style.display = 'block';
                    document.getElementById('fintech-quiz-page').style.display = 'none';
                    document.getElementById('displayFintechQuizScore').style.display = 'none';
                    $scope.quiz = 'fintech';
                    break;

                case 'casheQuiz':
                    document.getElementById('cashe-quiz-tips').style.display = 'block';
                    document.getElementById('display-cashe-quiz-page').style.display = 'block';
                    document.getElementById('cashe-quiz-page').style.display = 'none';
                    document.getElementById('displayCasheQuizScore').style.display = 'none';
                    $scope.quiz = 'cashe';
                    break;
                    
                case 'bhanixQuiz':
                    document.getElementById('bhanix-quiz-tips').style.display = 'block';
                    document.getElementById('display-bhanix-quiz-page').style.display = 'block';
                    document.getElementById('bhanix-quiz-page').style.display = 'none';
                    document.getElementById('displayBhanixQuizScore').style.display = 'none';
                    $scope.quiz = 'bhanix';
                    break;
                        
                case 'competitiveAnalysisQuiz':
                    document.getElementById('competitive-analysis-quiz-tips').style.display = 'block';
                    document.getElementById('display-competitive-analysis-quiz-page').style.display = 'block';
                    document.getElementById('competitive-analysis-quiz-page').style.display = 'none';
                    document.getElementById('displayCompetitiveAnalysisQuizScore').style.display = 'none';
                    $scope.quiz = 'competitive-analysis';
                    break;
            }
            document.getElementById($scope.quiz+"-countdown-timer").innerHTML = '';
            clearInterval(timer);

            timeleft = 0;
            $scope.displayVideosDocsPage = false;
            $scope.quizTipsAreDisplayed = false;
        }
    }

    /* --------------------------------------------------------------------------------*/

    /* submit Quiz */
    var score=0;
    var startQ=0;
    $scope.submitQuiz = function(id,auto_submit)
    {
        score=0;
        if(auto_submit == false)
        {
            if(confirm("Are you sure you want to submit?")==true)
            {
                $scope.slideUpQuizQuestions();
                $scope.quiz_running = false;
                //$scope.displayFintechScore();
                $scope.fintechQuizPage = false;
                $scope.scoreIsDisplayed = true;
                $scope.displayFintechQuizScorePage = true;
            }
            else
            {
                $scope.scoreIsDisplayed = false;
            }
        }
        else
        {
            
            $scope.slideUpQuizQuestions();
            $scope.scoreIsDisplayed = true;
        }
        if($scope.scoreIsDisplayed == true)
        {

            clearInterval(timer);
            $scope.quiz_running = false;
            $scope.currentProgress =
            {
                width : "0%"
            }
            switch(id)
            {
                case 'fintechQuiz':
                    document.getElementById('fintech-quiz-page').style.display = 'none';
                    document.getElementById('displayFintechQuizScore').style.display = 'block';
                    document.getElementById('fintech-quiz-tips').style.display = 'none';
                    startQ=1;
                    $scope.quiz_score = 'fintech'
                    break;
    
                case 'casheQuiz':
                    document.getElementById('cashe-quiz-page').style.display = 'none';
                    document.getElementById('displayCasheQuizScore').style.display = 'block';
                    document.getElementById('cashe-quiz-tips').style.display = 'none';
                    startQ=6;
                    $scope.quiz_score = 'cashe'
                    break;
    
                case 'bhanixQuiz':
                    document.getElementById('bhanix-quiz-page').style.display = 'none';
                    document.getElementById('displayBhanixQuizScore').style.display = 'block';
                    document.getElementById('bhanix-quiz-tips').style.display = 'none';
                    startQ=11;
                    $scope.quiz_score = 'bhanix'
                    break;
    
                case 'competitiveAnalysisQuiz':
                    document.getElementById('competitive-analysis-quiz-page').style.display = 'none';
                    document.getElementById('displayCompetitiveAnalysisQuizScore').style.display = 'block';
                    document.getElementById('competitive-analysis-quiz-tips').style.display = 'none';
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
                //document.getElementById('displayWebsiteLinks').style.display = "none";   
        quiz_topic_enabled = true;
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

        /* ---------------------------------------------------------------------*/
        /* start quiz */
    $scope.startQuiz = function(id)
    {
        $scope.running_quiz = id;
        $scope.quiz_running = true;

        $scope.displayWebsiteLinksPage = false;
        
        document.getElementById('fintech-quiz-page').style.display = 'none';
        document.getElementById('cashe-quiz-page').style.display = 'none';
        document.getElementById('bhanix-quiz-page').style.display = 'none';
        document.getElementById('competitive-analysis-quiz-page').style.display = 'none';

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
                document.getElementById('fintech-quiz-tips').style.display = 'none';
                document.getElementById('fintech-quiz-page').style.display = 'block';
                $scope.topicQuestions = '.fintechQuestions';
                $scope.currentQ = 1;
                break;

            case 'casheQuiz':
                document.getElementById('cashe-quiz-tips').style.display = 'none';
                document.getElementById('cashe-quiz-page').style.display = 'block';
                $scope.topicQuestions = '.casheQuestions';
                $scope.currentQ = 6;
                break;
                    
            case 'bhanixQuiz':
                document.getElementById('bhanix-quiz-tips').style.display = 'none';
                document.getElementById('bhanix-quiz-page').style.display = 'block';
                $scope.topicQuestions = '.bhanixQuestions';
                $scope.currentQ = 11;
                break;                    
                        
            case 'competitiveAnalysisQuiz':
                document.getElementById('competitive-analysis-quiz-tips').style.display = 'none';
                document.getElementById('competitive-analysis-quiz-page').style.display = 'block';
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

        $scope.quiz = '';

        $scope.countDownTimer = 600;    
        timer = setInterval(function()
	    {
            if($scope.countDownTimer < 0)
            {
                
                var auto_submit = true;
                $scope.submitQuiz(id,auto_submit);
                clearInterval(timer);
                
            }
            else
            {
                $scope.$apply();
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
                
                switch(id)
                {
                    case 'fintechQuiz':
                        $scope.quiz = 'fintech';
                        break;

                    case 'casheQuiz':
                        $scope.quiz = 'cashe';
                        break;

                    case 'bhanixQuiz':
                        $scope.quiz = 'bhanix';
                        break;

                    case 'competitiveAnalysisQuiz':
                        $scope.quiz = 'competitive-analysis';
                        break;
                }
                if(min==0)
                {
                    if(sec<10)
                    {
                        document.getElementById($scope.quiz+"-countdown-timer").style.color = "red";
                    }
                }
                document.getElementById($scope.quiz+"-countdown-timer").style.fontWeight = "bold";
                document.getElementById($scope.quiz+"-countdown-timer").style.fontSize = "20px";
                document.getElementById($scope.quiz+"-countdown-timer").style.top = "10px";
                document.getElementById($scope.quiz+"-countdown-timer").innerHTML = min + ":" + sec;
                $scope.countDownTimer--;
            }
        }, 1000); 

        $scope.prevButton = true;
        $scope.nextButton=true;
        $scope.countDown = true;
        $scope.displayVideosDocsPage = false;
    }
}
fintechQuizApp.controller('quizController',ctrl);