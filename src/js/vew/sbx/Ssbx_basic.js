/**
 * @file Ssbx_basic.js
 */

/*** function ***/
function Fsbx_init( tgt_id , size , pos ) {
  try {
    $( "#" + tgt_id ).css( "display" , "none" );
    $( "#" + tgt_id ).css( "border"  , "solid 1px black" );
    /* size */
    $( "#" + tgt_id ).css( "height" , size[0] + "px" );
    $( "#" + tgt_id ).css( "width"  , size[1] + "px" );
    /* position */
    $( "#" + tgt_id ).css( "position" , "absolute" );
    $( "#" + tgt_id ).css( "top"      , pos[0] + "px" );
    $( "#" + tgt_id ).css( "left"     , pos[1] + "px" );
    /* shadow */
    $( "#" + tgt_id ).css( "box-shadow" , "10px 10px 10px rgba(0,0,0,0.4)" );
    $( "#" + tgt_id ).css( "-moz-box-shadow" , "10px 10px 10px rgba(0,0,0,0.4)" );
    $( "#" + tgt_id ).css( "-webkit-box-shadow" , "10px 10px 10px rgba(0,0,0,0.4)" );
    
    $( "#" + tgt_id ).css( "background" , "white" );
    $( "#" + tgt_id ).css( "z-index" , "100" );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fsbx_backGround( tgt_id , color ) {
  try {
    $( "#" + tgt_id ).css( "background-color" , color );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fsbx_start( tgt_id ) {
  try {
    $( "#" + tgt_id ).fadeIn();
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
