/**
 * @file Sitm_title.js
 */
/*** define ***/
var DITM_TTL_INIT = "DITM_TTL_INIT";
/*** global ***/
var Gitm_ttls = null;

/*** initialize ***/
$(function() {
  try {
    Fcom_startLoad( DITM_TTL_INIT );
    Fcom_loadJs(
      [ "./src/js/acdarrow",
        "./src/js/ujarakbtn" ] ,
      function() {
        try { Fcom_endLoad( DITM_TTL_INIT ); }
        catch(e) {alert(e.stack);}
      }
    );
  } catch ( e ) {
    alert( e.stack );
  }
});


/*** function ***/
function Fitm_initTtl() {
  try {
    Fcom_fireLoadev(
      [DITM_TTL_INIT],
      function(){
        try {
          Fitm_itmTtls( function(ttl) {
            try { Fitm_setAcrd(ttl); }
            catch( e ){ alert( e.stack ); }
          });
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fitm_itmTtls( cb_func ) {
  try {
    var data = {
      type : "title"
    };
    Fjsn_sendPost(
      "./func/item/get" ,
      data ,
      function(ret) {
        try {
          if ( null == ret.ret_msg ) {
            return;
          }
          if( null != cb_func ) {
            cb_func( ret );
          }
        } catch ( e ) {
          alert( e.stack );
        }
      }
    );

  } catch( e ) {
    alert( e.stack );
  }
}

function Fitm_setAcrd(ttl) {
  try {
    if( null == ttl ) {
      return;
    }
    for ( var idx in ttl.ret_msg ) {
      $("#i-itm-ttl").append( "<div id='i-ttl-acd" + idx + "'></div>" );
      Facd_init("i-ttl-acd" + idx, ttl.ret_msg[idx] );
      Facd_setFirstOpenEvt(
        "i-ttl-acd" + idx,
        function( tgt_obj ) {
          try { Fitm_showTtlItm( tgt_obj ); }
          catch (e) { alert( e.stack ); }
        }
      );
      Facd_setCss("i-ttl-acd" + idx, "width", ($(window).width()/2)-100+"px");
      Facd_setCss("i-ttl-acd" + idx, "position", "relative");
      Facd_setCss("i-ttl-acd" + idx, "left", "55px");
      Facd_start("i-ttl-acd" + idx);
    }
  } catch( e ) {
    alert( e.stack );
  }
}

function Fitm_showTtlItm( tgt_obj ) {
  try {
    var data = {
      key   : tgt_obj.name,
      title : true
    };
    Fjsn_sendPost(
      "./func/item/search" ,
      data ,
      function(ret, tgt_obj) {
        try {
          if( (false == ret.ret) ||
              (null == ret.ret_msg) ) {
            return;
          }
          var loop    = 0;
          var rep_tgt = null;
          for(loop=0; loop < ret.ret_msg.title.length ;loop++) {
            rep_tgt = tgt_obj.name.replace( /\//g , "-" );
            Facd_appendConts( tgt_obj.tgt , "<div id='"+ rep_tgt + loop +"'></div>");
            Fujb_init( rep_tgt + loop , tgt_obj.name );
            Fujb_setHeight( rep_tgt + loop , 25 );
            Fujb_setCss( rep_tgt + loop , "background" , "rgb(199, 224, 240)" );
            Fujb_setCss( rep_tgt + loop , "float" , "left" );
            Fujb_setCss( rep_tgt + loop , "margin" , "10px 0px 0px 15px" );
            Fujb_setClickEvent(
              rep_tgt + loop ,
              function(idx){
                try { Fitm_clickTtlElem( ret.ret_msg.id[idx-1] ); }
                catch( e ){ alert(e.stack); }
              },
              loop+1
            );
            Fujb_start( rep_tgt + loop );
          }
        } catch ( e ) {
          alert( e.stack );
        }
      },
      tgt_obj
    );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fitm_clickTtlElem( id ) {
  try {
   window.open( './item?func=edit&id=' + id );
  } catch( e ) {
    alert( e.stack );
  }
}


/* end of file */
