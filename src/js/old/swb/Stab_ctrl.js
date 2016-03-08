/**
 * @file Stab_ctrl.js
 */
/*** define ***/
var DTAB_LOAD = "DTAB_LOAD";

/*** initialize ***/
$(function(){
  try {
    Fcom_startLoad( DTAB_LOAD );
    Fcom_loadJs(
      [ "./load/js/tab_vew" ,
        "./load/js/tab_mdl" ] ,
      function() {
        try {
          Fcom_endLoad( DTAB_LOAD );
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
});

function Ftab_init( tgt_id ) {
  try {
    Fcom_fireLoadev( DTAB_LOAD , function(){
      Ftab_initView( tgt_id );
    });
  } catch( e ) {
    alert( e.stack );
  }
}


/* end of file */
