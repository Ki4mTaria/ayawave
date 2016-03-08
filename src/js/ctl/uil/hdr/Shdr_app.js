/**
 * @file Shdr_app.js
 */
/*** define ***/
var DHDR_LOAD_HDR = "DHDR_LOAD_HDR";

/*** initialize ***/
$(function(){
  try {
    // Fcom_startLoad( DHDR_LOAD_HDR );
    Fcom_loadJs(
      [ 
        "./src/js/basicheader" ,
        "./src/js/ujarakdrop"  ,
        "./src/js/ujarakswh"   ,
        "./src/js/flowupform"  ,
        "./src/js/logout"
      ] ,
      function(){
        try {
          Fhdr_initHdr();
          Fhdr_initDrp();
          Fhdr_initSrh();
          Fcom_endLoad( DINI_LOAD_HDR );
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
});

function Fhdr_initHdr() {
  try {
    Fhdr_init( "i-hdr" , function(){
      try {
        Fhdr_setTitle( "Ayawave" );
        Fhdr_setCss( "background" , "#C7E0F0" );
        Fhdr_setStaticFlame();
        Fhdr_setTitleReload( true );
        Fhdr_start();
      } catch( e ) {
        alert( e.stock );
      }
    });
  } catch( e ) {
    alert( e.stack );
  }
}

function Fhdr_initDrp() {
  try {
    Fjsn_sendPost( "./func/auth/user" , null , function(ret){
      var drop = new Array();
      var user = ret.ret_msg;
      if( null == user ) {
        $("body").fadeOut( "fast" );
        Fath_logout();
      } else {
        drop.push( user );
        drop.push( "Item" );
        drop.push( "Mypage" );
        drop.push( "System" );
        drop.push( "Logout" );
      }
      Fdrp_init( "i-hdr-conts-right" , drop );
      Fdrp_setEvent( "i-hdr-conts-right" , 4 , Fath_logout );
      Fdrp_start( "i-hdr-conts-right" );
    });
  } catch( e ) {
    alert( e.stack );
  }
}

function Fhdr_initSrh() {
  try {
    $("#i-hdr-conts-center").append("<div id='i-srh-text'></div>");
    $("#i-hdr-conts-center").append("<div class='c-srh-btn' id='i-dtl-btn'></div>");
    $("#i-hdr-conts-center").append("<div class='c-srh-btn' id='i-srh-btn'></div>");
    $("#i-hdr-conts-center").append("<div id='i-dtl-dlg'></div>");
    Ffom_init( "i-srh-text" , "Search&nbsp;:" , "text" );
    Ffom_setWidth( "i-srh-text" , 350 );
    Fujb_init( "i-srh-btn" , "<i id='i-srh-ico' class='fa fa-search'></i>" );
    Fujb_init( "i-dtl-btn" , "<i id='i-dtl-ico' class='fa fa-caret-down'></i>" );
    Fcom_loadCss( "./src/css/search" );
    Fujb_setClickEvent( "i-dtl-btn" , function() {
      try {
        Fcom_loadJs(
          ["./src/js/modaldlg"] ,
          function() {
            try {
              Fmdg_init( "i-dtl-dlg", null );
              Fmdg_open( "i-dtl-dlg" );
            } catch( e ) { alert( e.stack ); }
          }
        );
      } catch( e ) {
        alert( e.stack );
      }
    } );
    Fujb_setClickEvent( "i-srh-btn" , function() {
      try { 
        Fcom_loadJs(
          ["./src/js/search"] ,
          function() {
            try { Fsrh_start(); }
            catch( e ) { alert( e.stack ); }
          }
        );
      } catch( e ) {
        alert( e.stack );
      }
    });
    Fujb_start( "i-srh-btn" );
    Fujb_start( "i-dtl-btn" );
  } catch( e ) {
    alert( e.stack );
  }
}
/* end of file */
