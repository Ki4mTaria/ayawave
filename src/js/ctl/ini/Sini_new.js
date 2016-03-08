/**
 * @file Sini_new.js
 */
/*** define ***/
var DINI_LOAD_HDR        = "DINI_LOAD_HDR";
var DINI_LOAD_USRBTN     = "DINI_LOAD_USRBTN";
//var DINI_LOAD_CNTS   = "DINI_LOAD_ONTS";
var DINI_LOAD_UJARAK_BTN = "DINI_LOAD_UJARAK_BTN";  //! ujarak button
var DINI_LOAD_UJARAK_SWB = "DINI_LOAD_UJARAK_SWB";
var DINI_LOAD_UJARAK_TAB = "DINI_LOAD_UJARAK_TAB";

//var DINI_LOAD_FLVL = "DINI_LOAD_FLVL";
var DINI_LOAD_TOPCNT     = "DINI_LOAD_TOPCNT";
var DINI_LOAD_VELOCITY   = "DINI_LOAD_VELOCITY";

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
    
    Fcom_fireLoadev( [DINI_LOAD_HDR] ,
      function(){
        try {
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
      [ "./src/js/newheader" ] ,
      function() {
        try { Fcom_endLoad( DINI_LOAD_HDR ); }
        catch( e ) { alert( e.stack ); }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fini_conts() {
  try {
    Fcom_loadJs(
      [ "./src/js/newconts" ] ,
      function() {
        try {
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
