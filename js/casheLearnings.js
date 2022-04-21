
const casheFiles = new Map();

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

                                        /* webiste links */
                                        //================

casheFiles.set('cashe','https://www.cashe.co.in');
casheFiles.set('bhanix','https://www.bhanixfinance.com');

//====================================================================================

                /* function to display on the right part of the page */
                //=====================================================

var isDisplayed = false;
function displayInThePage(id)
{
        document.getElementById('display-quiz-pages').style.display = "none";
        document.getElementById('displayDIV').style.display = "block";
        document.getElementById('display').data = casheFiles.get(id);
        document.getElementById('displayWebsiteLinks').style.display = "none";
}

//====================================================================================

                /* Jquery slideup and slide toggling accordion menu */
                //===================================================

$(document).ready(function()
{
    $('.vid').click(function()
    {
            $('.videos').slideToggle(500);
            $('.word-doc').slideUp(500);
            $('.word-docs').slideUp(500);
            $('.pdf-doc').slideUp(500);
            $('.pdf-docs').slideUp(500);
            $('.ppt-docs').slideUp(500);
            $('.links').slideUp(500);
            $('.quiz-topics').slideUp(500);
            $('.fintechQuestions').slideUp(500);  
            $('.bhanixQuestions').slideUp(500);  
            $('.casheQuestions').slideUp(500);  
            $('.competitiveAnalysisQuestions').slideUp(500);  
            
    })

    $('.documentation').click(function()
    {   
         $('.word-doc').slideToggle(500);
         $('.word-docs').slideUp(500);
        $('.pdf-doc').slideToggle(500);
          
            $('.pdf-docs').slideUp(500);
            $('.videos').slideUp(500);
            $('.links').slideUp(500);
            $('.ppt-docs').slideUp(500);
            $('.quiz-topics').slideUp(500);
            $('.fintechQuestions').slideUp(500); 
            $('.bhanixQuestions').slideUp(500);  
            $('.casheQuestions').slideUp(500);  
            $('.competitiveAnalysisQuestions').slideUp(500);   
    })

    $('.word-doc').click(function()
    {
            $('.word-docs').slideToggle(500); 
            $('.ppt-docs').slideUp(500);
            $('.videos').slideUp(500);
            $('.pdf-docs').slideUp(500);
            $('.links').slideUp(500);
            $('.quiz-topics').slideUp(500);
            $('.fintechQuestions').slideUp(500); 
            $('.bhanixQuestions').slideUp(500);  
            $('.casheQuestions').slideUp(500);  
            $('.competitiveAnalysisQuestions').slideUp(500);  
            isDisplayed=false; 
    })

    $('.pdf-doc').click(function()
    {
           $('.pdf-docs').slideToggle(500);
            $('.videos').slideUp(500);
            $('.word-docs').slideUp(500);
            $('.ppt-docs').slideUp(500);
            $('.links').slideUp(500);
            $('.quiz-topics').slideUp(500);
            $('.fintechQuestions').slideUp(500);  
            $('.bhanixQuestions').slideUp(500);  
            $('.casheQuestions').slideUp(500);  
            $('.competitiveAnalysisQuestions').slideUp(500);  
            isDisplayed=false;
    })

    $('.ppt').click(function()
    {
            $('.ppt-docs').slideToggle(500);
            $('.videos').slideUp(500);
            $('.word-docs').slideUp(500);
            $('.word-doc').slideUp(500);
            $('.pdf-doc').slideUp(500);
            $('.pdf-docs').slideUp(500);
            $('.links').slideUp(500);
            $('.quiz-topics').slideUp(500);
            $('.fintechQuestions').slideUp(500);
            $('.bhanixQuestions').slideUp(500);  
            $('.casheQuestions').slideUp(500);  
            $('.competitiveAnalysisQuestions').slideUp(500);
    })

    $('.links-websites').click(function()
    {
            $('.links').slideToggle(500);
            $('.ppt-docs').slideUp(500);
            $('.word-doc').slideUp(500);
            $('.word-docs').slideUp(500);
            $('.videos').slideUp(500);
            $('.pdf-docs').slideUp(500);  
            $('.pdf-doc').slideUp(500); 
            $('.quiz-topics').slideUp(500);
            $('.fintechQuestions').slideUp(500);  
            $('.bhanixQuestions').slideUp(500);  
            $('.casheQuestions').slideUp(500);  
            $('.competitiveAnalysisQuestions').slideUp(500);
    })

    $('#quiz').click(function()
    {
            $('.quiz-topics').slideToggle(500);
            $('.links').slideUp(500);
            $('.ppt-docs').slideUp(500);
            $('.word-doc').slideUp(500);
            $('.word-docs').slideUp(500);
            $('.videos').slideUp(500);
            $('.pdf-docs').slideUp(500);  
            $('.pdf-doc').slideUp(500);
            $('.fintechQuestions').slideUp(500);  
            $('.bhanixQuestions').slideUp(500);  
            $('.casheQuestions').slideUp(500);  
            $('.competitiveAnalysisQuestions').slideUp(500); 
    })
})