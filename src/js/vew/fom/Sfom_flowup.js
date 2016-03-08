/**
 * @file Sfom_flowup.js
 */
/*** define ***/
var DFOM_LOAD_FLOWUP = "DFOM_LOAD_FLOWUP";
var DFOM_INIT_FLOWUP = "DFOM_INIT_FLOWUP";

/*** initialize ***/
$(function(){
  try {
    Fcom_startLoad( DFOM_LOAD_FLOWUP );
    Fcom_loadJs(
      ["./src/js/flowuplabel"] ,
      function(){
        try {
          Fcom_loadCss( "./src/css/flowuplabel" );
          Fcom_endLoad( DFOM_LOAD_FLOWUP );
        }catch( e ) { alert( e.stack ); }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
});

/*** function ***/
function Ffom_init( tgt_id , conts , type ) {
  try {
    var set_str = "";
    set_str += "<div id='"+ tgt_id +"-fltop' class='FlowupLabels'>";
    set_str +=   "<div class='fl_wrap'>";
    set_str +=     "<label class='fl_label' >" + conts + "</label>";
    set_str +=     "<input class='fl_input' type='" + type + "' id='"+ tgt_id +"-fl' />";
    set_str +=   "</div>";
    set_str += "</div>";
    $( "#" + tgt_id ).html( set_str );
    $( '#' + tgt_id + "-fltop" ).FlowupLabels({
      feature_onInitLoad: true      ,
      class_focused:      'focused' ,
      class_populated:    'populated'
    });
  } catch( e ) {
    alert( e.stack );
  }
}


function Ffom_start( tgt_id ) {
  try {
    $( "#" + tgt_id ).fadeIn();
  } catch( e ) {
    alert( e.stack );
  }
}

function Ffom_isLoaded() {
  try {
    return Fcom_isLoaded( DFOM_LOAD_FLOWUP );
  } catch( e ) {
    alert( e.stack );
  }
}

function Ffom_getValue( tgt_id ) {
  try {
    return $( "#" + tgt_id +"-fl" ).val();
  } catch ( e ) {
    alert( e.stack );
  }
}

function Ffom_setValue( tgt_id, val ) {
  try {
    $( "#" + tgt_id + "-fl" ).focus();
    $( "#" + tgt_id + "-fl" ).val( val );
  } catch( e ) {
    alert( e.stack );
  }
}

function Ffom_setWidth( tgt_id , wid ) {
  try {
    $( "#" + tgt_id + "-fltop .fl_wrap" ).css( "width" , wid + "px" );
  } catch ( e ) {
    alert( e.stack );
  }
}

function Ffom_setFocus( tgt_id , flg ) {
  try {
    var inp_id = tgt_id +"-fl";
    if( flg ) {
      $("#"+inp_id).select();
    } else {
      // 
    }
  } catch( e ) {
    alert( e.stack );
  }
}

function Ffom_backColor( tgt_id , color ) {
  try {
    var inp_id = tgt_id +"-fl";
    $( "#" + inp_id ).css( "background" , color );
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
