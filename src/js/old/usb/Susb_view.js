/**
 * @file Susb_view.js
 * @brief viewer of user button function
 */
/*** gloval ***/
var Gusb_isDropping = false;
var Gusb_click      = false;

/*** define ***/
var DUSB_LOAD_FONT = "DUSB_LOAD_FONT";

/*** initial ***/
$(function() {
  try {
    var load_font = Fcom_isLoaded( DUSB_LOAD_FONT );
    if( false == load_font ) {
      Fcom_startLoad( DUSB_LOAD_FONT );
      Fcom_loadCss("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
    }
    if( false == Fcom_isLoaded( DINI_LOAD_UJARAK_BTN ) ) {
      Fcom_startLoad( DINI_LOAD_UJARAK_BTN );
      Fcom_loadJs(
        ["./load/js/ujarakbtn" ] ,
        function(){
          try{Fcom_endLoad( DINI_LOAD_UJARAK_BTN );}
          catch(e){alert(e.stack);}
        }
      );
    }
  } catch( e ) {
    alert( e.stack );
  }
});

function Fusb_init( tgt_id , user ) {
  try {
    Fcom_fireLoadev( [DINI_LOAD_UJARAK_BTN] , function(){
      try {
        Fcom_loadHtml(
          "./load/html/user_drop" ,
          tgt_id ,
          function() {
            try {
              Fcom_loadCss( "./load/css/userdrop" );
              Fujb_init( "i-usb-user" , user );
              Fujb_setClickEvent( "i-usb-user" , Fusb_clkTop );
              Fujb_start( "i-usb-user" );
              Fujb_setHoverEvent( "i-usb-user" ,
                function(){$("#i-usb-down").css("color","white");},
                function(){$("#i-usb-down").css("color","black");}
              );
              Fujb_init( "i-usb-mypage"  , "<i class=\"fa fa-user\"></i>&nbsp;&nbsp;mypage" );
              Fujb_setRelaPosi( "i-usb-mypage" , "top" , "-1px" );
              Fujb_start( "i-usb-mypage" );
              Fujb_init( "i-usb-setting" , "<i class=\"fa fa-cog\"></i>&nbsp;&nbsp;setting" );
              Fujb_setRelaPosi( "i-usb-setting" , "top" , "-2px" );
              Fujb_start( "i-usb-setting" );
              Fujb_init( "i-usb-logout"  , "<i class=\"fa fa-sign-out\"></i>&nbsp;&nbsp;logout" );
              Fujb_setRelaPosi( "i-usb-logout" , "top" , "-3px" );
              Fujb_setClickEvent( "i-usb-logout" , Fusb_clickLogout );
              Fujb_start( "i-usb-logout" );
              $("body").click(function(){
                if( (true != Gusb_click) &&
                    (true == Gusb_isDropping) ) {
                  Fusb_clkTop();
                  Gusb_click = false;
                } else if ( true == Gusb_click ) {
                  Gusb_click = false;
                }
              });
              
            } catch( e ) {
              alert( e.stack );
            }
          }
        );
      } catch( e ) {
        alert( e.stack );
      }
    });
  } catch( e ) {
    alert( e.stack );
  }
}

function Fusb_clkTop() {
  try {
    Gusb_click = true;
    if( !Gusb_isDropping ) {
      $("#i-usb-mypage").fadeIn("normal");
      $("#i-usb-setting").fadeIn("normal");
      $("#i-usb-logout").fadeIn("normal");
      Gusb_isDropping = true;
    } else {
      $("#i-usb-mypage").fadeOut("normal");
      $("#i-usb-setting").fadeOut("normal");
      $("#i-usb-logout").fadeOut("normal");
      Gusb_isDropping = false;
    }
  } catch( e ) {
    alert( e.stack );
  }
}


/* end of file */
