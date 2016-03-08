/**
 * @file Smdg_modal.js
 */
/*** define ***/

/*** initialize ***/
$(function(){
  try {
    Fcom_loadJs(
      ["./src/js/shadowbox"] ,
      function(){
        try {
          Fcom_loadCss("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
        }catch(e) { alert(e.stack); }
      }
    );
  } catch( e ) { 
    alert( e.stack );
  }
});

function Fmdg_init( tgt_id, conts ) {
  try {
    $("#" + tgt_id).css( "display"  , "none" );
    $("#" + tgt_id).css( "position" , "absolute" );
    $("#" + tgt_id).css( "left"     , "0px" );
    $("#" + tgt_id).css( "top"      , "0px" );
    $("#" + tgt_id).append( "<div id='"+ tgt_id +"-fil'></div>" );
    $("#" + tgt_id).append( "<div id='"+ tgt_id +"-box'></div>" );

    $("#"+tgt_id + "-fil").css( "display"  , "none" );
    $("#"+tgt_id + "-fil").css( "background-color" , "rgba(200, 200, 200, 0.4)" );
    $("#"+tgt_id + "-fil").css( "position" , "fixed" );
    $("#"+tgt_id + "-fil").css( "left"     , "0px" );
    $("#"+tgt_id + "-fil").css( "top"      , "0px" );
    $("#"+tgt_id + "-fil").css( "width"    , $(window).width() + "px" );
    $("#"+tgt_id + "-fil").css( "height"   , $(window).height() + "px" );
    $("#"+tgt_id + "-fil").css( "z-index"  , "200" );
    $("#"+tgt_id + "-fil").click(function(){
      Fmdg_close( tgt_id );
    });
    Fsbx_init(  tgt_id + "-box" ,
                [200,400] ,
                [($(window).height()/2)-75 , ($(window).width()/2)-200]  );
    $( "#"+ tgt_id + "-box" ).css( "z-index" , "300" );
    $( "#"+ tgt_id + "-box" ).css( "position" , "fixed" );
    var dlgcnt = "<div id='" + tgt_id +"-hdr'></div>";
    dlgcnt +=    "<div id='" + tgt_id + "-cnt'></div>";
    $( "#"+ tgt_id + "-box" ).append( dlgcnt );
    dlgcnt =  "<div id='"+ tgt_id +"-txt'><div>"+ conts +"</div></div>";
    dlgcnt += "<div id='"+ tgt_id +"-btn'></div>";
    $( "#"+ tgt_id + "-cnt" ).append( dlgcnt );
    $( "#"+ tgt_id + "-txt" ).css( "height" , "100px" );
    $( "#"+ tgt_id + "-txt" ).css( "text-align" , "center" );
    $( "#"+ tgt_id + "-txt" ).css( "font-size" , "20px" );
    $( "#"+ tgt_id + "-txt div" ).css( "padding-top" , "40px" );
    Fhdr_init( tgt_id + "-hdr" , function(){
      try {
        Fhdr_setLeft( tgt_id + "-hdr" , "" );
        Fhdr_setRight(
          Fujb_getHtml(
            tgt_id + "-hdr" ,
            "<i class='fa fa-times'></i>"
          )
        );
        Fujb_setWidth( tgt_id + "-hdr" , 23 );
        Fujb_setHeight( tgt_id + "-hdr" , 23 );
        Fujb_setCss( tgt_id + "-hdr" , "padding" , "3px" );
        Fujb_setCss( tgt_id + "-hdr" , "background" , "#C7E0F0" );
        Fujb_setCss( tgt_id + "-hdr" , "border" , "0px" );
        Fujb_setClickEvent( tgt_id + "-hdr" , function(){
          var tgt = tgt_id;
          Fmdg_close( tgt );
        });
        Fhdr_setRightCss( tgt_id + "-hdr" , "padding-top" , "3px" );
        Fhdr_setCss( "background" , "#C7E0F0" );
        Fhdr_setHeight( tgt_id + "-hdr" , 30 );
        Fhdr_start();
      } catch( e ) {
        alert( e.stock );
      }
    });
    
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fmdg_initConfirm( tgt_id , conts ) {
  try {
    $("#" + tgt_id).css( "display" , "none" );
    $("#" + tgt_id).css( "position" , "absolute" );
    $("#" + tgt_id).css( "left" , "0px" );
    $("#" + tgt_id).css( "top"  , "0px" );
    $("#" + tgt_id).append( "<div id='"+ tgt_id +"-fil'></div>" );
    $("#" + tgt_id).append( "<div id='"+ tgt_id +"-box'></div>" );
    
    $("#"+tgt_id + "-fil").css( "display" , "none" );
    $("#"+tgt_id + "-fil").css("background-color" , "rgba(200, 200, 200, 0.4)" );
    $("#"+tgt_id + "-fil").css( "position" , "fixed" );
    $("#"+tgt_id + "-fil").css( "left" , "0px" );
    $("#"+tgt_id + "-fil").css( "top"  , "0px" );
    $("#"+tgt_id + "-fil").css( "width"  , $(window).width() + "px" );
    $("#"+tgt_id + "-fil").css( "height" , $(window).height() + "px" );
    $("#"+tgt_id + "-fil").css( "z-index" , "200" );
    $("#"+tgt_id + "-fil").click(function(){
      Fmdg_close( tgt_id );
    });
    
    Fsbx_init(  tgt_id + "-box" ,
                [200,400] ,
                [($(window).height()/2)-75 , ($(window).width()/2)-200]  );
    $( "#"+ tgt_id + "-box" ).css( "z-index" , "300" );
    $( "#"+ tgt_id + "-box" ).css( "position" , "fixed" );
    var dlgcnt = "<div id='" + tgt_id +"-hdr'></div>";
    dlgcnt +=    "<div id='" + tgt_id + "-cnt'></div>";
    $( "#"+ tgt_id + "-box" ).append( dlgcnt );
    dlgcnt =  "<div id='"+ tgt_id +"-txt'><div>"+ conts +"</div></div>";
    dlgcnt += "<div id='"+ tgt_id +"-btn'></div>";
    $( "#"+ tgt_id + "-cnt" ).append( dlgcnt );
    $( "#"+ tgt_id + "-txt" ).css( "height" , "100px" );
    $( "#"+ tgt_id + "-txt" ).css( "text-align" , "center" );
    $( "#"+ tgt_id + "-txt" ).css( "font-size" , "20px" );
    $( "#"+ tgt_id + "-txt div" ).css( "padding-top" , "40px" );
    
    Fhdr_init( tgt_id + "-hdr" , function(){
      try {
        Fhdr_setLeft( tgt_id + "-hdr" , "confirm" );
        Fhdr_setRight( 
          Fujb_getHtml(
            tgt_id + "-hdr" ,
            "<i class='fa fa-times'></i>"
          )
        );
        Fujb_setWidth( tgt_id + "-hdr" , 23 );
        Fujb_setHeight( tgt_id + "-hdr" , 23 );
        Fujb_setCss( tgt_id + "-hdr" , "padding" , "3px" );
        Fujb_setCss( tgt_id + "-hdr" , "background" , "#C7E0F0" );
        Fujb_setCss( tgt_id + "-hdr" , "border" , "0px" );
        Fujb_setClickEvent( tgt_id + "-hdr" , function(){
          var tgt = tgt_id;
          Fmdg_close( tgt );
        });
        Fhdr_setRightCss( tgt_id + "-hdr" , "padding-top" , "3px" );
        Fhdr_setCss( "background" , "#C7E0F0" );
        Fhdr_setHeight( tgt_id + "-hdr" , 30 );
        Fhdr_start();
      } catch( e ) {
        alert( e.stock );
      }
    });
    Fmdg_setButton( tgt_id , ["OK","Cancel"] );
    Fmdg_setCenterBtn( tgt_id , 400 , 2 );
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fmdg_setButton( tgt_id , b_conts ) {
  try {
    var apbtn = "";
    var loop  = 0;
    for(loop=0 ; loop < b_conts.length ; loop++) {
      apbtn = "<div id='" + tgt_id + "-btn-" + loop +"'></div>";
      $("#" + tgt_id + " " + "#" + tgt_id + "-btn" ).append( apbtn );
      Fujb_init( tgt_id + "-btn-" + loop , b_conts[loop] );
      Fujb_setCss( tgt_id + "-btn-" + loop , "float" , "left" );
      Fujb_setCss( tgt_id + "-btn-" + loop , "margin-right" , "40px" );
      Fujb_setCss( tgt_id + "-btn-" + loop , "background" , "#C7E0F0" );
      Fujb_setWidth( tgt_id + "-btn-" + loop , 100 );
      Fujb_setHeight( tgt_id + "-btn-" + loop , 40 );
      Fujb_setClickEvent( tgt_id + "-btn-" + loop , function(){
        var tgt = tgt_id;
        Fmdg_close( tgt );
      });
      Fujb_start( tgt_id + "-btn-" + loop );
    }
  } catch( e ) {
    alert( e.stack );
  }
}

function Fmdg_setCenterBtn( tgt_id , wid , b_cnt ) {
  try {
    var b_wid = (100 * b_cnt) + 40;
    $("#" + tgt_id + "-btn").css( "position" , "relative" );
    $("#" + tgt_id + "-btn").css( "left" , (wid/2) - (b_wid/2) );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fmdg_open( tgt_id , blur ) {
  try {
    $("#"+tgt_id + "-fil").fadeIn();
    //$("body").css( "-webkit-filter" , "blur(5px)" );
    //$("body").css( "filter" , "blur(5px)" );
    //$("body").css( "z-index" , "200" );
    Fsbx_start( tgt_id + "-box" );
    $("#" + tgt_id).fadeIn();
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fmdg_close( tgt_id ) {
  try {
    $("#"+tgt_id + "-fil").fadeOut();
    $( "#" +  tgt_id + "-box" ).fadeOut();
    $("#" + tgt_id).fadeOut();
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fmdg_setBtnEvent( tgt_id , idx , evt ) {
  try {
    Fujb_setClickEvent( tgt_id + "-btn-" + idx , evt ); 
  } catch( e ) {
    alert( e.stack );
  }
}

/* end ofF file */
