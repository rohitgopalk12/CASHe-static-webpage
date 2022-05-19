var default_video_clicked = true;
const casheFiles = new Map();
var accordions_list = ['.videos','.documents','.ppt-docs','.links','.quiz-topics']

//=====================================================================================
                                /* youtube video links */
                                /* ============================== */
casheFiles.set('vid1','https://www.youtube.com/embed/Pl7XP8o7v6g');
casheFiles.set('vid2','https://www.youtube.com/embed/JvNvINEgW1s');
casheFiles.set('vid3','https://www.youtube.com/embed/ww_83m_bB_U');
casheFiles.set('vid4','https://www.youtube.com/embed/C1E5tHaZaks');
casheFiles.set('vid5','https://www.youtube.com/embed/7jS9JMxg5R4');
casheFiles.set('vid6','https://www.youtube.com/embed/z_zj2OmTRJk');

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
var timer = 0;
var min=0;
var sec=0;
var current_div = '';
var current_div_clicked=false;
var className = 0;
var questionVisited = 0;

var fintechQuizApp = angular.module('casheLearningsApp',['ngAnimate']);

// function hoverApplied(id,color)
// {
//     if(default_video_clicked == true)
//     {
//         document.getElementById('vid1').style.backgroundColor = 'orange';
//     }
//     else
//     {
//         document.getElementById(id).style.backgroundColor = color;
//         if(current_div_clicked == true)
//         {
//             document.getElementById(current_div).style.backgroundColor = 'orange';
//         } 
//     }
// }

// function hoverLost(id,color)
// {
//     if(default_video_clicked == true)
//     {
//         document.getElementById('vid1').style.backgroundColor = 'orange';
//     }
//     else
//     {
//         document.getElementById(id).style.backgroundColor = color;
//         if(current_div_clicked == true)
//         {
//             document.getElementById(current_div).style.backgroundColor = 'orange';
//         }
//     }
// } 

//var prev_index=0;
// document.getElementById('displayBlankPage').style.display = "none";
// fintechQuizApp.controller('videoRecordingsController',function($scope,$rootScope)
// {
    
//     //$scope.bgColor = $scope.videoRecordings[0].backgroundColor;

    

//     $scope.hoverOnColor = 'rgb(255,153,51)';
//     $scope.hoverOffColor = 'rgb(64,64,64)';
//     $scope.hoverApplied = function(event,color)
//     {
//         id = event.target.id;
//         if(default_video_clicked == true)
//         {
//             $scope.bgColor = videoRecordings[0].backgroundColor;
//             document.getElementById('vid1').style.backgroundColor = 'orange';
//         }
//         else
//         {
//             document.getElementById(id).style.backgroundColor = color;
//             if(current_div_clicked == true)
//             {
//                 $scope.hoverOnColor = 'orange';
//                 $scope.hoverOffColor = 'orange';
//                 document.getElementById(current_div).style.backgroundColor = 'orange';
//             }
//         }

//         $scope.bgColor={'background-color':'rgb(255,153,51)'};
//     }

//     $scope.hoverLost = function(event,color)
//     {
//         $scope.bgColor={'background-color':'rgb(255,153,51)'};
//     }

//     $scope.selectedTopic = '';
//     var prev_video_name = '';
//     $scope.prev_video_topic = '';

// });


var ctrl = function($scope)
{   
    $scope.slideAccordions = function(toggleAccordion)
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

    $scope.question = 0;
    $scope.fontWeight='bold';
    $scope.fontSize='20px';
    $scope.top='10px';

    $scope.foregroundColor = '';
    $scope.pptTitle = 'PPT PRESENTATION';
    $scope.quizTitle = "QUIZ";
    //document.getElementById('vid1').style.backgroundColor = 'orange';
    $scope.videoRecording = "VIDEO RECORDINGS";
    $scope.pptDocuments = 
    [
        'BHANIX & CASHe','BUY NOW PAY LATER','FINTECH - FINANCIAL SECTOR'
    ];

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
    $scope.documentsOfCashe = 
    [
            {
                id:'word',name : 'Word Documents', word_documents : 
                [
                {wordID : 'word-doc-1', word_doc : '3 reasons BNPL is a hit among young shoppers this festive season'},
                {wordID : 'word-doc-2', word_doc : '5 apps to consider for micro loans this festive season'},
                {wordID : 'word-doc-3', word_doc : '5 Tech-Based Platforms Driving Credit Literacy'},
                {wordID : 'word-doc-4', word_doc : 'Banking 2.0'},
                {wordID : 'word-doc-5', word_doc : 'BHANIX FINANCE'},
                {wordID : 'word-doc-6', word_doc : 'BNPL lights up India’s ecommerce sales this Diwali'},
                {wordID : 'word-doc-7', word_doc : 'Buy now pay later set to surge over ten fold in India'},
                {wordID : 'word-doc-8', word_doc : 'Buy now, pay later set to surge over ten-fold in India - reuters'},
                {wordID : 'word-doc-9', word_doc : 'Buy-Now, Pay-Later Loans Help Fuel India’s Festive Recovery'},
                {wordID : 'word-doc-10', word_doc : 'CASHe appoints veteran banker Jogindar Rana to Top Role'},
                {wordID : 'word-doc-11', word_doc : 'CASHe product pipeline'},
                {wordID : 'word-doc-12', word_doc : 'CASHe Raises Rs 140 Cr V Raman Kumar Talks About Growth Ahead'},
                {wordID : 'word-doc-13', word_doc : 'CASHe roadmap'},
                {wordID : 'word-doc-14', word_doc : 'CASHe'},
                {wordID : 'word-doc-15', word_doc : 'CXO Exclusive - Building a Digital-first Customer Acquisition and Collection Process'},
                {wordID : 'word-doc-16', word_doc : "Ecd D:xploring 'AI-Driven Financial Inclusion' with Yashoraj Tyagi, CTO of CASHe"},
                {wordID : 'word-doc-17', word_doc : 'Fintech Platform raises $19 million from its Singaporean parent TSLC'},
                {wordID : 'word-doc-18', word_doc : 'How to safeguard yourself from financial frauds'},
                {wordID : 'word-doc-19', word_doc : 'Is Buy Now, Pay Later A Good Idea For Consumers'},
                {wordID : 'word-doc-20', word_doc : 'Pandemic Fuels Tech Inclusion in the Financial Sector'},
                {wordID : 'word-doc-21', word_doc : 'Personal Lending Startup CASHe secures INR 140 Crores Equity funding'},
                {wordID : 'word-doc-22', word_doc : 'Personal Loans for young salaried millennials across India'},
                {wordID : 'word-doc-23', word_doc : 'Sept records 35 percent rise in BNPL loan applications'},
                {wordID : 'word-doc-24', word_doc : 'The evolution of the digital lending sector in India'},
                {wordID : 'word-doc-25', word_doc : 'Top apps that help you take an instant personal loan'},
                {wordID : 'word-doc-26', word_doc : 'With 10x growth for BNPL products during sales'}
                ]
            },
            {
                id:'pdf',name : 'PDF Documents', pdf_documents : 
                [
                    {pdfID : 'pdf-doc-1', pdf_doc : 'BHANIX & CASHe'},
                    {pdfID : 'pdf-doc-2', pdf_doc : 'BUY NOW PAY LATER'},
                    {pdfID : 'pdf-doc-3', pdf_doc : 'FinTech – Financial Sector'}
                ]
            }
    ];

    $scope.videoRecordings = 
    [
        {id:'vid1', name : 'Digital Transformation (Tech Panel)', backgroundColor : 'orange', hoverOn : 'rgb(255,153,51)'},
        {id:'vid2', name : 'About CASHe', backgroundColor : 'orange', hoverOn : 'rgb(255,153,51)'},
        {id:'vid3', name : 'Pandaemic Fuels Tech Inclusion in the Financial Sector', backgroundColor : 'orange', hoverOn : 'rgb(255,153,51)'},
        {id:'vid4', name : 'V Raman Kumar talks about growth ahead', backgroundColor : 'orange', hoverOn : 'rgb(255,153,51)'},
        {id:'vid5', name : 'Building a Digital-first Customer Acquisition', backgroundColor : 'orange', hoverOn : 'rgb(255,153,51)'},
        {id:'vid6', name : 'Is Buy Now Pay Later A Good Idea For Consumers?', backgroundColor : 'orange', hoverOn : 'rgb(255,153,51)'}
    ]
    default_video_clicked = true;
    $scope.videoTopic='';
    
    $scope.linksTitle = 'LINKS';
    //$scope.videoTopic = $scope.videoRecordings[0].name;
    console.log("$scope.videotopic : "+$scope.videoTopic);

    $scope.linksWebsites = 
    [
        {ID : 'cashe', name : 'CASHe'},
        {ID : 'bhanix', name : 'Bhanix Finance'}
    ];
    var videoRecording = 0;
    $scope.documentation = 'DOCUMENTATION';

    // $scope.firstQuestionSelectedByDefault = function(index,event)
    // {
    //     console.log("hello 567");
    //     $scope.selectedFintechQuestion = 0;

        // className = event.target.className;
        // $scope.selectedFintechQuestion = -1;
        // $scope.selectedCasheQuestion = -1;
        // $scope.selectedBhanixQuestion = -1;
        // $scope.selectedCompetitiveAnalysisQuestion = -1;

        // switch(className)
        // {
        //     case 'quiz-topics ng-binding':
        //         $scope.selectedFintechQuestion = 0;
        //         break;

        //     // case 'casheQuestions':
        //     //     $scope.selectedCasheQuestion = 0;
        //     //     break;

        //     // case 'bhanixQuestions':
        //     //     $scope.selectedBhanixQuestion = 0;
        //     //     break;

        //     // case 'competitiveAnalysisQuestions':
        //     //     $scope.selectedCompetitiveAnalysisQuestion = 0;
        //     //     break;
        // }

    // }
    $scope.changeBackgroundTopic = function(index,event)
    {
        className = event.target.className;
        console.log("class name : "+className);
        $scope.selectedDocumentation = -1;
        $scope.videoRecordingTitle = -1;
        $scope.selectedVideoRecording = -1;
        $scope.selectedVideo= -1;
        $scope.selectedDoc = -1;
        $scope.selectedWordDoc = -1;
        $scope.selectedPdfDoc = -1;

        $scope.selectedQuizTopics = -1;
        $scope.selectedPptTitle = -1;
        $scope.selectedLinksTitle = -1;
        $scope.selectedLinks = -1;
        $scope.selectedQuizTitle = -1;

        $scope.selectedCompetitiveAnalysisQuestion = -1;
        $scope.selectedBhanixQuestion = -1;
        $scope.selectedCasheQuestion = -1;
        $scope.selectedFintechQuestion = -1;

        switch(className)
        {
            case 'vid ng-binding':
                videoRecording = index;
                $scope.videoRecordingTitle = index;
                break;

            case 'videos ng-binding':
                $scope.videoRecordingTitle = $scope.videoRecording;
                $scope.selectedVideo = index;
                break;

            case 'documentation ng-binding':
                $scope.selectedDocumentation = $scope.documentation;
                break;

            case 'documents ng-binding':
                $scope.selectedDocumentation = $scope.documentation;
                $scope.selectedDoc = index;
                break;

            case 'word-docs ng-binding':
                $scope.selectedDocumentation = $scope.documentation;
                $scope.selectedDoc = 0;
                $scope.selectedWordDoc = index;
                break;

           

            case 'pdf-docs ng-binding':
                $scope.selectedDocumentation = $scope.documentation;
                $scope.selectedDoc = 1;
                $scope.selectedPdfDoc = index;
                break;

            case 'ppt ng-binding':
                $scope.selectedPptTitle = index;
                break;

            case 'ppt-docs ng-binding':
                $scope.selectedPptTitle = $scope.pptTitle;
                $scope.selectedPptDoc = index;
                break;

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

            case 'quizzes ng-binding':
                console.log("great guns");
                console.log("quiz title : "+$scope.quizTitle);
                $scope.selectedQuizTitle = $scope.quizTitle;
                break;
            
            case 'quiz-topics ng-binding':
                console.log("quiz topoics");
                $scope.selectedQuizTitle = $scope.quizTitle;
                $scope.selectedQuizTopics = index;
                break;

           
            
            case 'links-websites ng-binding':
                $scope.selectedLinksTitle = index;
                break;

            case 'links ng-binding':
                $scope.selectedLinksTitle = $scope.linksTitle;
                $scope.selectedLinks = index;
                break;
            
            

            

            case 'fintechQuestions ng-binding':
                $scope.selectedFintechQuestion = index;
                break;

            case 'casheQuestions ng-binding':
                $scope.selectedCasheQuestion = index;
                break;

            case 'bhanixQuestions ng-binding':
                $scope.selectedBhanixQuestion = index;
                break;
            
            case 'competitiveAnalysisQuestions ng-binding':
                $scope.selectedCompetitiveAnalysisQuestion = index;
                break;
        } 
       

        // $scope.selectedVideoRecording = index;
        // $scope.selectedVideo=index;
        // $scope.selectedDoc = index;
        // $scope.selectedWordDoc = index;
        // $scope.selectedPdfDoc = index;
        // $scope.selectedFintechQuestion = index;
        // $scope.selectedCasheQuestion = index;
        // $scope.selectedBhanixQuestion = index;
        // $scope.selectedCompetitiveAnalysisQuestion = index;
        // $scope.selectedQuizTopics = index;

        console.log("hello");
        //$scope.selectedSubAccordion = index
    }
    
    $scope.videosAutoSlideDown = function(index)
    {
        if(default_video_clicked == true)
        {
            $scope.videoRecordingTitle = $scope.videoRecording;
            $scope.selectedVideo = 0;
            default_video_clicked = false;
        }
        $('.videos').slideDown(500);
    }
    
    // $scope.videoRecordings = 
    // [
    //     {name : 'Digital Transformation (Tech Panel)', backgroundColor : 'rgb(255,153,51)'},
    //     {name : 'About CASHe', backgroundColor : 'rgb(255,153,51)'},
    //     {name : 'Pandaemic Fuels Tech Inclusion in the Financial Sector', backgroundColor : 'rgb(255,153,51)'},
    //     {name : 'V Raman Kumar talks about growth ahead', backgroundColor : 'rgb(255,153,51)'},
    //     {name : 'Building a Digital-first Customer Acquisition', backgroundColor : 'rgb(255,153,51)'},
    //     {name : 'Is Buy Now Pay Later A Good Idea For Consumers?', backgroundColor : 'rgb(255,153,51)'}
    // ]

    
    // $scope.changeBackgroundColor = function(sub_accordion,hoverOn) 
    // {
    //     if($scope.showVideos == false)
    //     {
    //         $scope.showVideos = true;
    //     }
    //     else
    //     {
    //         $scope.showVideos = false;
    //     }
    //     console.log("hey dude");
    //     if(hoverOn == true)
    //     {
    //         $scope.bgColor = {color: sub_accordion.backgroundColor};
    //     }
    //     else
    //     {
    //         $scope.bgColor = {color: 'rgb(64,64,64)'};
    //     }
    // };

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

    $scope.video_clicked = [false,false,false,false,false,false];
    //prev_index = 1;
    //var prev_index = 0;
    var current_index = 0;
    
    $scope.displayInThePage = function(index,event)
    {
        // $scope.bgColor = $scope.video_clicked[current_index] == true ? $scope.bgColor={'background-color':'orange'} : $scope.bgColor={'background-color':'rgb(64,64,64)'} 
        // $scope.bgColor = $scope.video_clicked[prev_index] == false ? $scope.bgColor={'background-color':'rgb(64,64,64)'} : $scope.bgColor={'background-color':'orange'} 
        
        console.log("he went there");
        id = event.target.id;
        console.log("id : "+id);
        default_video_clicked = false;
        if($scope.quiz_running == true)
        {
            if(confirm("Would you like to end the quiz?")==true)
            {
                $scope.quiz_running = false;
                 
                $scope.quizTipsAreDisplayed = false;
                current_div = id;
                console.log("running Quiz : "+$scope.running_quiz);

                //document.getElementById($scope.running_quiz).style.backgroundColor = 'rgb(64,64,64)';
                $scope.pageToBeDisplayed(id);  
            }
            else
            {
                console.log("bolo man");
                switch(id)
                {
                    case 'vidRec':
                        $scope.videoRecordingTitle = -1;
                        break;

                    case 'document':
                        $scope.selectedDocumentation = -1;
                        break;

                    case 'ppt-doc':
                        $scope.selectedPptTitle = -1;
                        break;

                    case 'websites':
                        $scope.selectedLinksTitle = -1;
                        break;

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
                //document.getElementById($scope.running_quiz).style.backgroundColor = 'orange';
                //document.getElementById(id).style.backgroundColor = 'rgb(64,64,64)';
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
                    document.getElementById('display').data = casheFiles.get('vid1');
                    toggleAccordion = '.videos';
                    $scope.wordDocPdfDocSlideUp = true;
                    break;

                case 'document':
                    document.getElementById('display').data = casheFiles.get('vid1');
                    $scope.selectedDoc = -1;
                    toggleAccordion = '.documents';
                    $scope.wordDocPdfDocSlideUp = true;
                    break;

                case 'word':
                    toggleAccordion = '';
                    $scope.selectedWordDoc = -1;
                    document.getElementById('display').data = casheFiles.get('vid1');
                    $scope.wordDocPdfDocSlideUp = false;
                    $('.word-docs').slideToggle(500);
                    $('.pdf-docs').slideUp(500);
                    break;

                case 'pdf':
                    toggleAccordion = '';
                    $scope.selectedPdfDoc = -1;
                    //document.getElementById('display').data = casheFiles.get('vid1');
                    $scope.wordDocPdfDocSlideUp = false;
                    $('.word-docs').slideUp(500);
                    $('.pdf-docs').slideToggle(500);
                    break;

                case 'ppt-doc':
                    //document.getElementById('display').data = casheFiles.get('vid1');
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
            $scope.slideAccordions(toggleAccordion);
            $scope.slideUpQuizQuestions();
            $scope.displayQuizPages=false;
            $scope.displayVideosDocsPage = false;
            $scope.displayNavigateTipPage = true;
            $scope.displayWebsiteLinksPage = false;
            console.log("gole gole");
            id='vid1';
            //document.getElementById('display').data = casheFiles.get(id);
        }
        else
        {
            console.log("great gatsby");
            console.log("hey man");
            $scope.displayQuizPages = false;
            $scope.displayVideosDocsPage = true;
            $scope.displayNavigateTipPage = false;
            console.log("id : "+id);
            document.getElementById('display').data = casheFiles.get(id);
            $scope.displayWebsiteLinksPage = false;  
        }
    }
// ---------X----------X----------X---------X-----------X-----------X---------

    $scope.displayWebsiteLinksPage = false;
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
        function displayTheLinks(event)
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
            console.log("id : "+id);
            if(id=='cashe')
            {
                $scope.websitelink = "https://www.cashe.co.in";
            }
            else
            {
                $scope.websitelink = "https://www.bhanixfinance.com";
            }
        }
    }

    
    $scope.changeBackground = function(index,event)
    {   
        // $scope.videoRecordingTitle = index;
        default_video_clicked = false;
        // $scope.selectedVideo = -1;
        // $scope.selectedDoc = -1;
        // $scope.selectedWordDoc = -1;
        // $scope.selectedPdfDoc = -1;
        // $scope.selectedPptDoc = -1;
        // $scope.selectedFintechQuestion = -1;
        // $scope.selectedCasheQuestion = -1;
        // $scope.selectedBhanixQuestion = -1;
        // $scope.selectedCompetitiveAnalysisQuestion = -1;

        current_div = event.target.id;
        console.log("current div is : "+current_div);
        $scope.displayWebsiteLinksPage = false;
        current_div_clicked = true;
        // if(prev_accordion_visited==true)
        // {
        //     console.log("prev div : "+prev_div);
        //     document.getElementById(prev_div).style.backgroundColor = 'rgb(64,64,64)';
        // }
        // document.getElementById(current_div).style.backgroundColor = 'orange';
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
                //document.getElementById($scope.running_quiz).style.backgroundColor = 'rgb(64,64,64)';
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
               // document.getElementById($scope.running_quiz).style.backgroundColor = 'orange';
                //document.getElementById(id).style.backgroundColor = 'rgb(64,64,64)';
            }
        }
        else
        {
            $scope.quizTipsAreDisplayed = true;
        }
        if($scope.quizTipsAreDisplayed == true)
        {

            //    <!-- original code #1064 -->

            //document.getElementById('display-quiz-pages').style.display = 'block'; 
            // $scope.displayFintechQuizPage = false;
            // $scope.displayCasheQuizPage = false;
            // $scope.displayBhanixQuizPage = false;
            // $scope.displayCompetitiveAnalysisQuizPage = false;
            
            // $scope.displayFintechQuizTips = false;
            // $scope.displayCasheQuizTips = false;
            // $scope.displayBhanixQuizTips = false;
            // $scope.displayCompetitiveAnalysisQuizTips = false;

            // $scope.fintechQuizPage = false;
            // $scope.casheQuizPage = false;
            // $scope.bhanixQuizPage = false;
            // $scope.competitiveAnalysisQuizPage = false;

            // $scope.displayFintechQuizScore = false;
            // $scope.displayCasheQuizScore = false;
            // $scope.displayBhanixQuizScore = false;
            // $scope.displayCompetitiveAnalysisQuizScore = false;

            $scope.hideAllQuizRelatedPages();
            $scope.displayQuizPages = true;
            //document.getElementById('fintech-quiz-tips').style.display = 'none';
            //document.getElementById('cashe-quiz-tips').style.display = 'none';
            //document.getElementById('bhanix-quiz-tips').style.display = 'none';
            //document.getElementById('competitive-analysis-quiz-tips').style.display = 'none';

            $scope.displayFintechQuizScorePage = false;

            // document.getElementById('displayFintechQuizScore').style.display = 'none';
            // document.getElementById('displayCasheQuizScore').style.display = 'none';
            // document.getElementById('displayBhanixQuizScore').style.display = 'none';
            // document.getElementById('displayCompetitiveAnalysisQuizScore').style.display = 'none';

            $scope.currentProgress = 
            {
                width : "0%"
            }

            clearInterval(timer);

            $scope.displayWebsiteLinksPage = false;
            $scope.displayNavigateTipPage = false;

            //document.getElementById('display-fintech-quiz-page').style.display = 'none';
            // document.getElementById('display-cashe-quiz-page').style.display = 'none';
            // document.getElementById('display-bhanix-quiz-page').style.display = 'none';
            // document.getElementById('display-competitive-analysis-quiz-page').style.display = 'none';

            $scope.slideUpQuizQuestions();

            quiz_topic_enabled = true;

            switch(id)
            {
                case 'fintechQuiz':
                    console.log("bolo man");
                    $scope.displayFintechQuizTips = true;
                    $scope.displayFintechQuizPage = true;
                    // $scope.fintechQuizPage = false;
                    // $scope.displayFintechQuizScore = false;

                    //document.getElementById('fintech-quiz-tips').style.display = 'block';
                    //document.getElementById('display-fintech-quiz-page').style.display = 'block';
                    //document.getElementById('fintech-quiz-page').style.display = 'none';
                    //document.getElementById('displayFintechQuizScore').style.display = 'none';
                    $scope.quiz = 'fintech';
                    break;

                case 'casheQuiz':
                    console.log("caseh quiz");
                    $scope.displayCasheQuizTips = true;
                    $scope.displayCasheQuizPage = true;
                    // document.getElementById('cashe-quiz-tips').style.display = 'block';
                    // document.getElementById('display-cashe-quiz-page').style.display = 'block';
                    // document.getElementById('cashe-quiz-page').style.display = 'none';
                    // document.getElementById('displayCasheQuizScore').style.display = 'none';
                    $scope.quiz = 'cashe';
                    break;
                    
                case 'bhanixQuiz':
                    $scope.displayBhanixQuizTips = true;
                    $scope.displayBhanixQuizPage = true;
                    // document.getElementById('bhanix-quiz-tips').style.display = 'block';
                    // document.getElementById('display-bhanix-quiz-page').style.display = 'block';
                    // document.getElementById('bhanix-quiz-page').style.display = 'none';
                    // document.getElementById('displayBhanixQuizScore').style.display = 'none';
                    $scope.quiz = 'bhanix';
                    break;
                        
                case 'competitiveAnalysisQuiz':
                    $scope.displayCompetitiveAnalysisQuizTips = true;
                    $scope.displayCompetitiveAnalysisQuizPage = true;
                    // document.getElementById('competitive-analysis-quiz-tips').style.display = 'block';
                    // document.getElementById('display-competitive-analysis-quiz-page').style.display = 'block';
                    // document.getElementById('competitive-analysis-quiz-page').style.display = 'none';
                    // document.getElementById('displayCompetitiveAnalysisQuizScore').style.display = 'none';
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
        
        // document.getElementById('fintech-quiz-page').style.display = 'none';
        // document.getElementById('cashe-quiz-page').style.display = 'none';
        // document.getElementById('bhanix-quiz-page').style.display = 'none';
        // document.getElementById('competitive-analysis-quiz-page').style.display = 'none';

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
                console.log("hello rohit");
                $scope.displayFintechQuizPage=true;
                $scope.fintechQuizPage = true;
                $scope.quiz = 'fintech';
                //document.getElementById('fintech-quiz-tips').style.display = 'none';
                //document.getElementById('fintech-quiz-page').style.display = 'block';
                $scope.topicQuestions = '.fintechQuestions';
                $scope.currentQ = 1;
                break;

            case 'casheQuiz':
                $scope.displayCasheQuizPage=true;
                $scope.casheQuizPage = true;
                $scope.quiz = 'cashe';
                // document.getElementById('cashe-quiz-tips').style.display = 'none';
                // document.getElementById('cashe-quiz-page').style.display = 'block';
                $scope.topicQuestions = '.casheQuestions';
                $scope.currentQ = 6;
                break;
                    
            case 'bhanixQuiz':
                $scope.displayBhanixQuizPage=true;
                $scope.bhanixQuizPage = true;
                $scope.quiz = 'bhanix';
                // document.getElementById('bhanix-quiz-tips').style.display = 'none';
                // document.getElementById('bhanix-quiz-page').style.display = 'block';
                $scope.topicQuestions = '.bhanixQuestions';
                $scope.currentQ = 11;
                break;                    
                        
            case 'competitiveAnalysisQuiz':
                $scope.displayCompetitiveAnalysisQuizPage = true;
                $scope.competitiveAnalysisQuizPage = true;
                $scope.quiz = 'competitive-analysis';
                // document.getElementById('competitive-analysis-quiz-tips').style.display = 'none';
                // document.getElementById('competitive-analysis-quiz-page').style.display = 'block';
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

        

        $scope.countDownTimer = 10;    
        timer = setInterval(function()
	    {
            if($scope.countDownTimer < 0)
            {
                var auto_submit = true;
                clearInterval(timer);
                $scope.submitQuiz(id,"auto_submitted");
                //$scope.quizAutoSubmitted(id);
                
               
                //$scope.fintechQuizPage = false;
                // $scope.fintechQuizPage = false;
                // $scope.fintechQuizPage = false;
                console.log("my sould : ");
                console.log("id : "+id);
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
                
                // switch(id)
                // {
                //     case 'fintechQuiz':
                        
                //         break;

                //     case 'casheQuiz':
                //         $scope.quiz = 'cashe';
                //         break;

                //     case 'bhanixQuiz':
                //         $scope.quiz = 'bhanix';
                //         break;

                //     case 'competitiveAnalysisQuiz':
                //         $scope.quiz = 'competitive-analysis';
                //         break;
                // }
                if(min==0)
                {
                    if(sec<10)
                    {
                        $scope.foregroundColor = 'red';
                        //document.getElementById($scope.quiz+"-countdown-timer").style.color = "red";
                    }
                    else
                    {
                        $scope.foregroundColor = 'black';
                        //document.getElementById($scope.quiz+"-countdown-timer").style.color = "black";
                    }
                }
                else
                {
                    $scope.foregroundColor = 'black';
                    //document.getElementById($scope.quiz+"-countdown-timer").style.color = "black";
                }
                $scope.fontWeight='bold';
                $scope.fontSize='20px';
                $scope.top='10px';
                // document.getElementById($scope.quiz+"-countdown-timer").style.fontWeight = "bold";
                // document.getElementById($scope.quiz+"-countdown-timer").style.fontSize = "20px";
                // document.getElementById($scope.quiz+"-countdown-timer").style.top = "10px";
                document.getElementById($scope.quiz+"-countdown-timer").innerHTML = min + ":" + sec;
                $scope.countDownTimer--;
            }
        }, 1000); 
        if(quizAutoSubmit == true)
        {
            
        }
        console.log("venky mama");
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
                    console.log("amala devi 4444");
                    // $scope.fintechQuizPage = false;
                    $scope.displayFintechQuizPage = true;
                    $scope.displayFintechQuizScorePage = true;
                    // document.getElementById('display-fintech-quiz-page').style.display = 'block';
                    // document.getElementById('fintech-quiz-page').style.display = 'none';
                    //document.getElementById('displayFintechQuizScore').style.display = 'block';
                    // document.getElementById('fintech-quiz-tips').style.display = 'none';
                    startQ=1;
                    $scope.quiz_score = 'fintech'
                    break;
    
                case 'casheQuiz':
                    console.log("planti");
                    $scope.displayCasheQuizPage = true;
                    $scope.displayCasheQuizScore = true;

                    // document.getElementById('cashe-quiz-page').style.display = 'none';
                    // document.getElementById('displayCasheQuizScore').style.display = 'block';
                    // document.getElementById('cashe-quiz-tips').style.display = 'none';
                    startQ=6;
                    $scope.quiz_score = 'cashe'
                    break;
    
                case 'bhanixQuiz':
                    console.log("silver");
                    $scope.displayBhanixQuizPage = true;
                    $scope.displayBhanixQuizScore = true;

                    // document.getElementById('bhanix-quiz-page').style.display = 'none';
                    // document.getElementById('displayBhanixQuizScore').style.display = 'block';
                    // document.getElementById('bhanix-quiz-tips').style.display = 'none';
                    startQ=11;
                    $scope.quiz_score = 'bhanix'
                    break;
    
                case 'competitiveAnalysisQuiz':
                    $scope.displayCompetitiveAnalysisQuizPage = true;
                    $scope.displayCompetitiveAnalysisQuizScore = true;
                    // document.getElementById('competitive-analysis-quiz-page').style.display = 'none';
                    // document.getElementById('displayCompetitiveAnalysisQuizScore').style.display = 'block';
                    // document.getElementById('competitive-analysis-quiz-tips').style.display = 'none';
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
            console.log("gold");
    }
    /* submit Quiz */
    var score=0;
    var startQ=0;
    // $scope.quizAutoSubmitted = function(id)
    // {
    //     $scope.fintechQuizPage = false;
    //     $scope.displayFintechQuizPage = true;
    // }

    $scope.submitQuiz = function(id,auto_submit)
    {
        score=0;
        if(auto_submit == "auto_submitted")
        {
            console.log("auto submit true");
            $scope.slideUpQuizQuestions();
            $scope.scoreIsDisplayed = true;
        }
        else if(auto_submit == false)
        {
            if(confirm("Are you sure you want to submit?")==true)
            {
                console.log("venkatesh ");
                $scope.slideUpQuizQuestions();
                $scope.quiz_running = false;
                //$scope.displayFintechScore();
                $scope.scoreIsDisplayed = true;
            }
            else
            {
                $scope.scoreIsDisplayed = false;
            }
        }
        // else if(auto_submit==true)
        // {
        //     console.log("auto submit true");
        //     $scope.slideUpQuizQuestions();
        //     $scope.scoreIsDisplayed = true;
        // }
        if($scope.scoreIsDisplayed == true)
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
                    console.log("amala devi");
                    $scope.fintechQuizPage = false;
                    $scope.displayFintechQuizPage = true;
                    $scope.displayFintechQuizScorePage = true;
                    // document.getElementById('display-fintech-quiz-page').style.display = 'block';
                    // document.getElementById('fintech-quiz-page').style.display = 'none';
                    // document.getElementById('displayFintechQuizScore').style.display = 'block';
                    // document.getElementById('fintech-quiz-tips').style.display = 'none';
                    startQ=1;
                    $scope.quiz_score = 'fintech'
                    break;
    
                case 'casheQuiz':
                    $scope.displayCasheQuizPage = true;
                    $scope.displayCasheQuizScore = true;

                    // document.getElementById('cashe-quiz-page').style.display = 'none';
                    // document.getElementById('displayCasheQuizScore').style.display = 'block';
                    // document.getElementById('cashe-quiz-tips').style.display = 'none';
                    startQ=6;
                    $scope.quiz_score = 'cashe'
                    break;
    
                case 'bhanixQuiz':
                    $scope.displayBhanixQuizPage = true;
                    $scope.displayBhanixQuizScore = true;

                    // document.getElementById('bhanix-quiz-page').style.display = 'none';
                    // document.getElementById('displayBhanixQuizScore').style.display = 'block';
                    // document.getElementById('bhanix-quiz-tips').style.display = 'none';
                    startQ=11;
                    $scope.quiz_score = 'bhanix'
                    break;
    
                case 'competitiveAnalysisQuiz':
                    $scope.displayCompetitiveAnalysisQuizPage = true;
                    $scope.displayCompetitiveAnalysisQuizScore = true;
                    // document.getElementById('competitive-analysis-quiz-page').style.display = 'none';
                    // document.getElementById('displayCompetitiveAnalysisQuizScore').style.display = 'block';
                    // document.getElementById('competitive-analysis-quiz-tips').style.display = 'none';
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
        // $scope.changeBackground(event);
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
        console.log("id is : "+id);
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
        console.log("question : "+$scope.question);
    }

    
}
fintechQuizApp.controller('quizController',ctrl);