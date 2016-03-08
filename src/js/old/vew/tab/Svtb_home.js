/**
 * @file Svew_home.js
 */
/*** global ***/
var Gtab_switch = null;

//var Gtab_contsMap = {
//  i-home-arrow-new : "i-new-conts" ,
//  i-home-arrow-pop : "i-pop-conts" ,
//  i-home-arrow-req : "i-req-conts"
//};

/*** initialize ***/
$(function(){
  try {
    Fcom_loadJs(
      [ "./load/js/velocity" ] ,
      null
    );
  } catch( e ) {
    alert( e.stack );
  }
});

/*** function ***/
function Ftab_loadHomeBase() {
  try {
    Fcom_loadHtml (
      "./load/html/tab_home" ,
      "i-home-conts" ,
      function(){
        try {
          Fcom_loadCss( "./load/css/tab_home" );
          Ftab_initHome();
          $( "#i-home" ).fadeIn( 'fast' );
        } catch(e){alert(e.stack);}
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}


function Ftab_initHome() {
  try {
    // create switch list
    Gtab_switch = new Array( $( ".c-home-elm" ).length );
    var i = 0;
    for( i=0 ; i < Gtab_switch.length ; i++ ) {
      Gtab_switch[i] = false;
    }
    
    for( i=0; i < $( ".c-home-elm" ).length ;i++ ) {
      $( ".c-home-elm:eq("+i+")" ).addClass( "c-home-elm-cnt-"+i );
    }
    Ftab_setSwitchEvent();
  } catch( e ) {
    alert( e.stack );
  }
}

function Ftab_setSwitchEvent() {
  try {
    $( ".c-home-elm" ).click(function(){
      try {
        //var check = $(this).attr;
        //var dbg = "";
        //for( var idx  in check ) {
        //  dbg += idx + " : "+check[idx] + "\n";
        //}
        //alert( dbg );
        
        var class_nm = $( this ).attr( "class" );
        var cl_nms = class_nm.split(' ');
        var tgt_cl = null;
        var chk    = null;
        var idx    = null;
        for( var idx in cl_nms ) {
          chk = cl_nms[idx].indexOf( 'c-home-elm-cnt-' );
          if ( 0 == chk ) {
            tgt_cl = cl_nms[idx];
            idx    = cl_nms[idx].substr( 'c-home-elm-cnt-'.length );
            break;
          } else {
            continue;
          }
        }
        
        if ( false == Gtab_switch[idx] ) {
          $( "." + tgt_cl + " .c-home-arrow" ).velocity({ rotateZ : "90deg" , top : 10 } , 250 );
          $( "." + tgt_cl + " .c-elm-conts" ).velocity({ height : 250 },250);
//          $( "#" + Gtab_contsMap[id] ).velocity({ height : 250 } , 250 );
          Gtab_switch[idx] = true;
        } else {
          $( "." + tgt_cl + " .c-home-arrow" ).velocity({ rotateZ : "0deg" , top : 0 } , 250 );
          $( "." + tgt_cl + " .c-elm-conts" ).velocity({ height : 0 },250);
          Gtab_switch[idx] = false;
        }
      } catch( e ) {
        alert( e.stack );
      }
    });
  } catch( e ) {
    alert( e.stack );
  }
}
/* end of file */
