/**
 * @file Sacd_arrow.js
 */
/*** define ***/
var DACD_EXTDTP_OPEN  = "DACD_EXTDTP_OPEN";
var DACD_EXTDTP_CLOSE = "DACD_EXTDTP_CLOSE";

/*** global ***/
var Gacd_tgtObjs = new Array();

/*** initialize ***/
$(function(){
  try {
    Fcom_loadJs(
      [ "./src/js/velocity" ] ,
      null
    );
  } catch( e ) {
    alert( e.stack );
  }
});

/*** class ***/
function Cacd_arrow( t ) {
  this.tgt    = t;
  this.name   = null;
  this.extend = false;
  this.evt    = {
    open       : null,
    first_open : null,
    close      : null
  }
  this.tmp    = null;
  this.first  = true;
}

/*** function ***/
function Facd_init(tgt, name) {
  try {
    Gacd_tgtObjs.push( new Cacd_arrow( tgt ) );
    for ( var idx in Gacd_tgtObjs ) {
      if( Gacd_tgtObjs[idx].tgt == tgt ) {
        Gacd_tgtObjs[idx].name = name;
      }
    }
    $( "#" + tgt ).css( "display" , "none" );
    $( "#" + tgt ).append( "<div class='c-acdarw'></div>" );
    $( "#" + tgt + " .c-acdarw" ).append( "<i class='fa fa-chevron-right'></i>" );
    $( "#" + tgt + " .c-acdarw" ).append( "<div class='c-acd-name'>"+name+"</div>" );
    $( "#" + tgt ).append( "<div class='c-acdcnt-bdr'></div>" );
    $( "#" + tgt + " .c-acdcnt-bdr" ).append( "<div class='c-acdcnt-cnt'></div>" );
    Facd_initStyle( tgt );
    Facd_setExtend( tgt );
  } catch ( e ) {
    alert( e.stack );
  }
}

function Facd_initStyle( tgt ) {
  try {
    $( "#" + tgt + " .c-acdarw" ).css("font-size" , "2.0em");
    $( "#" + tgt + " .c-acdarw" ).css("cursor"    , "pointer");
    $( "#" + tgt + " .c-acdcnt-bdr" ).css("border-top", "solid black 1px");
    
    $( "#" + tgt + " .fa-chevron-right" ).css("float", "left");
    Fcom_loadCss("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
    $( "#" + tgt + " .c-acd-name" ).css("font-family", "Orbitron,sans-serif");
    $( "#" + tgt + " .c-acd-name" ).css("position"   , "relative");
    $( "#" + tgt + " .c-acd-name" ).css("left"       , "10px");
    $( "#" + tgt + " .c-acd-name" ).css("top"        , "3px");
  } catch( e ) {
    alert( e.stack );
  }
}

function Facd_setExtend( tgt ) {
  try {
    $( "#" + tgt + " .c-acdarw" ).click(function(){
      try {
        for ( var idx in Gacd_tgtObjs ) {
          if( (Gacd_tgtObjs[idx].tgt == tgt) ) {
            if( true == Gacd_tgtObjs[idx].extend ) {
              // is extend
              Facd_extendFunc(Gacd_tgtObjs[idx], DACD_EXTDTP_OPEN);
            } else {
              // is not extend
              Facd_extendFunc(Gacd_tgtObjs[idx], DACD_EXTDTP_CLOSE);
            }
          }
        }
      } catch( e ) {
        alert( e.stack );
      }
    });
  } catch( e ) {
    alert( e.stack );
  }
}

function Facd_extendFunc(tgt_obj, type) {
  try {
    if( DACD_EXTDTP_OPEN == type ) {
      $( "#" + tgt_obj.tgt + " .fa-chevron-right" ).velocity({ rotateZ : "0deg" }, 400);
      if( null != tgt_obj.evt.close ) {
        tgt_obj.evt.close( tgt_obj );
      }
      $( "#" + tgt_obj.tgt + " .c-acdcnt-cnt" ).fadeOut();
      $( "#" + tgt_obj.tgt + " .c-acdcnt-bdr" )
        .velocity({
          height : "1px"
        },
        400,
        function() {
          try {
            $( "#" + tgt_obj.tgt + " .c-acdcnt-bdr" ).css("border", "0px");
            $( "#" + tgt_obj.tgt + " .c-acdcnt-bdr" )
              .css("border-top", "solid black 1px");
          } catch( e ) { alert(e.stack); }
        }
      );
      tgt_obj.extend = false;
    } else if( DACD_EXTDTP_CLOSE == type ) {
      $( "#" + tgt_obj.tgt + " .fa-chevron-right" ).velocity({ rotateZ : "90deg" }, 400);
      $( "#" + tgt_obj.tgt + " .c-acdcnt-bdr" ).css("border", "solid black 1px");
      $( "#" + tgt_obj.tgt + " .c-acdcnt-bdr" ).velocity({ height : "150px" }, 400);
      if( true == tgt_obj.first ) {
        if( null != tgt_obj.evt.first_open ) {
          tgt_obj.evt.first_open( tgt_obj );
        }
        tgt_obj.first = false;
      } else if( null != tgt_obj.evt.open ) {
        tgt_obj.evt.open( tgt_obj );
      }
      $( "#" + tgt_obj.tgt + " .c-acdcnt-cnt" ).fadeIn();
      tgt_obj.extend = true;
    } else {
      
    }
  } catch ( e ) {
    alert( e.stack );
  }
}

function Facd_start( tgt ) {
  try {
    $( "#" + tgt ).fadeIn();
  } catch( e ) {
    alert( e.stack );
  }
}

function Facd_setCss(tgt, key, val) {
  try {
    $( "#" + tgt ).css(key, val);
  } catch( e ) {
    alert( e.stack );
  }
}

function Facd_setOpenEvt(tgt, evt) {
  try {
    for ( var idx in Gacd_tgtObjs ) {
      if( Gacd_tgtObjs[idx].tgt == tgt ) {
        Gacd_tgtObjs[idx].evt.open = evt;
        break;
      }
    }
  } catch ( e ) {
    alert( e.stack );
  }
}

function Facd_setFirstOpenEvt(tgt, evt) {
  try {
    for ( var idx in Gacd_tgtObjs ) {
      if( Gacd_tgtObjs[idx].tgt == tgt ) {
        Gacd_tgtObjs[idx].evt.first_open = evt;
        break;
      }
    }
  } catch ( e ) {
    alert( e.stack );
  }
}

function Facd_appendConts(tgt, conts) {
  try {
    $( "#" + tgt + " .c-acdcnt-cnt" ).append( conts );
  } catch( e ) {
    alert( e.stack );
  }
}

function Facd_setConts(tgt, conts) {
  try {
    $( "#" + tgt_obj.tgt + " .c-acdcnt-cnt" ).html( conts );
  } catch( e ) {
    alert( e.stack );
  }
}


/* end of file */
