/**
 * @brief header loader
 */
/*** global ***/
var Ghdr_target = null;
var Ghdr_height = null;

/*** function ***/
/**
 * @brief load html , basic setting
 * @param tgt_id : target html tag id
 */
function Fhdr_init( tgt_id , cb_func ) {
  try {
    Ghdr_target = tgt_id;
    Fcom_loadHtml(
      "./src/html/header" ,
      tgt_id ,
      function(){
        try {
          Fcom_loadCss( "./src/css/header" );
          Fhdr_setHeight( Ghdr_target , 70 );
          if( null != cb_func ) {
            cb_func();
          }
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

/**
 * @brief set height
 * @param hei : value of height (px)
 */
function Fhdr_setHeight( tgt_id , hei ) {
  try {
    $("#"+tgt_id).css( "height" , hei + "px" );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fhdr_setTitle( ttl ) {
  try {
    if( null == Ghdr_target ) {
      throw new Error("can not find target");
    }
    $( "#" + Ghdr_target + " " + "#i-hdr-conts-left" ).text( ttl );
    $( "#" + Ghdr_target + " " + "#i-hdr-conts-left" ).
      css( "display" , "block" );
    $( "#" + Ghdr_target + " " + "#i-hdr-conts-left" ).
      css( "float" , "left" );
    $( "#" + Ghdr_target + " " + "#i-hdr-conts-left" ).
      css( "font-family" , "'Orbitron', sans-serif" );
    $( "#" + Ghdr_target + " " + "#i-hdr-conts-left" ).
      css( "font-size" , "40px" );
    $( "#" + Ghdr_target + " " + "#i-hdr-conts-left" ).
      css( "font-weight" , "700" );
    $( "#" + Ghdr_target + " " + "#i-hdr-conts-left" ).
      css( "letter-spacing" , "0.2em" );
    $( "#" + Ghdr_target + " " + "#i-hdr-conts-left" ).
      css( "margin-top" , "10px" );
    
    $('head').append("<title>" + ttl + "</title>");
  } catch( e ) {
    alert( e.stack );
  }
}

function Fhdr_setLeft( tgt_id , conts ) {
  try {
    $( "#" + tgt_id + " " + "#i-hdr-conts-left" ).text( conts );
    $( "#" + tgt_id + " " + "#i-hdr-conts-left" ).
      css( "font-family" , "'Orbitron', sans-serif" );
    $( "#" + tgt_id + " " + "#i-hdr-conts-left" ).
      css( "font-size" , "15px" );
    $( "#" + tgt_id + " " + "#i-hdr-conts-left" ).
      css( "margin-top" , "8px" );
    $( "#" + tgt_id + " " + "#i-hdr-conts-left" ).
      css( "float" , "left" );
    
  } catch( e ) {
    alert( e.stack );
  }
}

//function Fhdr_setHeight( tgt_id , hei ) {
//  try {
//    $("#" + tgt_id + " #i-hdr-conts" ).css( "height" , hei + "px" );
//    $("#" + tgt_id + " #i-hdr-conts" ).css( "margin-top" , hei/10 + "px" );
//  } catch( e ) {
//    alert( e.stack );
//  }
//}

function Fhdr_setTitleReload( flg ) {
  try {
    if( flg ) {
      $("#i-hdr-conts-left").css( "cursor" , "pointer" );
      $("#i-hdr-conts-left").click( function(){
        location.reload(true);
      });
    } else {
      
    }
  } catch( e ) {
    alert( e.stack );
  }
}

function Fhdr_setCenter( conts ) {
  try {
    if( null == Ghdr_target ) {
      throw new Error("can not find target");
    }
    $( "#" + Ghdr_target + " " + "#i-hdr-conts-center" ).text( conts );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fhdr_setRight( conts ) {
  try {
    if( null == Ghdr_target ) {
      throw new Error("can not find target");
    }
    $( "#" + Ghdr_target + " " + "#i-hdr-conts-right" ).html( conts );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fhdr_setRightCss( tgt_id , key , val ) {
  try {
    $( "#" + tgt_id + " " + "#i-hdr-conts-right" ).css( key , val );
  } catch( e ) {
    alert( e.stack );
  }
}



function Fhdr_getRightTarget() {
  try {
    return Ghdr_target + " " + "#i-hdr-conts-right";
  } catch( e ) {
    alert( e.stack );
  }
}

function Fhdr_getCenterTarget() {
  try {
    return  Ghdr_target + " " + "#i-hdr-conts-center";
  } catch( e ) {
    alert( e.stack );
  }
}

//function Fhdr_setBorder( flg ) {
//  try {
//    if ( true === flg ) {
//      $( "#i-hdr" ).css( "border-bottom" , "1px solid black" );
//    } else {
//      $( "#i-hdr" ).css( "border-bottom" , "0px" );
//    }
//  } catch( e ) {
//    alert( e.stack );
//  }
//}

function Fhdr_start() {
  try {
    if( null == Ghdr_target ) {
      throw new Error("can not find target");
    }
    $( "#" + Ghdr_target + " " + "#i-hdr-conts" ).fadeIn('fast');
  } catch( e ) {
    alert( e.stack );
  }
}

function Fhdr_setCss( key , val ) {
  try {
    $( "#" + Ghdr_target ).css( key , val );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fhdr_setStaticFlame() {
  try {
    $("head").append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1,user-scalable=no\">");
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
