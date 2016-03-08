/**
 * @file Sswb_ujarak.js
 */
/*** global ***/
var Gswb_tgtList = new Array();

/*** class ***/
function Cswb_target( i ) {
  this.id  = i;
  this.evt = null;
}

/*** initialize ***/
$(function(){
  try {
    if ( false == Fcom_isLoaded( DINI_LOAD_UJARAK_BTN ) ) {
      Fcom_startLoad( DINI_LOAD_UJARAK_BTN );
      Fcom_loadJs(
        [ "./load/js/ujarakbtn" ] ,
        function() {
          try{Fcom_endLoad( DINI_LOAD_UJARAK_BTN );}
          catch(e){alert(e.stack);}
      );
    }
  } catch( e ) {
    alert( e.stack );
  }
});

/*** function ***/
function Fswb_init( tgt_id , conts ) {
  try {
    var loop = 0;
    for( loop=0 ; loop < Gswb_tgtList.length ; loop++ ) {
      if( tgt_id == Gswb_tgtList[loop].id ) {
        throw Error("target id is duplicated");
      }
    }
    $("#" + tgt_id ).css( "display" , "none" );
    Gswb_tgtList.push( new Cswb_target( tgt_id ) );
    var swb_id = null;
    for( loop=0 ; loop < conts.length ; loop++ ) {
      swb_id = tgt_id + "-swb"+ (loop+1);
      $("#" + tgt_id ).append("<div id='" + swb_id +"'></div>");
      Fujb_init( swb_id  , conts[loop] );
      Fujb_start( swb_id );
    }
    $("#" + tgt_id ).fadeIn();
  } catch( e ) {
    alert( e.stack );
  }
}


/* end of file */
