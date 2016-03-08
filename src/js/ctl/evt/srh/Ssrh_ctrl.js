/**
 * @file Ssrh_ctrl.js
 */
/*** global ***/
var Gsrh_first = true;

/*** function ***/
function Fsrh_start() {
  try {
    if( true == Gsrh_first ) {
      Fsrh_menu();
      Fsrh_conts();
      Gsrh_first = true;
    }
    
    Fcnt_switch( DCNT_ID_SRH );
    
  } catch (e) {
    alert( e.stack );
  }
}

function Fsrh_menu() {
  try {
    $("#i-cnt-srh").append("<div id='i-srh-mnu'></div>");
    $("#i-cnt-srh").append("<div id='i-srh-bar'><i class='fa fa-bars'></i></div>");
    $("#i-srh-bar").css( "width"     , "32px" );
    $("#i-srh-bar").css( "font-size" , "2.3em" );
    $("#i-srh-bar").css( "margin"    , "5px 0px 0px 10px" );
    $("#i-srh-bar").css( "cursor"    , "pointer" );
    Fcom_loadJs(
      [
        "./src/js/slidemenu",
        "./src/js/ujarakbtn"
      ] ,
      function() {
        try {
          Fsdm_init("i-srh-mnu");
          Fsrh_menuConts();
          $( "#i-srh-mnu" ).css( "background" , "rgb(199, 224, 240)" );
          Fsdm_setTop( "i-srh-mnu" , 69 );
          Fsdm_setWidth( "i-srh-mnu" , 200 );
          $("#i-srh-bar").click(function(){
            Fsdm_open( "i-srh-mnu" );
          });
        } catch(e) { alert(e.stack); }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fsrh_conts() {
  try {
    $("#i-cnt-srh").append("<div id='i-srh'></div>");
    $("#i-srh").append("<div id='i-srh-ttl'></div>");
    $("#i-srh").append("<div id='i-srh-tag'></div>");
    $("#i-srh").append("<div id='i-srh-dat'></div>");
    $("#i-srh-ttl").css( "display" , "block" );
    $("#i-srh-tag").css( "display" , "none" );
    $("#i-srh-dat").css( "display" , "none" );

  } catch( e ) {
    alert( e.stack );
  }
}

function Fsrh_menuConts() {
  try {
    
  } catch( e ) {
    alert( e.stack );
  }
}


/* end of file */
