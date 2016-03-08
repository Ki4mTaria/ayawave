/**
 * @file Ssdm_basic.js
 */
/*** define ***/

/*** global ***/
var Gsdm_width     = 151;
var Gsdm_tgt_id    = null;
var Gsdm_initFin   = false;
var Gsdm_menuClick = false;
var Gsdm_isOpen    = false;

/*** function ***/
function Fsdm_init( tgt_id ) {
  try {
    Gsdm_tgt_id = tgt_id;
    $( "#" + tgt_id ).fadeOut( "fast" );
    $( "#" + tgt_id ).css( "height"   , $(window).height() + "px" );
    $( "#" + tgt_id ).css( "width"    , Gsdm_width + "px" );
    $( "#" + tgt_id ).css( "position" , "absolute" );
    $( "#" + tgt_id ).css( "top"      , "0px" );
    $( "#" + tgt_id ).css( "border"   , "solid 1px" );
    $( "#" + tgt_id ).css( "z-index"  , "100" );
    $( "#" + tgt_id ).click(function(){
      Gsdm_menuClick = true;
    });
    Fcom_loadJs(
      ["./src/js/velocity"] ,
      function() {
        try {
          Gsdm_initFin = true;
          $("body").click(function(){
            if( (true == Gsdm_isOpen) &&
                (false == Gsdm_menuClick)  ) {
              Fsdm_close( Gsdm_tgt_id );
            }
            Gsdm_menuClick = false;
          });
        } catch(e) { alert(e.stack); }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fsdm_setWidth( tgt_id , wid ) {
  try {
     Gsdm_width = wid;
     $( "#" + tgt_id ).css( "width" ,wid + "px" );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fsdm_setTop( tgt_id , tp ) {
  try {
    $( "#" + tgt_id ).css( "top" ,tp + "px" );
    $( "#" + tgt_id ).css( "height" , ($(window).height()-tp) + "px" );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fsdm_open( tgt_id ) {
  try {
    //if( false != Gsdm_menuClick ) {
      Gsdm_menuClick = true;
    //}
    Gsdm_isOpen    = true;
    if( false == Gsdm_initFin ) {
      setTimeout( "Fsdm_open('" + tgt_id + "')", 200 );
      return;
    }
    $( "#" + tgt_id ).css( "left" , (0-Gsdm_width) + "px" );
    $( "#" + tgt_id ).css( "display" , "block" );
    $( "#" + tgt_id ).velocity({ left : 0 } , 300 );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fsdm_close( tgt_id ) {
  try {
    $( "#" + tgt_id ).velocity({ left : 0-Gsdm_width } , 300 );
    Gsdm_isOpen = false;
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
