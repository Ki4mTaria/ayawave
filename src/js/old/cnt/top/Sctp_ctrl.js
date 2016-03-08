/**
 * @file Sctp_ctrl.js
 */
/*** define ***/
var DCTP_VEWSTS_LIT = "DCTP_VEWSTS_LIT";
var DCTP_VEWSTS_NEW = "DCTP_VEWSTS_NEW";
var DCTP_LOAD_SDM   = "DCTP_LOAD_SDM";

/*** global ***/
var Gctp_viewSts = DCTP_VEWSTS_LIT;

/*** initial ***/
$(function(){
  try {
    Fcom_startLoad( DINI_LOAD_TOPCNT );
    Fcom_loadJs(
      [ "./load/js/topcnt_vew",
        "./load/js/topcnt_mdl" ] ,
     function() {
        try {
          Fcom_endLoad( DINI_LOAD_HDR );
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
});


/*** function ***/
function Fctp_newClick() {
  try {
    // init new view
    
    // switch view
    Fctp_switchNew();
    Gctp_viewSts = DCTP_VEWSTS_LIT;
  } catch( e ) {
    alert( e.stack );
  }
}

function Fctp_clickBar() {
  try {
    if( false == Fcom_isLoaded( DCTP_LOAD_SDM ) ) {
      Fcom_startLoad( DCTP_LOAD_SDM );
      Fctp_initSlideMenu();
      return;
    }
    Fctp_startSlideMenu();
  } catch( e ) {
    alert( e.stack );
  }
}

function Fctp_clickBack() {
  try {
    Fctp_switchList();
    Gctp_viewSts = DCTP_VEWSTS_NEW;
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
