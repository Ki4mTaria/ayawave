/**
 * @file Sini_app.js
 */
/*** define ***/
var DINI_LOAD_HDR = "DINI_LOAD_HDR";
var DINI_LOAD_CNT = "DINI_LOAD_CNT"; 

/*** global ***/

/*** initial ***/
$(function() {
  try {
    $.getScript( "./src/js/loader" ,
      function(){try{ $.getScript( "./src/js/json" ,
        function(){try{ $.getScript( "./src/js/err",
          function(){
            try {
              $.getScript( "./src/js/debug" , null );
              Fini_start();
            } catch(e){Fini_err();}}
        );}catch(e){Fini_err();}}
      );}catch(e){Fini_err();}}
    );
  } catch( e ) {
    alert(e.stack);
  }
});

/*** function ***/
/**
 * @brief load some function
 */
function Fini_start() {
  try {
    // load header
    Fini_header();
    // load contents
    Fini_conts();
    
    Fcom_fireLoadev( 
      [
        DINI_LOAD_HDR ,
        DINI_LOAD_CNT
      ] ,
      function(){
        try {
          Fitm_initTtl();
          $("body").fadeIn("slow");
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

/**
 * @brief load header , user button
 */
function Fini_header() {
  try {
    Fcom_startLoad( DINI_LOAD_HDR );
    Fcom_loadJs(
      [ "./src/js/header" ] ,
        null
//      function() {
//        try { Fcom_endLoad( DINI_LOAD_HDR ); }
//        catch( e ) { alert( e.stack ); }
//      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fini_conts() {
  try {
    Fcom_startLoad( DINI_LOAD_CNT );
    Fcom_loadJs(
      [ "./src/js/conts" ] ,
      null
    );
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
