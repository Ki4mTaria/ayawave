/**
 * @file Shdc_ctrl.js
 */
/*** initialize ***/
$(function(){
  try {
    Fcom_loadJs(
      ["./load/js/header_vew"] ,
      function() {
        try {
          Fhdc_fireHdr();
          Fhdc_fireTab();
          Fhdc_fireUsrDrop();
        }catch(e){ alert(e.stack); }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
});



function Fhdc_loadevCont() {
  try {
    
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
