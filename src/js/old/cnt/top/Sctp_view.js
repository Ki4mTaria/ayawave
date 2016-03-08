/**
 * @file Sctp_view.js
 */
/*** define ***/
var DCTP_LOAD_NEW = "DCTP_LOAD_NEW";
var DCTP_LOAD_SDM = "DCTP_LOAD_SDM";

/*** function ***/
function Fctp_init( tgt_id ) {
  try {
    Fcom_loadHtml(
      "./load/html/top_conts" ,
      tgt_id ,
      function() {
        try {
          $("#i-vewbar").click(Fctp_clickBar);
          Fujb_init( "i-newbtn"  , "New" );
          Fujb_setClickEvent( "i-newbtn" , Fctp_newClick );
          Fcom_loadCss( "./load/css/conts_top" );
          Fcsw_start();
        }catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fctp_start() {
  try {
    $("#i-vewbar").fadeIn("normal");
    Fujb_start( "i-newbtn" );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fctp_switchNew() {
  try {
    if( false == Fcom_isLoaded( DCTP_LOAD_NEW ) ) {
      Fcom_startLoad( DCTP_LOAD_NEW );
      Fcom_loadHtml(
        "./load/html/ctp_new" ,
        "i-newview" ,
        function() {
          try {
            Fcom_endLoad( DCTP_LOAD_NEW );
            Fcom_loadCss( "./load/css/ctp_new" );
            $("#i-listview").fadeOut( "normal" , function(){
              try{
                $("#i-newview").fadeIn("normal");
              }catch(e){alert(e.stack);}
            });
            Fctp_initNewConts();
            $("#i-new-conts").fadeIn(); 
          }catch( e ) {
            alert( e.stack );
          }
        }
      );
    }else {
      $("#i-listview").fadeOut( "normal" , function(){
        try{ $("#i-newview").fadeIn("normal"); }catch(e){alert(e.stack);}
      });
    }
  } catch( e ) {
    alert( e.stack );
  }
}

function Fctp_initNewConts() {
  try {
    // back button
    Fujb_init( "i-new-back"  , "Back" );
    Fujb_setClickEvent( "i-new-back" , function(){
      Fctp_clickBack();
    });
    Fujb_start( "i-new-back" );
    // item title
    $('#i-ittl-input').FlowupLabels({
      feature_onInitLoad: true      ,
      class_focused:      'focused' ,
      class_populated:    'populated'
    });
    $("#i-item-title").fadeIn("normal");
    
    // item tag
    $('#i-itag-input').FlowupLabels({
      feature_onInitLoad: true      ,
      class_focused:      'focused' ,
      class_populated:    'populated'
    });
    $("#i-item-tag").fadeIn("normal");
  } catch( e ) {
    alert( e.stack );
  }
}

function Fctp_switchList(){
  try {
    $("#i-newview").fadeOut( "normal" , function(){
      try{ $("#i-listview").fadeIn("normal"); }catch(e){alert(e.stack);}
    });
  } catch( e ) {
    alert(e.stack);
  }
}

function Fctp_initSlideMenu() {
  try {
    Fcom_loadJs(
      ["./load/js/slide_menu"] ,
      function() {
        try {
          Fsdm_init("i-view-setting");
          Fsdm_setTop( "i-view-setting" , 69 );
          Fcom_endLoad( DCTP_LOAD_SDM );
          Fcom_loadHtml(
            "./load/html/view_setting" ,
            "i-view-setting"           ,
            function() {
              try {
                Fcom_loadCss( "./load/css/view_setting" );
                Fctp_startSlideMenu();
              }catch(e){alert(e.stack);}
            }
          );
          $("#i-sdm-close").click(function(){
            try{Fsdm_close( "i-view-setting" );}catch(e){alert(e.stack);}
          });
          // view mode
          Fctp_initViewMode();
        } catch(e) { alert(e.stack); }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fctp_initViewMode() {
  try {
    Fujb_init( "i-sdm-vm-date"  , "Date" );
    Fujb_start( "i-sdm-vm-date" );
    Fujb_init( "i-sdm-vm-ttl"  , "Title" );
    Fujb_start( "i-sdm-vm-ttl" );
    Fujb_init( "i-sdm-vm-tag"  , "Tag" );
    Fujb_start( "i-sdm-vm-tag" );
    Fujb_init( "i-sdm-vm-user"  , "User" );
    Fujb_start( "i-sdm-vm-user" );
    $(".c-sdm-vm").click(function(){
      //alert($(this).attr("id"));
      Fsdm_close( "i-view-setting" );
    });
  } catch( e ) {
    alert(e.stack);
  }
}

function Fctp_startSlideMenu() {
  try {
    Fsdm_open( "i-view-setting" );
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
