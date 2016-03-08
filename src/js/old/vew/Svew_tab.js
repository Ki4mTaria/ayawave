/**
 * @file Svew_tab.js
 */
/*** define ***/
var Gtab_state    = null;
var Gtab_contsMap = new Array();
var Gtab_callback = new Array();

/*** initial ***/
$(function(){
  try {
    Fcom_loadHtml (
      "./load/html/tab" ,
      "i-cnt" ,
      Ftab_init
    );
  } catch( e ) {
    alert( e.stack );
  }
});

function Ftab_init( id ) {
  try {
    Fcom_loadCss( "./load/css/ujarak-tab" );
    Fcom_loadCss( "./load/css/tab" );
    
    if( ($( ".c-tab-ujarak" ).length) != ($( ".c-tab-conts" ).length) ) {
      throw new Error( "tab init error" );
    }
    
    var tab_id     = null;
    var left_px    = 0;
    var tab_loop   = 0;
    for( tab_loop = 0 ;
         tab_loop < $( ".c-tab-ujarak" ).length ;
         tab_loop++ ) {
      tab_id = $( ".c-tab-ujarak:eq("+ tab_loop + ")" ).attr("id");
      Gtab_contsMap[ tab_id ] = $( ".c-tab-conts:eq("+ tab_loop + ")" ).attr("id");
      Gtab_callback[ tab_id ] = null;
    }
    
    Gtab_state = $( ".c-tab-ujarak:eq(0)" ).attr("id");
    Ftab_setClick();
  } catch( e ) {
    alert( e.stack );
  }
}

function Ftab_setFixed( id ) {
  try {
    var tab_id     = null;
    var left_px    = 0;
    var tab_loop   = 0;
    for( tab_loop = 0 ;
         tab_loop < $( "#" + id + " > .c-tab-ujarak" ).length ;
         tab_loop++ ) {
      tab_id = $( "#" + id + " > " + ".c-tab-ujarak:eq("+ tab_loop + ")" ).attr("id");
      left_px = (150 * tab_loop) - (1 * tab_loop);
      $( "#" + tab_id ).css( "left" , left_px );
    }
  } catch( e ) {
    alert( e.stack );
  }
}

function Ftab_start() {
  try {
    Ftab_selTab( Gtab_state );
    Ftab_contsFunc( Gtab_state , Gtab_state );
  } catch( e ) {
    alert( e.stack );
  }
}

function Ftab_setClick() {
  try {
    $(".c-tab-ujarak").click(function(){
      try { Ftab_clickElem( $(this).attr("id") ); }
      catch(e){alert(e.stack);}
    });
  } catch( e ) {
    alert( e.stack );
  }
}

function Ftab_clickElem( id ) {
  try {
    // state check
    if( id == Gtab_state ) {
      return;
    }
    var sts_buff = Gtab_state;
    Gtab_state   = id;
    // tab menu
    Ftab_selTab( id );
    Ftab_contsFunc( id , sts_buff );
  } catch( e ) {
    alert( e.stack );
  }
}

function Ftab_contsFunc( id , sts_buff ) {
  try {
    var conts_id = Gtab_contsMap[id];
    if ( null != conts_id ) {
      $( "#"+ Gtab_contsMap[ sts_buff ] ).fadeOut( 'fast' ,
        function(){
          try {
            for( var cb_idx in Gtab_callback ) {
              if( ( id === cb_idx ) &&
                  ( null != Gtab_callback[cb_idx] ) ) {
                Gtab_callback[cb_idx]();
              }
            }
            $( "#"+ Gtab_contsMap[ Gtab_state ] ).fadeIn('fast',
              function(){
              });
          } catch( e ) {
            alert( e.stack );
          }
        }
      );
    }
  } catch( e ) {
    alert( e.stack );
  }
}


function Ftab_selTab( id ) {
  try {
    // reset select
    $( ".c-tab-ujarak" ).removeClass( "c-tab-ujarak_hover" );
    // set select
    for( var cont_id in Gtab_contsMap ) {
      if ( cont_id == id ) {
        $( "#" + cont_id ).addClass("c-tab-ujarak_hover");
      }
    }
  } catch( e ) {
    alert( e.stack );
  }
}

function Ftab_setEnable( tgt_id , flg ) {
  try {
    if( true === flg ) {
      $( "#" + tgt_id ).fadeIn( 'fast' );
    } else if ( false === flg ) {
      $( "#" + tgt_id ).fadeOut( 'fast' );
    } else {
      throw new Error( "tab enable error" );
    }
  } catch( e ) {
    alert( e.stack );
  }
}


function Ftab_setCallback( tgt_id , func ) {
  try {
    if ( null === func ) {
      return;
    }
    
    for( var set_id in Gtab_callback ) {
      if( set_id === tgt_id ) {
        Gtab_callback[ tgt_id ] = func;
      }
    }
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
