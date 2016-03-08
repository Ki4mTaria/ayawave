/**
 * @file Svew_mypage.js
 */
/*** global ***/
var Gtab_firstMypage = true;

/*** initialize ***/
$(function(){
  try {
    Ftab_setCallback( "i-mypage-tab" , function(){
      Ftab_clickMypage();
    });
  } catch( e ) {
    alert( e.stack );
  }
});

function Ftab_clickMypage() {
  try {
    if( true == Gtab_firstMypage ) {
      /* load tab */
      Ftab_loadMypTab();
//      Fcom_loadJs(
//        [ "./load/js/vtb_mypage" ] ,
//        function(){
//          try { Fvtb_loadMypConts(); }
//          catch(e) { alert(e.stack); }
//        }
//      );
      Gtab_firstMypage = false;
    }
  } catch( e ) {
    alert( e.stack );
  }
}

function Ftab_loadMypTab() {
  try {
    Fcom_loadHtml (
      "./load/html/tab_mypage" ,
      "i-mypage-conts"         ,
      function(){
        try {
          // Fcom_loadCss( "./load/css/tab_create" );
          Fcom_loadJs(
            [ "./load/js/tab_ujarak" ] ,
            function(){
              try {
                var tab = $("#i-mypage-tab").ujaraktab();
                tab.setClickEvt( "i-test1-tab", function(){Fmyp_tab1Click();});
                tab.setClickEvt( "i-test2-tab", function(){Fmyp_tab2Click();});
                tab.setClickEvt( "i-test3-tab", function(){Fmyp_tab3Click();});
                tab.setClickEvt( "i-test4-tab", function(){Fmyp_tab4Click();});
                tab.setClickEvt( "i-test5-tab", function(){Fmyp_tab5Click();});
              }
              catch(e) { alert(e.stack); }
            }
          );
          $( "#i-mypage" ).fadeIn( 'fast' );
        }catch(e){ alert(e.stack); }
      }
    );
    
    
  } catch( e ) {
    alert( e.stack );
  }
}

function Fmyp_tab1Click() {
  
}

function Fmyp_tab2Click() {

}

function Fmyp_tab3Click() {

}

function Fmyp_tab4Click() {

}

function Fmyp_tab5Click() {

}



/* end of file */
