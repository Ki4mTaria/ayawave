/**
 * @file Scom_contsSwitch.js
 */
/*** gloval ***/
var Gcsw_loadConts = new Array(false,false,false);
var Gcsw_corrent   = null;
var Gcsw_tgtMap    = new Array(
  "i-cnt-top" ,
  "i-cnt-myp" ,
  "i-cnt-set"
);

/*** define ***/
var DCSW_IDX_TOP = 0;
var DCSW_IDX_MYP = 1;
var DCSW_IDX_SET = 2;

/*** function ***/
function Fcsw_init( tgt_id ) {
  try {
    Fcom_loadHtml(
       "./load/html/base_conts" ,
       tgt_id ,
       function() {
         try {
           Fcom_loadCss( "./load/css/conts" );
           // set size
           var wid = $(window).width()+"px";
           var hei = ($(window).height()-70)+"px";
           $("#i-cnt-top").css( "width" , wid );
           $("#i-cnt-top").css( "height" , hei );
           $("#i-cnt-myp").css( "width" , wid );
           $("#i-cnt-myp").css( "height" , hei );
           $("#i-cnt-set").css( "width" , wid );
           $("#i-cnt-set").css( "height" , hei );
         } catch( e ) {
           alert( e.stack );
         }
       }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fcsw_start() {
  try {
    $("#" + Gcsw_tgtMap[0] ).fadeIn( 'normal' );
    Gcsw_corrent = DCSW_IDX_TOP;
  } catch( e ) {
    alert( e.stack );
  }
}

function Fcsw_switchTop() {
  try {
    if( DCSW_IDX_TOP == Gcsw_corrent ) {
      return;
    }
    $("#" + Gcsw_tgtMap[Gcsw_corrent] ).fadeOut( 'normal' , function(){
      $("#" + Gcsw_tgtMap[DCSW_IDX_TOP] ).fadeIn( 'normal' );
    });
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
