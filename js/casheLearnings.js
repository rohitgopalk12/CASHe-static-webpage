var default_video_clicked = true;
const casheFiles = new Map();
var accordions_list = ['.videos','.documents','.links','.quiz-topics']

//=====================================================================================
                                /* youtube video links */
                                /* ============================== */
casheFiles.set('vid1','https://www.youtube.com/embed/Pl7XP8o7v6g?start=0');
casheFiles.set('vid2','https://www.youtube.com/embed/JvNvINEgW1s');
// casheFiles.set('vid3','https://www.youtube.com/embed/ww_83m_bB_U');
// https://www.youtube.com/watch?v=ww_83m_bB_U?autoplay=1
casheFiles.set('vid3','https://www.youtube.com/embed/ww_83m_bB_U?autoplay=1');
// casheFiles.set('vid3','https://www.youtube.com/watch?v=ww_83m_bB_U');
casheFiles.set('vid4','https://www.youtube.com/embed/C1E5tHaZaks');
casheFiles.set('vid5','https://www.youtube.com/embed/7jS9JMxg5R4');
casheFiles.set('vid6','https://www.youtube.com/embed/z_zj2OmTRJk');

//=====================================================================================

                                /* word documents links */
                                //=========================

casheFiles.set('word-doc-1','assets/3_reasons_bnpl_is_a_hit_among_young_shoppers_this_festive_season.pdf');
casheFiles.set('word-doc-2','assets/5_apps_to_consider_for_micro_loans_this_festive_season.pdf');
casheFiles.set('word-doc-3','assets/5_tech-based_platforms_driving_credit_literacy.pdf');
casheFiles.set('word-doc-4','assets/banking_2_dot_0.pdf');
casheFiles.set('word-doc-5','assets/bhanix_finance.pdf');

casheFiles.set('word-doc-6','assets/bnpl_lights_up_india’s_ecommerce_sales_this_diwali.pdf');
casheFiles.set('word-doc-7','assets/buy_now_pay_later_set_to_surge_over_ten_fold_in_india.pdf');
casheFiles.set('word-doc-8','assets/buy_now,pay_later_set_to_surge_over_ten-fold_in_india-reuters.pdf');
casheFiles.set('word-doc-9','assets/buy_now,_pay_later_loans_help_fuel_india’s_festive_recovery.pdf');
casheFiles.set('word-doc-10','assets/cashe_appoints_veteran_banker_jogindar_rana_to_top_role.pdf');

casheFiles.set('word-doc-11','assets/cashe_product_pipeline.pdf');
casheFiles.set('word-doc-12','assets/cashe_raises_rs_140_cr_v_raman_kumar_talks_about_growth_ahead.pdf');
casheFiles.set('word-doc-13','assets/cashe_roadmap.pdf');
casheFiles.set('word-doc-14','assets/cashe.pdf');
casheFiles.set('word-doc-15','assets/cxo_exclusive-building_a_digital-first_customer_acquisition_and_collection_process.pdf');

casheFiles.set('word-doc-16','assets/exploring_ai-driven_financial_inclusion_with_yashoraj_tyagi,_ct_of_cashe.pdf');
casheFiles.set('word-doc-17','assets/fintech_platform_raises_$19_million_from_its_singaporean_parent_tslc.pdf');
casheFiles.set('word-doc-18','assets/how_to_safeguard_yourself_from_financial_frauds.pdf');
casheFiles.set('word-doc-19','assets/is_buy_now,_pay_later_a_good_idea_for_consumers.pdf');
casheFiles.set('word-doc-20','assets/pandemic_fuels_tech_inclusion_in_the_financial_sector.pdf');

casheFiles.set('word-doc-21','assets/personal_lending_startup_cashe_secures_inr_140_crores_equity_funding.pdf');
casheFiles.set('word-doc-22','assets/personal_loans_for_young_salaried_millennials_across_india.pdf');
casheFiles.set('word-doc-23','assets/sept_records_35_percent_rise_in_bnpl_loan_applications.pdf');
casheFiles.set('word-doc-24','assets/the_evolution_of_the_digital_lending_sector_in_india.pdf');
casheFiles.set('word-doc-25','assets/top_apps_that_help_you_take_an_instant_personal_loan.pdf');
casheFiles.set('word-doc-26','assets/with_10x_growth_for_bnpl_products_during_sales.pdf');

//====================================================================================
                                        /* pdf docs */
                                        //============

casheFiles.set('pdf-doc-1','assets/bhanix_and_cashe.pdf');
casheFiles.set('pdf-doc-2','assets/buy_now_pay_later.pdf');
casheFiles.set('pdf-doc-3','assets/fintech_financial_sector.pdf');

//====================================================================================

                                        /* ppt files */
                                        //================

casheFiles.set('ppt-doc-1','assets/bhanix_and_cashe.pdf');
casheFiles.set('ppt-doc-2','assets//buy_now_pay_later.pdf');
casheFiles.set('ppt-doc-3','assets/fintech_financial_sector.pdf');

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

var fintechQuizApp = angular.module('casheLearningsApp',['ngRoute']);
fintechQuizApp.config(function($routeProvider)
{
    $routeProvider
    .when("/business-intelligence", 
    {
      templateUrl : "businessintelligence.html"
    })
    .when("/collections", 
    {
      templateUrl : "collections.html"
    })
    .when("/customer-support", 
    {
      templateUrl : "customersupport.html"
    })
    .when("/financial-ecosystem", 
    {
      templateUrl : "financialecosystem.html"
    })
    .when("/growth", 
    {
      templateUrl : "operations.html"
    })
    .when("/product", 
    {
      templateUrl : "product.html"
    })
    .when("/general", 
    {
      templateUrl : "general.html"
    })
});
 
var ctrl = function($scope)
{   
    /*---------------------------------------------*/
    /* business.html */
    /* --------------- */

    $scope.businessIntelligence = "Business Intelligence";
    $scope.collections = "Collections";
    $scope.customer_support = "Customer Support";
    $scope.fintechEcoSystem = "Fintech Ecosystem"
    $scope.growth = "Growth";
    $scope.operations = "Operations";
    $scope.product = "Product";

    $scope.businessPage = 
    [
        {businessId : 'bi', businessName : 'Business Intelligence', businessImage : 'images/bi.png', businessDescription : 'This section belongs to Business Intelligence', sub_topics : 
            [
                {topicClass : 'bi-class', topicID : 'bi-video_recordings', topicName : 'Video Recordings'}
            ]
        },
        {businessId : 'collections', businessName : 'Collections', businessImage : 'images/collections.png', businessDescription : 'This section belongs Collections', sub_topics : 
            [
                {topicClass : 'collections-class', topicID : 'collections-video_recordings', topicName : 'Video Recordings'}
            ]
        },
        {businessId : 'customer_support', businessName : 'Customer Support', businessImage : 'images/customer_support.png', businessDescription : 'This section belongs to Customer Support', sub_topics : 
            [
                {topicClass : 'customer_support-class', topicID : 'customer-support-video_recordings', topicName : 'Video Recordings'}
            ]
        },
        {businessId : 'fintech_ecosystem', businessName : 'Fintech Ecosystem', businessImage : 'images/fintech_ecosystem.png', businessDescription : 'This section belongs to Fintech Ecosystem', sub_topics : 
            [
                {topicClass : 'fintech_ecosystem-class', topicID : 'fintech_ecosystem-video_recordings', topicName : 'Video Recordings'}
            ]
        },
        {businessId : 'growth', businessName : 'Growth', businessImage : 'images/growth.png', businessDescription : 'This section belongs to Growth', sub_topics : 
            [
                {topicClass : 'growth-class', topicID : 'growth-video_recordings', topicName : 'Video Recordings'}
            ]
        },
        {businessId : 'operations', businessName : 'Operations', businessImage : 'images/operations.png', businessDescription : 'This section belongs to Operations', sub_topics : 
            [
                {topicClass : 'operations-class', topicID : 'operations-video_recordings', topicName : 'Video Recordings'}
            ]
        },
        {businessId : 'product', businessName : 'Product', businessImage : 'images/product.png', businessDescription : 'This section belongs to Product', sub_topics : 
            [
                {topicClass : 'product-class', topicID : 'product-video_recordings', topicName : 'Video Recordings'}
            ]
        },
        {businessId : 'general', businessName : 'General', businessImage : 'images/product.png', businessDescription : 'This section belongs to General', sub_topics : 
            [
                {topicClass : 'general-class', topicID : 'general-articles', topicName : 'Articles'}
            ]
        }

    ];

    /*---------------------------------------------*/



    /* ------------------------------------------------*/
    /* index.html */
    /* ------------- */
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
    $scope.pptTitle = 'PPT PRESENTATION';
    
    $scope.videoRecording = "VIDEO RECORDINGS";
    $scope.pptDocuments = 
    [
        { name : 'BHANIX & CASHe', icon:'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/bhanix_and_cashe_icon.png', document : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/bhanix_and_cashe.pdf'},
        { name : 'BUY NOW PAY LATER', icon:'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/buy_now_pay_later_icon.png', document : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/buy_now_pay_later.pdf'},
        { name : 'FINTECH - FINANCIAL SECTOR', icon:'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/fintech_financial_sector_icon.png', document : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/fintech_financial_sector.pdf'}
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
                id:'word',name : 'Word Documents', class_name : "word-doc", word_documents : 
                [
                {wordID : 'word-doc-1', alt_text : "BNPL is a hit for 3 reasons", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/3_reasons_bnpl_hit_icon.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/3_reasons_bnpl_is_a_hit_among_young_shoppers_this_festive_season.pdf", word_doc : '3 reasons BNPL is a hit among young shoppers this festive season', overview : 'BNPL gives customers instant credit lines access to pay for the products they want to buy on the online retail stores'},
                {wordID : 'word-doc-2', alt_text : "5 apps to consider for micro loans", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/5_apps_to_consider_for_micro_loans_icon.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/5_apps_to_consider_for_micro_loans_this_festive_season.pdf", word_doc : '5 apps to consider for micro loans this festive season',overview : 'Popular small sized loan apps that reach customer needs are Smart Coin, KreditBee, MoneyTap, CASHe & PaySense'},
                {wordID : 'word-doc-3', alt_text : "5 tech based platforms for credit literacy", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/5_tech_based_platforms_driving_credit_line_icon.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/5_tech-based_platforms_driving_credit_literacy.pdf", word_doc : '5 Tech-Based Platforms Driving Credit Literacy', overview : 'the 5 Tech based plans that are ready to improve customer finance health are OneScore, CASHe, LenDen Club, Bank Bazaar and Paisa Bazaar'},
                {wordID : 'word-doc-4', alt_text : "Banking 2.0", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/banking_2_dot_0_icon.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/banking_2_dot_0.pdf", word_doc : 'Banking 2.0', overview : 'Young minds and Technology are the pillars of the Banking sector in this generation'},
                {wordID : 'word-doc-5', alt_text : "Bhanix Finance", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/bhanix-finance-logo.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/bhanix_finance.pdf", word_doc : 'Bhanix Finance', overview : 'Bhanix is a non-banking financial corporation incorporated on March 15th, 1996 registered with Reserve Bank of India. It uses CASHe a loan giving app for young salaried professionals'},
                {wordID : 'word-doc-6', alt_text : "BNPL lights up India's e-commerce", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/BNPL_lights_up_India_ecommerce_sales_icon.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/bnpl_lights_up_india%E2%80%99s_ecommerce_sales_this_diwali.pdf", word_doc : 'BNPL lights up India’s ecommerce sales this Diwali', overview : 'BNPL became a helping hand for customers to shop with during the festive season who can pay back over a period of 12 months'},
                {wordID : 'word-doc-7', alt_text : "Buy now pay later set to surge over ten fold in India", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/buy_now_pay_later_ten_fold_india_icon.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/buy_now_pay_later_set_to_surge_over_ten_fold_in_india.pdf", word_doc : 'Buy now pay later set to surge over ten fold in India'},
                {wordID : 'word-doc-8', alt_text : "Buy now, pay later set to surge over ten-fold in India - reuters", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/buy_now_pay_later_reuters_icon.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/buy_now%2Cpay_later_set_to_surge_over_ten-fold_in_india-reuters.pdf", word_doc : 'Buy now, pay later set to surge over ten-fold in India - reuters'},
                {wordID : 'word-doc-9', alt_text : "Buy-Now, Pay-Later Loans Help Fuel India’s Festive Recovery", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/buy_now_pay_later_festive_recovery_icon.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/buy_now%2C_pay_later_loans_help_fuel_india%E2%80%99s_festive_recovery.pdf", word_doc : 'Buy-Now, Pay-Later Loans Help Fuel India’s Festive Recovery'},
                {wordID : 'word-doc-10', alt_text : "Jogindar Rana appointed on top role", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/joindhar_rana_appointed.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/cashe_appoints_veteran_banker_jogindar_rana_to_top_role.pdf", word_doc : 'CASHe appoints veteran banker Jogindar Rana to Top Role'},
                {wordID : 'word-doc-11', alt_text : "CASHe product pipeline", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/cashe_product_pipeline.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/cashe_product_pipeline.pdf", word_doc : 'CASHe product pipeline'},
                {wordID : 'word-doc-12', alt_text : "CASHe Raises Rs 140 Crores", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/cashe_raises_140_cr_cnbc.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/cashe_raises_rs_140_cr_v_raman_kumar_talks_about_growth_ahead.pdf", word_doc : 'CASHe Raises Rs 140 Cr V Raman Kumar Talks About Growth Ahead'},
                {wordID : 'word-doc-13', alt_text : "CASHe roadmap", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/cashe_roadmap.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/cashe_roadmap.pdf", word_doc : 'CASHe roadmap'},
                {wordID : 'word-doc-14', alt_text : "CASHe", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/cashe.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/cashe.pdf", word_doc : 'CASHe'},
                {wordID : 'word-doc-15', alt_text : "Building up Digital-first Customer Acquisition", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/cxo_exclusive_icon.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/cxo_exclusive-building_a_digital-first_customer_acquisition_and_collection_process.pdf", word_doc : 'CXO Exclusive - Building a Digital-first Customer Acquisition and Collection Process'},
                {wordID : 'word-doc-16', alt_text : "AI-Driven Financial Inclusion' with Yashoraj Tyagi", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/ai_driven_financial_inclusion.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/exploring_ai-driven_financial_inclusion_with_yashoraj_tyagi%2C_ct_of_cashe.pdf", word_doc : "Ecd D:xploring 'AI-Driven Financial Inclusion' with Yashoraj Tyagi, CTO of CASHe"},
                {wordID : 'word-doc-17', alt_text : "Fintech Platform raises $19 million", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/fintech_platform_raises_19_million_dollars.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/fintech_platform_raises_%2419_million_from_its_singaporean_parent_tslc.pdf", word_doc : 'Fintech Platform raises $19 million from its Singaporean parent TSLC'},
                {wordID : 'word-doc-18', alt_text : "Safeguarding yourself from financial frauds", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/safe_guarding_from_financial_frauds.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/how_to_safeguard_yourself_from_financial_frauds.pdf", word_doc : 'How to safeguard yourself from financial frauds'},
                {wordID : 'word-doc-19', alt_text : "BNPL good idea or not", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/buy_now_pay_later_good_idea.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/is_buy_now%2C_pay_later_a_good_idea_for_consumers.pdf", word_doc : 'Is Buy Now, Pay Later A Good Idea For Consumers'},
                {wordID : 'word-doc-20', alt_text : "", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/pandemic_fuels_tech_inclusion.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/pandemic_fuels_tech_inclusion_in_the_financial_sector.pdf", word_doc : 'Pandemic Fuels Tech Inclusion in the Financial Sector'},
                {wordID : 'word-doc-21', alt_text : "", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/personal_lending_startup.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/personal_lending_startup_cashe_secures_inr_140_crores_equity_funding.pdf", word_doc : 'Personal Lending Startup CASHe secures INR 140 Crores Equity funding'},
                {wordID : 'word-doc-22', alt_text : "", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/personal_loans_young_salaried_millennials.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/personal_loans_for_young_salaried_millennials_across_india.pdf", word_doc : 'Personal Loans for young salaried millennials across India'},
                {wordID : 'word-doc-23', alt_text : "", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/september_records_35_percent.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/sept_records_35_percent_rise_in_bnpl_loan_applications.pdf", word_doc : 'Sept records 35 percent rise in BNPL loan applications'},
                {wordID : 'word-doc-24', alt_text : "", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/the_evolution_of_digital_lending_sector.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/the_evolution_of_the_digital_lending_sector_in_india.pdf", word_doc : 'The evolution of the digital lending sector in India'},
                {wordID : 'word-doc-25', alt_text : "", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/top_apps_instant_personal_loan.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/top_apps_that_help_you_take_an_instant_personal_loan.pdf", word_doc : 'Top apps that help you take an instant personal loan'},
                {wordID : 'word-doc-26', alt_text : "", icon : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/with_10x_growth_bnpl_products.png', document : "https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/with_10x_growth_for_bnpl_products_during_sales.pdf", word_doc : 'With 10x growth for BNPL products during sales'}
                ]
            },
            {
                id:'pdf',name : 'PDF Documents', class_name : "pdf-doc", pdf_documents : 
                [
                    {pdfID : 'pdf-doc-1', icon:'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/bhanix_and_cashe_icon.png', document : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/bhanix_and_cashe.pdf', pdf_doc : "BHANIX & CASHe"},
                    {pdfID : 'pdf-doc-2', icon:'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/buy_now_pay_later_icon.png', document : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/buy_now_pay_later.pdf', pdf_doc : "Buy Now Pay Later"},
                    {pdfID : 'pdf-doc-3', icon:'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/images/fintech_financial_sector_icon.png', document : 'https://s3.ap-south-1.amazonaws.com/learnings.cashe.co.in/assets/fintech_financial_sector.pdf', pdf_doc : "Fintech - Financial Sector"}
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

    $scope.linksWebsites = 
    [
        {ID : 'cashe', name : 'CASHe'},
        {ID : 'bhanix', name : 'Bhanix Finance'}
    ];
    var videoRecording = 0;
    $scope.documentation = 'DOCUMENTATION';

    $scope.changeBackgroundTopic = function(index,event)
    {
        className = event.target.className;
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
        
        $scope.selectedBusinessSubTopic = -1;
        $scope.selectedBusinessTopic = -1;

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
            
            case 'links-websites ng-binding':
                $scope.selectedLinksTitle = $scope.linksTitle;
                break;

            case 'links ng-binding':
                $scope.selectedLinksTitle = $scope.linksTitle;
                $scope.selectedLinks = index;
                break;
            
            case 'quizzTitle ng-binding':
                $scope.selectedQuizTitle = $scope.quizTitle;
                break;
                
            case 'quiz-topics ng-binding':
                $scope.selectedQuizTitle = $scope.quizTitle;
                $scope.selectedQuizTopics = index;
                break;
            
            case 'business-topics ng-binding':
                $scope.selectedBusinessTopic = index;
                break;

            case 'bi-class ng-binding':
                $scope.selectedBusinessTopic = 0;
                $scope.selectedBusinessSubTopic = 0;
                break;

            case 'collections-class ng-binding':
                $scope.selectedBusinessTopic = 1;
                $scope.selectedBusinessSubTopic = 0;
                break;

            case 'customer-support ng-binding':
                $scope.selectedBusinessTopic = 2;
                $scope.selectedBusinessSubTopic = 0;
                break;

            case 'fintech-ecosystem ng-binding':
                $scope.selectedBusinessTopic = 3;
                $scope.selectedBusinessSubTopic = 0;
                break;
        
            case 'growth ng-binding':
                $scope.selectedBusinessTopic = 4;
                $scope.selectedBusinessSubTopic = 0;
                break;

            case 'operations ng-binding':
                $scope.selectedBusinessTopic = 5;
                $scope.selectedBusinessSubTopic = 0;
                break;

            case 'product ng-binding':
                $scope.selectedBusinessTopic = 6;
                $scope.selectedBusinessSubTopic = 0;
                break;
    
            case 'general ng-binding':
                $scope.selectedBusinessTopic = 7;
                $scope.selectedBusinessSubTopic = 0;
                break;
        } 
    }
    
    $scope.videosAutoSlideDown = function(index)
    {
        // if(default_video_clicked == true)
        // {
            $scope.videoRecordingTitle = $scope.videoRecording;
            $scope.selectedVideo = 0;
            //default_video_clicked = false;
        //}
        $('.videos').slideDown(500);
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
  
    $scope.wordDocPdfDocSlideUp = true;
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
                case 'vidRec':
                    $scope.wordDocDisplayScreen = false;
                    $scope.pdfDocDisplayScreen = false;
                    $scope.pptDocDisplayScreen = false;
                    $scope.displayQuizPages=false;
                    $scope.displayWebsiteLinksPage=false;
                    toggleAccordion = '.videos';
                    $scope.selectedVideo = 0;
                    $scope.videoRecordingTitle = $scope.videoRecording;
                    $scope.displayVideosDocsPage = true;
                    document.getElementById('display').data = casheFiles.get('vid1');
                    $scope.slideAccordions(toggleAccordion);
                    $scope.wordDocPdfDocSlideUp = true;
                    $scope.quiz_running=false;
                    break;

                case 'bi':
                    document.getElementByClassName('sub-topics')[0].style.display = "block";
                    document.getElementById('bi-video_recordings').style.display = "block";
                    // $('.'+$scope.businessPage[0].sub_topics[0].topicClass).slideToggle(500);
                    $('.sub-topics').slideToggle(500);
                    alert($scope.businessPage[0].sub_topics[0].topicClass);
                    break;

                case 'document':
                    console.log("bolo");
                    $scope.wordDocDisplayScreen=true;
                    // $scope.wordDocDisplayScreen = false;
                    $scope.pdfDocDisplayScreen = false;
                    $scope.pptDocDisplayScreen = false;
                    $scope.selectedDocumentation = $scope.documentation;
                    $scope.selectedDoc=0;
                    $scope.displayVideosDocsPage=false;
                    $scope.displayQuizPages=false;
                    $scope.displayWebsiteLinksPage=false;
                   // $scope.selectedWordDoc = 0;
                    document.getElementById('display').data = casheFiles.get("word-doc-1");
                    toggleAccordion = '.documents';
                    $scope.slideAccordions(toggleAccordion);
                    $scope.wordDocPdfDocSlideUp = false;
                    // $('.word-docs').slideToggle(500);
                    // $('.pdf-docs').slideUp(500);
                    //id='word';
                    $scope.quiz_running=false;
                    break;

                case 'word':
                    console.log("hello");
                    $scope.wordDocDisplayScreen = true;
                    //$scope.wordDocDisplayScreen = false;
                    $scope.pdfDocDisplayScreen = false;
                    $scope.pptDocDisplayScreen = false;
                    $scope.displayQuizPages=false;
                    $scope.displayWebsiteLinksPage=false;
                    toggleAccordion = '';
                    $scope.displayVideosDocsPage = false;
                    //document.getElementById('display').data = casheFiles.get("word-doc-1");
                    $scope.slideAccordions(toggleAccordion);
                    $scope.selectedDocumentation = $scope.documentation;
                    $scope.selectedDoc=0;
                    $scope.selectedWordDoc = 0;
                    $scope.wordDocPdfDocSlideUp = false;
                    $('.word-docs').slideToggle(500);
                    $('.pdf-docs').slideUp(500);
                    $scope.quiz_running=false;
                    break;

                case 'pdf':
                    $scope.pdfDocDisplayScreen = true;
                    $scope.wordDocDisplayScreen = false;
                    //$scope.pdfDocDisplayScreen = false;
                    $scope.pptDocDisplayScreen = false;

                    $scope.displayQuizPages=false;
                    $scope.displayWebsiteLinksPage=false;
                    $scope.selectedDocumentation = $scope.documentation;
                    $scope.selectedDoc=1;
                    toggleAccordion = '';
                    //$scope.displayNavigateTipPage=false;
                    $scope.slideAccordions(toggleAccordion);
                    $scope.selectedPdfDoc = 0;
                    $scope.displayVideosDocsPage = false;
                    document.getElementById('display').data = casheFiles.get('pdf-doc-1');
                    $scope.wordDocPdfDocSlideUp = false;
                    $('.word-docs').slideUp(500);
                    $('.pdf-docs').slideToggle(500);
                    $scope.quiz_running=false;
                    break;

                case 'ppt-doc':
                    $scope.pptDocDisplayScreen = true;
                    $scope.wordDocDisplayScreen = false;
                    $scope.pdfDocDisplayScreen = false;
                    //$scope.pptDocDisplayScreen = false;
                    $scope.displayQuizPages=false;
                    $scope.displayWebsiteLinksPage=false;
                    $scope.displayNavigateTipPage=false;
                    $scope.selectedPptTitle = $scope.pptTitle;
                    //$scope.selectedPptDoc = 0;
                    //document.getElementById('display').data = casheFiles.get('ppt-doc-1');
                    toggleAccordion = '.ppt-docs';
                    $scope.displayVideosDocsPage = false;
                    $scope.slideAccordions(toggleAccordion);
                    $scope.wordDocPdfDocSlideUp = true;
                    $scope.quiz_running=false;
                    break;

                case 'websites':
                    $scope.wordDocDisplayScreen = false;
                    $scope.pdfDocDisplayScreen = false;
                    $scope.pptDocDisplayScreen = false;
                    $scope.showCasheContents=true;
                    $scope.showBhanixContents=false;
                    $scope.displayQuizPages=false;
                    $scope.displayNavigateTipPage=false;
                    $scope.selectedLinksTitle = $scope.linksTitle;
                    $scope.selectedLinks = 0;
                    $scope.quiz_running=true;
                    document.getElementById('display').data = casheFiles.get('word-doc-1');
                    toggleAccordion = '.links'
                    $scope.websitelink = "https://www.cashe.co.in";
                    $scope.displayWebsiteLinksPage=true;
                    $scope.slideAccordions(toggleAccordion);
                    
                    //$scope.wordDocPdfDocSlideUp = true;
                    $scope.displayVideosDocsPage = false;
                    $scope.quiz_running=false;
                    document.getElementById('display').data = casheFiles.get(id);
                    break;
                
                case 'quiz':
                    if($scope.quiz_running==true)
                    {
                        $scope.displayVideosDocsPage=false;
                        $scope.displayQuizPages=true;
                        $scope.displayFintechQuizPage=true;
                        $scope.displayFintechQuizTips=true;
                        $scope.selectedQuizTopics=0;
                        $scope.displayWebsiteLinksPage=false;
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
                    $scope.wordDocDisplayScreen = false;
                    $scope.pdfDocDisplayScreen = false;
                    $scope.pptDocDisplayScreen = false;
                    $scope.quiz_running=false;
                    //console.log("default");
                    $scope.displayQuizPages = false;
                    $scope.displayVideosDocsPage = true;
                    $scope.displayNavigateTipPage = false;
                    document.getElementById('display').data = casheFiles.get(id);
                    //already_selected_file = id;
                    $scope.displayWebsiteLinksPage = false; 
                    break;
            }
            if($scope.wordDocPdfDocSlideUp == true)
            {
                    $('.word-docs').slideUp(500);
                    $('.pdf-docs').slideUp(500);
                    $scope.wordDocPdfDocSlideUp = false;
            }
            $scope.slideUpQuizQuestions();
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
            $scope.showCasheContents=false;
            $scope.showBhanixContents=false;
            $scope.displayQuizPages = false;
            $scope.displayNavigateTipPage = false;
            $scope.displayVideosDocsPage = false;
            $scope.displayWebsiteLinksPage = true;
        
            var id = event.target.id;
            if(id=='cashe')
            {
                $scope.showCasheContents=true;
                $scope.websitelink = "https://www.cashe.co.in";
                $scope.showBhanixContents=false;
            }
            else
            {
                $scope.showBhanixContents=true;
                $scope.websitelink = "https://www.bhanixfinance.com";
                $scope.showCasheContents=false;
            }
        }
    }

    
    // $scope.changeBackground = function(index,event)
    // {   
    //     default_video_clicked = false;
    //     current_div = event.target.id;
    //     $scope.displayWebsiteLinksPage = false;
    //     current_div_clicked = true;
    //     prev_div = current_div;
    //     prev_accordion_visited=true;
    // }

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