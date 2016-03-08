/**
 * @file Sini_login.js
 */
/*** define ***/
var DSTA_INITLOAD_HDR  = "DSTA_INITLOAD_HDR";
var DSTA_INITLOAD_CNT  = "DSTA_INITLOAD_ONT";

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
    Fini_err();
  }
});

/*** function ***/

function Fini_start() {
  try {
    Fcom_loadJs( 
      [ "./src/js/header"  ,
        "./src/js/loginform"
      ] ,
      function(){
        try {
          $("#i-cnt").css( "height" , $(window).height()-70 + "px" );
          $("#i-cnt").css( "width" , $(window).width() + "px" );
          $("#i-cnt").css( "background-color" , "#EEEEEE" );
          $("body").fadeIn("normal" , function(){
            Fini_loadCmdflow();
          });
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}


function Fini_loadCmdflow() {
  try {
    Fcom_loadJs( 
      [
        "./src/js/velocity"  , 
        "./src/js/cmdflow" ,
        "./src/js/randam"
      ] ,
      function() {
        try { Fcdf_start();}
        catch( e ) {alert( e.stock );}
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fini_err(){
  // エラー表示
}

/* end of file */
