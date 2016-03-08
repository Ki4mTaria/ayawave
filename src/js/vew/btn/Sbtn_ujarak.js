/**
 * @file Sbtn_ujarak.js
 * @brief ujarak style button
 */

$(function() {
  try {
    Fcom_loadCss( "./src/css/ujarakbtn" );
  } catch( e ) {
    alert( e.stack );
  }
});

function Fujb_getHtml( tgt_id , conts ) {
  try {
    return "<button class='c-btn-ujarak' id='" + tgt_id + "-ujb'>" + conts + "</button>"
  } catch( e ) {
    alert( e.stack );
  }
}

function Fujb_init( tgt_id  , conts ) {
  try {
    $( "#" + tgt_id ).css("display","none");
    $( "#" + tgt_id ).html( Fujb_getHtml( tgt_id , conts ) );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fujb_getConts( tgt_id ) {
  try {
    return $("#" + tgt_id + "-ujb" ).html();
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fujb_start( tgt_id ) {
  try {
    $( "#" + tgt_id ).fadeIn();
  } catch( e ) {
    alert( e.stack );
  }
}

function Fujb_setClickEvent( tgt_id , ev_func , cb_prm ) {
  try {
    var cbp = cb_prm || null;
    $( "#" + tgt_id ).click({prm : cbp},function(event) {
      try {
        if( null != ev_func ) {
          //var id = $(this).attr("id");
          ev_func( event.data.prm );
        }
      } catch( e ) {
        alert( e.stack );
      }
    });
  } catch( e ) {
    alert( e.stack );
  }
}

function Fujb_setHoverEvent( tgt_id , in_func , out_func ) {
  try {
    $("#" + tgt_id ).hover(
      function(){
        try {
          if( null != in_func ) {
            in_func();
          }
        } catch( e ) { alert( e.stack ); }
      },
      function(){
        try {
          if( null != out_func ) {
            out_func();
          }
        } catch( e ) { alert( e.stack ); }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fujb_setRelaPosi( tgt_id , key ,val ) {
  try {
    $( "#" + tgt_id ).css( "position" , "relative" );
    $( "#" + tgt_id ).css( key , val );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fujb_setWidth ( tgt_id , wid ) {
  try {
    $("#" + tgt_id + "-ujb").css( "min-width" , wid + "px" );
    $("#" + tgt_id + "-ujb").css( "width"     , wid + "px" );
  } catch(e) {
    alert( e.stack );
  }
}

function Fujb_setHeight ( tgt_id , hei ) {
  try {
    $("#" + tgt_id + "-ujb").css( "height"      , hei + "px" );
    $("#" + tgt_id + "-ujb").css( "padding-top"    , "0px" );
    $("#" + tgt_id + "-ujb").css( "padding-bottom" , "0px" );
  } catch(e) {
    alert( e.stack );
  }
}

function Fujb_setCss( tgt_id , key , val ) {
  try {
    $( "#" + tgt_id + "-ujb" ).css( key , val );
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fujb_setSelect( tgt_id , flg ) {
  try {
    if( true == flg ) {
      $( "#" + tgt_id + "-ujb" ).addClass( "c-tab-ujarak-hover" );
    } else {
      $( "#" + tgt_id + "-ujb" ).removeClass( "c-tab-ujarak-hover" );
    }
  } catch ( e ) {
    alert( e.stack );
  }
}

/* end of file */
