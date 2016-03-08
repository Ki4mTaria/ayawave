/*** define ***/
var DMCT_INITLOAD_HOME     = "DMCT_INITLOAD_HOME";
var DMCT_INITLOAD_CRECHART = "DMCT_INITLOAD_CRECHART";
var DMCT_INITLOAD_MYPAGE   = "DMCT_INITLOAD_MYPAGE";
var DMCT_INITLOAD_ABOUT    = "DMCT_INITLOAD_ABOUT";


function Fmct_initLoad() {
  try {
    
    Fcom_startLoad( DMCT_INITLOAD_HOME );
    Fcom_startLoad( DMCT_INITLOAD_CRECHART );
    Fcom_startLoad( DMCT_INITLOAD_MYPAGE );
    Fcom_startLoad( DMCT_INITLOAD_ABOUT );
    
    Fcom_loadHtml( "./html/mct/base.html" ,
                   "Imct" ,function(){
      try {
        Fcom_loadCss( "./css/mct/base.css" );
        Fcom_loadHtml( "./html/mct/home.html" ,
                       "Icnt_menuHome" ,
                       function() {
                         Fcom_loadCss( "./css/mct/Cmct_home.css" );
                         Fcom_endLoad( DMCT_INITLOAD_HOME );
                       });
        Fcom_loadHtml( "./html/mct/crechart.html" ,
                       "Icnt_menuCrechart" ,
                       function(){
                         Fcom_endLoad( DMCT_INITLOAD_CRECHART );
                       });
        Fcom_loadHtml( "./html/mct/mypage.html" ,
                       "Icnt_menuMypage" ,
                       function(){
                         Fcom_endLoad( DMCT_INITLOAD_MYPAGE );
                       });
        Fcom_loadHtml( "./html/mct/about.html" ,
                       "Icnt_menuAbout" ,
                       function(){
                         Fcom_endLoad( DMCT_INITLOAD_ABOUT );
                       });
      } catch( e ) {
        alert( e.stack );
      }
    });
    var wait_list = new Array();
    wait_list.push( DMCT_INITLOAD_HOME );
    wait_list.push( DMCT_INITLOAD_CRECHART );
    wait_list.push( DMCT_INITLOAD_MYPAGE );
    wait_list.push( DMCT_INITLOAD_ABOUT );

   
    Fcom_fireLoadev( wait_list , function(){
      $("#Imct").fadeIn("slow");
      Fmnu_switConts( DMNU_HOME ); 
      Fcom_endLoad( DSTA_INITLOAD_MCT );
    });
  } catch( e ) {
    
  }
}
