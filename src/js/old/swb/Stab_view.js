/**
 * @file Stab_view.js
 */
$(function(){
  try {
    //DINI_LOAD_HDR
    //Ftab_init();
  } catch( e ) {
    alert( e.stack );
  }
});
  
function Ftab_initView( tgt_id ) {
  try {
    Fcom_loadHtml(
      "./load/html/tab" ,
      "i-hdr-conts-center" ,
      function() {
        try {
          
        } catch(e) {alert(e.stack);}
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
