/**
 * @file Susb_ctrl.js
 * @brief controller of user button function
 */

/*** initial ***/
$(function() {
  try {
    Fcom_loadJs(
      [
        "./load/js/usrbtn_vew" ,
        "./load/js/usrbtn_mdl"
      ] ,
      function() {
        try {
          var target = Fhdr_getRightTarget();
          Fjsn_sendPost( "user" , null , function(ret){
            Fusb_init( target , ret.ret_msg );
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

function Fusb_clickLogout() {
  try {
    Fcom_loadJs(
      [
        "./load/js/logout" ,
      ] ,
      function() {
        try {
          Fath_logout();
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
