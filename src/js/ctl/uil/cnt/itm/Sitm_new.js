/**
 * @file Sitm_new.js
 */
$(function(){
  try {
    Fcom_loadJs(
      [ "./src/js/ujarakbtn"  ,
        "./src/js/flowupform" ,
        "./src/js/ujarakswh"
      ] ,
      function(){
        try {
          Fcnt_initNewHtml();
          Fcnt_setNewForm();
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
});

function Fcnt_initNewHtml() {
  try {
    $( "#i-cnt" ).append("<div class='c-newfom' id='i-newfom-err'></div>");
    $( "#i-cnt" ).append("<div class='c-newfom' id='i-newfom-ttl'></div>");
    $( "#i-cnt" ).append("<div class='c-newfom' id='i-newfom-tag'></div>");
    $( "#i-cnt" ).append("<div class='c-newfom' id='i-newfom-typ'></div>");
    $( "#i-cnt" ).append("<div class='c-newfom' id='i-newfom-cnt'></div>");
    $( "#i-cnt" ).append("<div class='c-newfom' id='i-newfom-dsc'></div>");
    $( "#i-cnt" ).append("<div class='c-newfom' id='i-newfom-snd'></div>");
    $( "#i-cnt" ).append("<div id='i-newfom-dlg'></div>");
  } catch( e ) {
    alert( e.stack );
  }
}


function Fcnt_setNewForm() {
  try {
    $(".c-newfom").css("margin-top" , "10px");
    $(".c-newfom").css("margin-bottom" , "20px");
    
    $("#i-newfom-err").css( "display" , "none" );
    $("#i-newfom-err").css( "color"   , "red" );
    $("#i-newfom-err").css( "font-weight" , "bold" );
    $("#i-newfom-err").css( "position" , "relative" );
    $("#i-newfom-err").css( "left"     , "100px" );
    $("#i-newfom-err").css( "width"    , $(window).width()-200 + "px" );

    
    Ffom_init(  "i-newfom-ttl" , "Title&nbsp;:" , "text" );
    Ffom_setWidth( "i-newfom-ttl" , $(window).width()-200 );
    $( "#i-newfom-ttl" ).css( "position" , "relative" );
    $( "#i-newfom-ttl" ).css( "left"     , "100px" );
    $( "#i-newfom-ttl" ).css( "width"    , $(window).width()-200 + "px" );
    Ffom_start( "i-newfom-ttl" );
    
    Ffom_init(  "i-newfom-tag" , "Tag&nbsp;:" , "text" );
    Ffom_setWidth( "i-newfom-tag" , $(window).width()-200 );
    $( "#i-newfom-tag" ).css( "position" , "relative" );
    $( "#i-newfom-tag" ).css( "left"     , "100px" );
    $( "#i-newfom-tag" ).css( "width"    , $(window).width()-200 + "px" );
    Ffom_start( "i-newfom-tag" );
    
    // type
    $("#i-newfom-typ").append( "<div id='i-newfom-typ-mrk'>Type&nbsp;:</div>" );
    $("#i-newfom-typ-mrk").css( "font-family"  , "'Orbitron',sans-serif" );
    $("#i-newfom-typ").css( "position"     , "relative" );
    $("#i-newfom-typ").css( "width"    , $(window).width()-200 + "px" );
    $("#i-newfom-typ-mrk").css( "float"        , "left" );
    $("#i-newfom-typ-mrk").css( "margin-right" , "40px" );
    $("#i-newfom-typ").append( "<div id='i-newfom-typ-swh'></div>" );
    Fswh_init( "i-newfom-typ-swh" , ["get-text","analyze-text"] );
    Fswh_setBaseColor( "i-newfom-typ-swh" , "#C7E0F0" );
    Fswh_select( "i-newfom-typ-swh" , 0 );
    Fswh_start( "i-newfom-typ-swh" );
    $("#i-newfom-typ").append( "<div id='i-newfom-typ-nfl'></div>" );
    $("#i-newfom-typ-nfl").css( "float"  , "none" );
    $("#i-newfom-typ-nfl").css( "height" , "52px" );
    $("#i-newfom-typ").css( "position"  , "relative" );
    $("#i-newfom-typ").css( "left"  , "100px" );
    
    $("#i-newfom-cnt").append("<div id='i-newfom-cnt-mrk'>Contents&nbsp;:</div>");
    $("#i-newfom-cnt-mrk").css( "font-family" , "'Orbitron',sans-serif" );
    $("#i-newfom-cnt-mrk").css( "position" , "relative" );
    $("#i-newfom-cnt").append("<textarea id='i-newfom-cnt-txt'></textarea>");
    $("#i-newfom-cnt").css( "position" , "relative" );
    $("#i-newfom-cnt").css( "left"     , "100px" );
    $("#i-newfom-cnt").css( "width"    , $(window).width()-200 + "px" );
    $("#i-newfom-cnt-txt").css( "width"     , $(window).width()-200+"px" );
    $("#i-newfom-cnt-txt").css( "height"    , "300px" );
    $("#i-newfom-cnt-txt").css( "font-size" , "1.2em" );
    
    $("#i-newfom-dsc").append("<div id='i-newfom-dsc-mrk'>Description&nbsp;:</div>");
    $("#i-newfom-dsc-mrk").css( "font-family" , "'Orbitron',sans-serif" );
    $("#i-newfom-dsc-mrk").css( "position"    , "relative" );
    $("#i-newfom-dsc").append("<textarea id='i-newfom-dsc-txt'></textarea>");
    $("#i-newfom-dsc").css( "position" , "relative" );
    $("#i-newfom-dsc").css( "left"     , "100px" );
    $("#i-newfom-dsc").css( "width"    , $(window).width()-190 + "px" );
    $("#i-newfom-dsc-txt").css( "width"     , $(window).width()-190+"px" );
    $("#i-newfom-dsc-txt").css( "height"    , "150px" );
    $("#i-newfom-dsc-txt").css( "font-size" , "1.2em" );
    
    Fujb_init( "i-newfom-snd" , "add" );
    $( "#i-newfom-snd" ).css( "width" , "150px" );
    Fujb_setRelaPosi( "i-newfom-snd" , "left" ,  $(window).width()-240 + "px" );
    Fujb_setClickEvent( "i-newfom-snd" , Fitm_clickAdd );
    Fujb_setCss( "i-newfom-snd" , "background" , "#C7E0F0" );
    Fujb_start( "i-newfom-snd" );
    
  } catch( e ) {
    alert( e.stack );
  }
}

function Fitm_clickAdd() {
  try {
    Fcom_loadJs(
      ["./src/js/evt_itmnew_add"] ,
      function() {
        try {
          if ( true == Fnew_chkConts() ) {
            Fnew_addItem();
          }
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
      $("#i-newfom-err").html(err);
      $("#i-newfom-err").fadeIn("normal");
    } else {
      $("#i-newfom-err").fadeOut();
    }
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
