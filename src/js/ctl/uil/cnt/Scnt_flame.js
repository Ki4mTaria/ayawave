/**
 * @file Scnt_flame.js
 */
/*** define ***/
var DCNT_ID_ITM = "i-cnt-itm";
var DCNT_ID_MYP = "i-cnt-myp";
var DCNT_ID_SYS = "i-cnt-sys";
var DCNT_ID_SRH = "i-cnt-srh";

/*** global ***/
var Gcnt_idList  = new Array();
var Gcnt_current = null;

/*** initialize ***/
$(function(){
  try {
    var wid = $(window).width();
    var hei = ($(window).height()-75);
    $("#i-cnt").css( "width"  , wid + "px" );
    $("#i-cnt").css( "height" , hei + "px" );
    // item view
    Gcnt_idList.push(DCNT_ID_ITM);
    $("#i-cnt").append( "<div id='"+ DCNT_ID_ITM +"'></div>" );
    $("#i-cnt-itm").css( "width"   , wid + "px" );
    $("#i-cnt-itm").css( "height"  , hei + "px" );
    $("#i-cnt-itm").css( "display" , "none" );
    // mypage view
    Gcnt_idList.push(DCNT_ID_MYP);
    $("#i-cnt").append( "<div id='"+ DCNT_ID_MYP +"'></div>" );
    $("#i-cnt-myp").css( "width"   , wid + "px" );
    $("#i-cnt-myp").css( "height"  , hei + "px" );
    $("#i-cnt-myp").css( "display" , "none" );
    // system view
    Gcnt_idList.push(DCNT_ID_SYS);
    $("#i-cnt").append( "<div id='"+ DCNT_ID_SYS +"'></div>" );
    $("#i-cnt-sys").css( "width"   , wid + "px" );
    $("#i-cnt-sys").css( "height"  , hei + "px" );
    $("#i-cnt-sys").css( "display" , "none" );
    // search view
    Gcnt_idList.push(DCNT_ID_SRH);
    $("#i-cnt").append( "<div id='"+ DCNT_ID_SRH +"'></div>" );
    $("#i-cnt-srh").css( "width"   , wid + "px" );
    $("#i-cnt-srh").css( "height"  , hei + "px" );
    $("#i-cnt-srh").css( "display" , "none" );
        
    Fcnt_initItem();
  } catch( e ) {
    alert( e.stack );
  }
});
  
function Fcnt_initItem() {
  try {
    Fcom_loadJs(
      [ "./src/js/cntitem" ] ,
      function(){
        try { 
          Fcnt_switch( DCNT_ID_ITM ); }
        catch( e ) { alert( e.stack ); }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}
  
function Fcnt_switch( id ) {
  try {
    var loop = 0;
    
    if( id == Gcnt_current ) {
      return;
    }
    for(loop=0; loop < Gcnt_idList.length ;loop++) {
      $( "#" + Gcnt_idList[loop] ).fadeOut();
    }
    Gcnt_current = id;
    $( "#" + id ).fadeIn();
  } catch( e ) {
    alert( e.stack );
  }
}
  
/* end of file */
