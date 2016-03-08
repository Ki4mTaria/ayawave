/**
 * @file Sedt_view.js
 */
/*** define ***/
var DEDT_CURSTS_OFF     = "DEDT_CURSTS_OFF";
var DEDT_CURSTS_OFFWAIT = "DEDT_CURSTS_OFFWAIT";
var DEDT_CURSTS_ON      = "DEDT_CURSTS_ON";
var DEDT_CURSTS_ONWAIT  = "DEDT_CURSTS_ONWAIT";

/*** gloval ***/
var Gedt_cursorState = DEDT_CURSTS_OFF;
var Gedt_cursorTimer = null;

$(function(){
  try {
    Fcom_loadHtml (
      "./load/html/editor" ,
      "i-code-edit" ,
      function(){
        try {
          Fcom_loadCss( "./load/css/editor" );
          //$( "#i-home" ).fadeIn( 'fast' );
          Fedt_setClickEvent();
        } catch(e){alert(e.stack);}
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
});

function  Fedt_setClickEvent() {
  try {
    $(".c-editor").click(function(){
      try {
        Fedt_clickEditor();
      }
      catch(e){alert( e.stack );}
    });
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fedt_startCursor() {
  try {
    if ( null != Gedt_cursorTimer ) {
      return;
    }
    $( "#i-cursor" ).css( "display" , "block" );
    Gedt_cursorTimer = setInterval( "Fedt_switchCursor()" , 300 );
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fedt_stopCursor() {
  try {
    $( "#i-cursor" ).css( "display" , "none" );
    if ( null != Gedt_cursorTimer ) {
      clearInterval( Gedt_cursorTimer );
      Gedt_cursorTimer = null;
    }
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fedt_switchCursor() {
  try {
    if ( DEDT_CURSTS_OFF == Gedt_cursorState ) {
      $( "#i-cursor" ).css( "display" , "none" );
      Gedt_cursorState = DEDT_CURSTS_OFFWAIT;
    } else if ( DEDT_CURSTS_OFFWAIT == Gedt_cursorState ) {
      Gedt_cursorState = DEDT_CURSTS_ON;
    } else if ( DEDT_CURSTS_ON == Gedt_cursorState ) {
      $( "#i-cursor" ).css( "display" , "block" );
      Gedt_cursorState = DEDT_CURSTS_ONWAIT;
    } else {
      Gedt_cursorState = DEDT_CURSTS_OFF;
    }
  } catch ( e ) {
    alert( e.stack );
  }
}

/* end of file */
