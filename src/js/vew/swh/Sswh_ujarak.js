/**
 * @file Sswh_ujarak.js
 */
/*** global ***/
var Gswh_contsList = new Array();

/*** initialize ***/
$(function(){
  try {
    Fcom_loadJs(
      [ "./src/js/ujarakbtn" ,
        "./src/js/velocity" ] ,
      function(){
        try {
        }catch( e ) { alert( e.stack ); }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
});

function Cswh_conts( tid , ct ) {
  this.tgt_id  = tid;
  this.swh_ids = new Array();
  this.conts   = ct;
  this.sel_idx = null;
  this.color   = null;
}

/*** function ***/
function Fswh_init( tgt_id , conts_lst ) {
  try {
    if( null == conts_lst ) {
      return;
    }
    var cnts = new Cswh_conts( tgt_id , conts_lst );
    
    $( "#" + tgt_id ).css( "display" , "none" );
    var swh_id = null;
    var loop = 0;
    for( loop=0 ; loop < conts_lst.length ; loop++ ) {
      swh_id = tgt_id +"-swh"+ loop;
      $( "#" + tgt_id ).append( "<div id='"+ swh_id +"'></div>" );
      Fujb_init( swh_id , conts_lst[loop] );
      Fujb_setRelaPosi( swh_id , "left" , 0-(loop) + "px" );
      Fujb_start( swh_id );

      $( "#" + swh_id ).css( "float" , "left" );
      Fujb_setClickEvent( swh_id , 
        function(id) {
          try{ Fswh_switchSel( id ); }catch(e){ alert(e.stack); }
        },
        swh_id
      );
      cnts.swh_ids.push( swh_id );
      Gswh_contsList.push( cnts );
    }
  } catch( e ) {
    alert( e.stack );
  }
}

function Fswh_setBaseColor( tgt_id , color ) {
  try {
    var loop   = 0;
    var lp_swb = 0;
    for( loop=0 ; loop < Gswh_contsList.length ; loop++ ) {
      if( Gswh_contsList[loop].tgt_id == tgt_id ) {
        for( lp_swb=0 ; lp_swb < Gswh_contsList[loop].swh_ids.length ; lp_swb++ ) {
          //Fujb_setCss( Gswh_contsList[loop].swh_ids[lp_swb] , "background" , color );
          Gswh_contsList[loop].color = color;
          break;
        }
      }
    }
  } catch( e ) {
    alert( e.stack );
  }
}

function Fswh_select( tgt_id , idx ) {
  try {
    var loop   = 0;
    var lp_swb = 0;
    for( loop=0 ; loop < Gswh_contsList.length ; loop++ ) {
      if( Gswh_contsList[loop].tgt_id == tgt_id ) {
          var swh_id = Gswh_contsList[loop].swh_ids[idx];
          Fswh_switchSel( swh_id );
 //       Fujb_setCss( Gswh_contsList[loop].swh_ids[idx] ,
 //                    "background" ,
 //                    Gswh_contsList[loop].color );
 //       Gswh_contsList[loop].sel_idx = idx;
        break;
      }
    }
  } catch( e ) {
    alert( e.stack );
  }
}

function Fswh_getSelIdx( tgt_id ) {
  try {
    var loop   = 0;
    var lp_swb = 0;
    for( loop=0 ; loop < Gswh_contsList.length ; loop++ ) {
      if( Gswh_contsList[loop].tgt_id == tgt_id ) {
        return Gswh_contsList[loop].sel_idx;
      }
    }
    return null;
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fswh_getSelConts( tgt_id ) {
  try {
    var loop   = 0;
    var lp_swb = 0;
    for( loop=0 ; loop < Gswh_contsList.length ; loop++ ) {
      if( Gswh_contsList[loop].tgt_id == tgt_id ) {
        var idx = Gswh_contsList[loop].sel_idx;
        return Fujb_getConts( Gswh_contsList[loop].swh_ids[idx] );
      }
    }
    return null;
  } catch ( e ) {
    alert( e.stack );
  }
}


function Fswh_start( tgt_id ) {
  try {
    $( "#" + tgt_id ).fadeIn( "normal" );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fswh_switchSel( swh_id ) {
  try {
    var lp_tgt = 0;
    var lp_swh = 0;
    var brk    = false;
    for( lp_tgt=0 ; lp_tgt < Gswh_contsList.length ; lp_tgt++ ) {
      for( lp_swh=0 ; lp_swh < Gswh_contsList[lp_tgt].swh_ids.length ; lp_swh++ ) {
        if( Gswh_contsList[lp_tgt].swh_ids[lp_swh] == swh_id ) {
          Gswh_contsList[lp_tgt].sel_idx = lp_swh;
          brk = true;
          break;
        }
      }
      if( true == brk ) {
        break;
      }
    }
    for ( lp_swh=0 ; lp_swh < Gswh_contsList[lp_tgt].swh_ids.length ; lp_swh++ ) {
      if( Gswh_contsList[lp_tgt].swh_ids[lp_swh] == swh_id ) {
        Fujb_setCss( Gswh_contsList[lp_tgt].swh_ids[lp_swh] ,
                     "background" ,
                     Gswh_contsList[lp_tgt].color  );
        //Fswh_select( tgt_id , lp_swh );
      } else {
        Fujb_setCss( Gswh_contsList[lp_tgt].swh_ids[lp_swh] ,
                     "background" ,
                     ""  );
      }
    }
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
