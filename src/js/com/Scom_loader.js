/**
 * @brief front loder
 */

/*** Global ***/
var Gcom_loadJscnt  = new Array( 5 );
var Gcom_loadList   = new Array();


/*** initial ***/
$(function() {
  var loop = 0;
  for( loop=0 ; loop < Gcom_loadJscnt.length ; loop++ ) {
    Gcom_loadJscnt[loop] = 0;
  }
});

/*** function ***/
/**
 * @briad parallel javascript loader
 * 
 * @param[in] paths : target javascript file paths
 * @param[in] func : function call after loaded
 */
function Fcom_loadJs( paths , func ) {
  try {
    /* param check */
    if( (null == paths) || (paths.length == 0) ) {
      return true;
    }
    if( 0 == Gcom_loadJscnt[0] ) {
      Gcom_loadJscnt[0] = paths.length;
      for( var p_idx in paths ) {
        $.getScript( paths[p_idx] )
         .done( function() {
           try { Gcom_loadJscnt[0]--; }
           catch( e ) {alert( e.stack );}
         });
      }
      Fcom_waitJs( 0 , func );
    } else if( 0 == Gcom_loadJscnt[1] ) {
      Gcom_loadJscnt[1] = paths.length;
      for( var p_idx in paths ) {
        $.getScript( paths[p_idx] )
         .done( function() {
           try { Gcom_loadJscnt[1]--; }
           catch( e ) {alert( e.stack );}
         });
      }
      Fcom_waitJs( 1 , func );
    }else if( 0 == Gcom_loadJscnt[2] ) {
      Gcom_loadJscnt[2] = paths.length;
      for( var p_idx in paths ) {
        $.getScript( paths[p_idx] )
         .done( function() {
           try { Gcom_loadJscnt[2]--; }
           catch( e ) {alert( e.stack );}
         });
      }
      Fcom_waitJs( 2 , func );
    }else if( 0 == Gcom_loadJscnt[3] ) {
      Gcom_loadJscnt[3] = paths.length;
      for( var p_idx in paths ) {
        $.getScript( paths[p_idx] )
         .done( function() {
           try { Gcom_loadJscnt[3]--; }
           catch( e ) {alert( e.stack );}
         });
      }
      Fcom_waitJs( 3 , func );
    }else if( 0 == Gcom_loadJscnt[4] ) {
      Gcom_loadJscnt[4] = paths.length;
      for( var p_idx in paths ) {
        $.getScript( paths[p_idx] )
         .done( function() {
           try { Gcom_loadJscnt[4]--; }
           catch( e ) {alert( e.stack );}
         });
      }
      Fcom_waitJs( 4 , func );
    }else {
      throw new Error("burst js loading stack.");
    }
  } catch( e ) {
    //alert( e.stack );
    throw new Error( e.stack );
  }
}

function Fcom_waitJs( idx , func ) {
  try {
    if( 0 == Gcom_loadJscnt[idx] ) {
      if( null != func ) {
        func();
        return;
      }
    }
    setTimeout( "Fcom_waitJs("+idx+","+func+")" , 200 );
  } catch( e ) {
    alert( e.stack );
  }
}

/**
 * @brief load css
 * @param path to target css
 */
function Fcom_loadCss( path ) {
  try {
    $("head").append("<link>");
    css = $("head").children(":last");
    css.attr({
      rel:  "stylesheet",
      type: "text/css",
      href: path
    });
  } catch( e ) {
    throw new Error( e.stack );
  }
}
/**
 * @brief load html
 * @param hpath : path to html file
 * @param h_id : insert the destination html tag id
 * @param func : function after load
 */
function Fcom_loadHtml( h_path , h_id , func ) {
  try {
    $.ajax({
      url         : h_path ,
      type        : 'GET'  ,
      cache       : false  ,
      dataType    : 'html' ,
      async       : false
    })
    .done(function( jqXHR, textStatus, errorThrown ) {
      $( "#" + h_id ).html( jqXHR );
      if( null != func ) {
        func( jqXHR );
      }
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
      throw new Error();
    })
    .always(function( data, textStatus, errorThrown ) {});
  } catch( e ) {
    throw new Error( e.stack );
  }
}

/**
 * @brief
 * @param name : load name
 */
function Fcom_startLoad( name ) {
  try {
    if( true == (name in Gcom_loadList) ) {
      throw new Error( name + " is already loaded" );
    }
    Gcom_loadList[name] = false;
  } catch( e ) {
    throw new Error( e.stack );
  }
}
/**
 * @brief
 * @param name : load name
 */
function Fcom_endLoad( name ) {
  try {
    if( false == (name in Gcom_loadList) ) {
      throw new Error( name + " does not load" );
    }
    Gcom_loadList[name] = true;
  } catch( e ) {
    throw new Error( e.stack );
  }
}
/**
 * @brief wait load finished and fire callback function
 * @param target : target load name
 * @param func : callback function
 */
function Fcom_fireLoadev( target , func ) {
  try {
    var chk_flg = false;
    for ( var load in Gcom_loadList ) {
      for ( var idx in target ) {
        if( idx == load ) {
          if( false == Gcom_loadList[load] ) {
            chk_flg = true;
          }
        }
      }
    }
    if( true == chk_flg ) {
      setTimeout( Fcom_fireLoadev( func ) , 200 );
      return;
    }
    if( null != func ) {
      func();
    }
  } catch( e ) {
    throw new Error( e.stack );
  }
}
/* end of file */
