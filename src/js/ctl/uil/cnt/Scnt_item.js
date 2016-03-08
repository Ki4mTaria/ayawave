/**
 * @file Scnt_item.js
 */
/*** initialize ***/
$(function(){
  try {
    Fcnt_itemMenu();
    Fcnt_itemConts();
  } catch ( e ) {
    alert( e.stack );
  }
});

/*** define ***/
var DCNT_ITMCNTID_TTL = "i-itm-ttl";
var DCNT_ITMCNTID_TAG = "i-itm-tag";
var DCNT_ITMCNTID_DAT = "i-itm-dat";

/*** function ***/
function Fcnt_itemMenu() {
  try {
    $("#i-cnt-itm").append("<div id='i-itm-mnu'></div>");
    $("#i-cnt-itm").append("<div id='i-itm-bar'><i class='fa fa-bars'></i></div>");
    $("#i-itm-bar").css( "width"     , "32px" );
    $("#i-itm-bar").css( "font-size" , "2.3em" );
    $("#i-itm-bar").css( "margin"    , "5px 0px 0px 10px" );
    $("#i-itm-bar").css( "cursor"    , "pointer" );
    Fcom_loadJs(
      [
        "./src/js/slidemenu",
        "./src/js/ujarakbtn"
      ] ,
      function() {
        try {
          Fsdm_init("i-itm-mnu");
          Fcnt_itemMenuConts();
          $( "#i-itm-mnu" ).css( "background" , "rgb(199, 224, 240)" );
          Fsdm_setTop( "i-itm-mnu" , 69 ); 
          Fsdm_setWidth( "i-itm-mnu" , 200 );
          $("#i-itm-bar").click(function(){
            Fsdm_open( "i-itm-mnu" );
          });
        } catch(e) { alert(e.stack); }
      }
    );
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fcnt_itemMenuConts() {
  try {
    /* new button */
    $("#i-itm-mnu").append( "<div id='i-itmmnu-new'></div>" );
    Fujb_init( "i-itmmnu-new"  , "New" );
    Fujb_setClickEvent( "i-itmmnu-new" , function(){
      Fcom_loadJs(
        ["./src/js/itmmnu"] ,
        function() {
          try { Fitm_clickNew(); }
          catch(e) { alert(e.stack); }
        }
      );
    });
    $("#i-itmmnu-new").css( "margin" , "20px 23px 40px 23px" );
    Fujb_start( "i-itmmnu-new" );
    
    $("#i-itm-mnu").append( "<div id='i-itmmnu-ttl'></div>" );
    Fujb_init( "i-itmmnu-ttl"  , "Title" );
    Fujb_setCss( "i-itmmnu-ttl" , "min-width" , "199px" );
    Fujb_setCss( "i-itmmnu-ttl" , "background" , "rgb(199, 224, 240)" );
    //Fujb_setClickEvent( "i-itmmnu-ttl" , function(){
    //  try {
    //    Fcom_loadJs(
    //      ["./front/get/js?tgt-itemevt"] ,
    //      function() {
    //        try {
    //          Sitm_clickView(DITM_VEWTYPE_TITLE);
    //          Fsdm_close( "i-itm-mnu" );
    //        } catch (e) {alert(e.stack);}
    //      }
    //    );
    //  }catch(e){ alert( e.stack ); }
    //});
    Fujb_start( "i-itmmnu-ttl" );
    
    $("#i-itm-mnu").append( "<div id='i-itmmnu-tag'></div>" );
    Fujb_init( "i-itmmnu-tag"  , "Tag" );
    Fujb_setCss( "i-itmmnu-tag" , "min-width" , "199px" );
    Fujb_setCss( "i-itmmnu-tag" , "background" , "rgb(199, 224, 240)" );
    Fujb_setRelaPosi( "i-itmmnu-tag" , "top" , "-1px" );
    //Fujb_setClickEvent( "i-itmmnu-tag" , function(){
      //try {
      //  Fcom_loadJs(
      //    ["./src/js/itemevt"] ,
      //    function() {
      //      try {
      //        Sitm_clickView(DITM_VEWTYPE_TAG);
      //        Fsdm_close( "i-itm-mnu" );
      //      } catch (e) {alert(e.stack);}
      //    }
      //  );
      //}catch(e){ alert( e.stack ); }
    //});
    Fujb_start( "i-itmmnu-tag" );
    
    $("#i-itm-mnu").append( "<div id='i-itmmnu-date'></div>" );
    Fujb_init( "i-itmmnu-date"  , "Date" );
    Fujb_setCss( "i-itmmnu-date" , "min-width" , "199px" );
    Fujb_setCss( "i-itmmnu-date" , "background" , "rgb(199, 224, 240)" );
    Fujb_setRelaPosi( "i-itmmnu-date" , "top" , "-2px" );
    //Fujb_setClickEvent( "i-itmmnu-date" , function(){
      //try {
      //  Fcom_loadJs(
      //    ["./src/js/itemevt"] ,
      //    function() {
      //      try {
      //        Sitm_clickView(DITM_VEWTYPE_DATE);
      //        Fsdm_close( "i-itm-mnu" );
      //      } catch (e) {alert(e.stack);}
      //    }
      //  ); 
      //}catch(e){ alert( e.stack ); }
    //});
    Fujb_start( "i-itmmnu-date" );
    
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fcnt_itemConts() {
  try {
    $("#i-cnt-itm").append("<div id='i-itm'></div>");
    $("#i-itm").append("<div id='i-itm-ttl'></div>");
    $("#i-itm").append("<div id='i-itm-tag'></div>");
    $("#i-itm").append("<div id='i-itm-dat'></div>");
    $("#i-itm-ttl").css( "display" , "block" );
    $("#i-itm-tag").css( "display" , "none" );
    $("#i-itm-dat").css( "display" , "none" );
    
    Fcom_loadJs(
      ["./src/js/evt_itmttl"] ,
      function() {
        try {
          Fcom_endLoad( DINI_LOAD_CNT );
        } catch (e) {alert(e.stack);}
      }
    );
    
  } catch ( e ) {
    alert( e.stack );
  }
}

/* end of file */
