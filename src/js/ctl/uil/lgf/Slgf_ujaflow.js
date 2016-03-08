/**
 * @file Slgf_ujaflow.js
 */
/*** define ***/
var DLGF_LOAD_LOGINF = "DLGF_LOAD_LOGINF";
var DLGF_LOAD_FLOWU  = "DLGF_LOAD_FLOWU";

/*** initialize ***/
$(function(){
  try {
    Fcom_startLoad( DLGF_LOAD_LOGINF );
    Fcom_startLoad( DLGF_LOAD_FLOWU );
    Fcom_loadJs(
      [
        "./src/js/shadowbox"   ,
        "./src/js/flowupform"  ,
        "./src/js/ujarakbtn"   ,
        "./src/js/loginevt"
      ] ,
      function(){
        try {
          Fcom_endLoad( DLGF_LOAD_FLOWU );
          Flgf_init();
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
});

/*** function ***/  
function Flgf_init() {
  try {
    $("#i-cnt").css( "display" , "none" );
    Fcom_loadHtml (
      "./src/html/loginform" ,
      "i-cnt" ,
      function() {
        try {
          //Flgf_startForm();
          var size = [ 240 , 450 ];
          var pos  = [ 
            ($(window).height()/2)- 100 ,
            ($(window).width()/2) - 225
          ];
          Fsbx_init( "i-form" , size , pos );
          Fsbx_backGround( "i-form" , "white" );
          Fujb_init( "i-form-send" , "Login" );
          Fujb_setCss( "i-form-send" , "background" , "#C7E0F0" );
          Fujb_start( "i-form-send" );
          Flgf_startForm();
          Flgn_setLoginEvt();
        } catch(e) { alert(e.stack); }
      }
    );
    $("#i-cnt").fadeIn();
  } catch( e ) {
    alert( e.stack );
  }
}

function Flgf_startForm() {
  try {
    if( false == Ffom_isLoaded(DLGF_LOAD_FLOWU) ) {
      setTimeout( "Flgf_startForm()" , 200 );
      return;
    }
    Ffom_init( "i-form-user" , "User&nbsp;ID&nbsp;:" , "text" );
    Ffom_setFocus( "i-form-user" , true );
    Ffom_start( "i-form-user" );
    Ffom_init( "i-form-pass" , "Password&nbsp;:" , "password" );
    Ffom_start( "i-form-pass" );
    Fcom_loadCss( "./src/css/loginform" );
    Fsbx_start( "i-form" );
    Fcom_endLoad( DLGF_LOAD_LOGINF );
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
