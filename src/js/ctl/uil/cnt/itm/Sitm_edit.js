/**
 * @file Sitm_edit.js
 */
/*** define ***/
var DITM_LOAD_EDTUIL = "DITM_LOAD_EDTUIL";

/*** initialize ***/
$(function(){
  try {
    Fcom_startLoad( DITM_LOAD_EDTUIL );
    Fcom_loadJs(
      [ "./src/js/ujarakbtn"     ,
        "./src/js/flowupform"    ,
        "./src/js/ujarakswh"     ,
        "./src/js/evt_itmedt_ini"
      ] ,
      function(){
        try {
          Fcnt_initHtml();
          Fcnt_setForm();
          Fcom_endLoad( DITM_LOAD_EDTUIL );
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
function Fcnt_initHtml() {
  try {
    $( "#i-cnt" ).append("<div class='c-itmfom' id='i-itmfom-err'></div>");
    $( "#i-cnt" ).append("<div class='c-itmfom' id='i-itmfom-ttl'></div>");
    $( "#i-cnt" ).append("<div class='c-itmfom' id='i-itmfom-tag'></div>");
    $( "#i-cnt" ).append("<div class='c-itmfom' id='i-itmfom-typ'></div>");
    $( "#i-cnt" ).append("<div class='c-itmfom' id='i-itmfom-cnt'></div>");
    $( "#i-cnt" ).append("<div class='c-itmfom' id='i-itmfom-dsc'></div>");
    $( "#i-cnt" ).append("<div class='c-itmfom' id='i-itmfom-snd'></div>");
    $( "#i-cnt" ).append("<div id='i-itmfom-dlg'></div>");
  } catch( e ) {
    alert( e.stack );
  }
}


function Fcnt_setForm() {
  try {
    $(".c-itmfom").css("margin-top"    , "10px");
    $(".c-itmfom").css("margin-bottom" , "20px");
    
    $("#i-itmfom-err").css( "display"     , "none" );
    $("#i-itmfom-err").css( "color"       , "red" );
    $("#i-itmfom-err").css( "font-weight" , "bold" );
    $("#i-itmfom-err").css( "position"    , "relative" );
    $("#i-itmfom-err").css( "left"        , "100px" );
    $("#i-itmfom-err").css( "width"       , $(window).width()-200 + "px" );

    
    Ffom_init(  "i-itmfom-ttl" , "Title&nbsp;:" , "text" );
    Ffom_setWidth( "i-itmfom-ttl" , $(window).width()-200 );
    $( "#i-itmfom-ttl" ).css( "position" , "relative" );
    $( "#i-itmfom-ttl" ).css( "left"     , "100px" );
    $( "#i-itmfom-ttl" ).css( "width"    , $(window).width()-200 + "px" );
    Ffom_start( "i-itmfom-ttl" );
    
    Ffom_init(  "i-itmfom-tag" , "Tag&nbsp;:" , "text" );
    Ffom_setWidth( "i-itmfom-tag" , $(window).width()-200 );
    $( "#i-itmfom-tag" ).css( "position" , "relative" );
    $( "#i-itmfom-tag" ).css( "left"     , "100px" );
    $( "#i-itmfom-tag" ).css( "width"    , $(window).width()-200 + "px" );
    Ffom_start( "i-itmfom-tag" );
    
    // type
    $("#i-itmfom-typ").append( "<div id='i-itmfom-typ-mrk'>Type&nbsp;:</div>" );
    $("#i-itmfom-typ-mrk").css( "font-family"  , "'Orbitron',sans-serif" );
    $("#i-itmfom-typ").css( "position"     , "relative" );
    $("#i-itmfom-typ").css( "width"    , $(window).width()-200 + "px" );
    $("#i-itmfom-typ-mrk").css( "float"        , "left" );
    $("#i-itmfom-typ-mrk").css( "margin-right" , "40px" );
    $("#i-itmfom-typ").append( "<div id='i-itmfom-typ-swh'></div>" );
    Fswh_init( "i-itmfom-typ-swh" , ["get-text","analyze-text"] );
    Fswh_setBaseColor( "i-itmfom-typ-swh" , "#C7E0F0" );
    Fswh_select( "i-itmfom-typ-swh" , 0 );
    Fswh_start( "i-itmfom-typ-swh" );
    $("#i-itmfom-typ").append( "<div id='i-itmfom-typ-nfl'></div>" );
    $("#i-itmfom-typ-nfl").css( "float"  , "none" );
    $("#i-itmfom-typ-nfl").css( "height" , "52px" );
    $("#i-itmfom-typ").css( "position"   , "relative" );
    $("#i-itmfom-typ").css( "left"       , "100px" );
    
    $("#i-itmfom-cnt").append("<div id='i-itmfom-cnt-mrk'>Contents&nbsp;:</div>");
    $("#i-itmfom-cnt-mrk").css( "font-family" , "'Orbitron',sans-serif" );
    $("#i-itmfom-cnt-mrk").css( "position"    , "relative" );
    $("#i-itmfom-cnt").append("<textarea id='i-itmfom-cnt-txt'></textarea>");
    $("#i-itmfom-cnt").css( "position" , "relative" );
    $("#i-itmfom-cnt").css( "left"     , "100px" );
    $("#i-itmfom-cnt").css( "width"    , $(window).width()-200 + "px" );
    $("#i-itmfom-cnt-txt").css( "width"     , $(window).width()-200+"px" );
    $("#i-itmfom-cnt-txt").css( "height"    , "300px" );
    $("#i-itmfom-cnt-txt").css( "font-size" , "1.2em" );
    
    $("#i-itmfom-dsc").append("<div id='i-itmfom-dsc-mrk'>Description&nbsp;:</div>");
    $("#i-itmfom-dsc-mrk").css( "font-family" , "'Orbitron',sans-serif" );
    $("#i-itmfom-dsc-mrk").css( "position"    , "relative" );
    $("#i-itmfom-dsc").append("<textarea id='i-itmfom-dsc-txt'></textarea>");
    $("#i-itmfom-dsc").css( "position" , "relative" );
    $("#i-itmfom-dsc").css( "left"     , "100px" );
    $("#i-itmfom-dsc").css( "width"    , $(window).width()-190 + "px" );
    $("#i-itmfom-dsc-txt").css( "width"     , $(window).width()-190+"px" );
    $("#i-itmfom-dsc-txt").css( "height"    , "150px" );
    $("#i-itmfom-dsc-txt").css( "font-size" , "1.2em" );
    
    Fujb_init( "i-itmfom-snd" , "update" );
    $( "#i-itmfom-snd" ).css( "width" , "150px" );
    Fujb_setRelaPosi( "i-itmfom-snd"  , "left" ,  $(window).width()-240 + "px" );
    Fujb_setClickEvent( "i-itmfom-snd" , Fitm_clickUpd );
    Fujb_setCss( "i-itmfom-snd" , "background" , "#C7E0F0" );
    Fujb_start( "i-itmfom-snd" );
    
  } catch( e ) {
    alert( e.stack );
  }
}

function Fitm_clickUpd() {
  try {
    Fcom_loadJs(
      ["./src/js/evt_itmedt_upd"] ,
      function() {
        try {
          Fitm_update();
        } catch(e) { alert(e.stack); }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fcnt_showNewErr( err ) {
  try {
    if( null != err ) {
      $("#i-itmfom-err").html(err);
      $("#i-itmfom-err").fadeIn("normal");
    } else {
      $("#i-itmfom-err").fadeOut();
    }
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
