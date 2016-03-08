/**
 * @file Sdrp_ujarak.js
 */
/*** global ***/
var Gdrp_contsList = new Array();
var Gdrp_isDropping = false;
var Gdrp_click      = false;


/*** class ***/
function Cdrp_conts( tid , ct ) {
  this.tgt_id  = tid;
  this.drp_ids = new Array();
  this.conts   = ct;
  this.open    = false;
}

/*** initialize ***/
$(function(){
  try {
    Fcom_loadJs(
      ["./src/js/ujarakbtn"] ,
      function(){
        try {
          Fcom_loadCss("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
          Fcom_loadCss( "./src/css/ujarakdrp" );
        }catch( e ) { alert( e.stack ); }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
});

/*** function ***/
function Fdrp_init( tgt_id , conts_lst ) {
  try {
    if( null == conts_lst ) {
      return;
    }
    
    var cnts = new Cdrp_conts( tgt_id , conts_lst );
    Gdrp_contsList.push( cnts );
    
    $( "#" + tgt_id ).css( "display" , "none" );
    var drp_id = null;
    var loop = 0;
    for( loop=0 ; loop < conts_lst.length ; loop++ ) {
      drp_id = tgt_id +"-drp"+ loop;
      $( "#" + tgt_id ).append( "<div id='"+ drp_id +"'></div>" );
      Fujb_init( drp_id , conts_lst[loop] );
      Fujb_setRelaPosi( drp_id , "top" , (0-(loop+1)) + "px" );
      Fujb_start( drp_id );
      if( 0 == loop ) {
        $( "#" + drp_id ).css( "float" , "left" );
        Fujb_setClickEvent( drp_id , 
          function() { 
            Fdrp_switchView( drp_id );
          }
        );
        $( "#" + tgt_id ).append( "<div class='c-drpdwn-ico'><i id='"+ drp_id +"ico' class='fa fa-caret-down'></i></div>" );
        Fujb_setHoverEvent( drp_id ,
          function(){$( ".c-drpdwn-ico" ).css("color","white");},
          function(){$( ".c-drpdwn-ico" ).css("color","black");}
        );
        $( "#" + tgt_id ).append( "<div style='float:none;height:0px;'></div>" );
      }
      cnts.drp_ids.push( drp_id );
    }
    $("body").click(function(){
      if( (true != Gdrp_click) &&
          (true == Gdrp_isDropping) ) {
        Fdrp_resetView();
        Gdrp_click = false;
      } else if ( true == Gdrp_click ) {
        Gdrp_click = false;
      }
    });
  } catch( e ) {
    alert( e.stack );
  }
}

function Fdrp_start( tgt_id ) {
  try {
    var loop      = 0;
    var conts_lst = null;
    for(loop=0 ; loop < Gdrp_contsList.length ; loop++ ) {
      if( tgt_id == Gdrp_contsList[loop].tgt_id ) {
        conts_lst = Gdrp_contsList[loop].conts;
      }
    }
    if( null == conts_lst ) {
      alert("conts_lst is null");
      return;
    }

    var drp_id = null;
    for( loop=1 ; loop < conts_lst.length ; loop++ ) {
      drp_id = tgt_id +"-drp"+ loop;
      $( "#" + drp_id ).css( "display" , "none" );
    }
    $( "#" + tgt_id ).fadeIn( "normal" );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fdrp_switchView( drp_id ) {
  try {
    Gdrp_click = true;
    var drp_lst  = null;
    var loop_cnt = 0;
    var loop_drp = 0;
    for(loop_cnt=0; loop_cnt < Gdrp_contsList.length ;loop_cnt++) {
      for( loop_drp=0 ; loop_drp < Gdrp_contsList[loop_cnt].drp_ids.length ; loop_drp++ ) {
        if( drp_id == Gdrp_contsList[loop_cnt].drp_ids[loop_drp] ) {
          drp_lst = Gdrp_contsList[loop_cnt].drp_ids;
          break;
        }
      }
    }
    if( null == drp_lst ) {
      alert( "drp_lst is null" );
      return;
    }
    
    if( false == Gdrp_isDropping ) {
      for( loop_drp=0 ; loop_drp < drp_lst.length ; loop_drp++ ) {
        $( "#" + drp_lst[loop_drp] ).fadeIn("normal");
      }
      Gdrp_isDropping = true;
    } else {
      for( loop_drp=0 ; loop_drp < drp_lst.length ; loop_drp++ ) {
        $( "#" + drp_lst[loop_drp] ).fadeOut("normal");
      }
      Gdrp_isDropping = false;
    }
  } catch( e ) {
    alert( e.stack );
  }
}

function Fdrp_resetView() {
  try {
    var loop_cnt = 0;
    var loop_drp = 0;
    for(loop_cnt=0; loop_cnt < Gdrp_contsList.length ;loop_cnt++) {
      for( loop_drp=0 ; loop_drp < Gdrp_contsList[loop_cnt].drp_ids.length ; loop_drp++ ) {
        if( 0 == loop_drp ) {
          continue;
        }
        $( "#" + Gdrp_contsList[loop_cnt].drp_ids[loop_drp] ).fadeOut("normal");
      }
    }
    //$(".c-drpdwn-ico").fadeOut("normal");
    Gdrp_isDropping = false;
  } catch( e ) {
    alert( e.stack );
  }
}

function Fdrp_setEvent( tgt_id , idx , func ) {
  try {
    var loop   = 0;
    var drp_id = 0;
    for( loop=0 ; loop < Gdrp_contsList.length ; loop++ ) {
      if ( tgt_id == Gdrp_contsList[loop].tgt_id ) {
        drp_id = Gdrp_contsList[loop].drp_ids[idx];
        break;
      }
    }
    Fujb_setClickEvent( drp_id , func );
  } catch ( e ) {
    alert( e.stack );
  }
}

/* end of file */
