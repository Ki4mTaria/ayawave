/**
 * @file startApp.js
 */

/* define */
var DSTA_INITLOAD_HDR  = "DSTA_INITLOAD_HDR";
var DSTA_INITLOAD_CNT  = "DSTA_INITLOAD_ONT";

/*** initial ***/
$(function() {
  try {
    $.getScript( "./load/js/loader" ,
      function(){try{$.getScript( "./load/js/json" ,
        function(){try{$.getScript( "./load/js/err" ,
          function(){
            try {
//              Fsta_init();
            } catch(e){Fsta_err();}}
        );}catch(e){Fsta_err();}}
      );}catch(e){Fsta_err();}}
    );
  } catch( e ) {
    Fsta_err();
  }
});

/*** function ***/
/**
 * @brief load initial html,css,js
 */
function Fsta_init() {
  try {
    /* load header */
    Fcom_startLoad( DSTA_INITLOAD_HDR );
    $.getScript( "./load/js/uihdr" , null );
    /* load menu contents */
    Fcom_startLoad( DSTA_INITLOAD_CNT );
    $.getScript( "./load/js/uicnt" , null );
    
Fcom_endLoad( DSTA_INITLOAD_HDR );
Fcom_endLoad( DSTA_INITLOAD_CNT );
    
    Fcom_fireLoadev( [DSTA_INITLOAD_HDR,
                      DSTA_INITLOAD_CNT] , function() {
      $("body").fadeIn("slow");
    });
  } catch( e ) {
    alert( e.stack );
    //Ferr_func( DERR_CRITICAL , e.stack );
  }
}




/* end of file */
