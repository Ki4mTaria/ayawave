/**
 * @file Shdr_basic.js
 */
/*** initialize ***/
$(function(){
  try {
    Fcom_loadJs(
      ["./src/js/basicheader"] ,
      function(){
        try {
          Fhdr_init( "i-hdr" , function(){
            try {
              Fhdr_setTitle( "Ayawave" );
              Fhdr_setCss( "background" , "#C7E0F0" );
              Fhdr_setStaticFlame();
              Fhdr_start();
            } catch( e ) {
              alert( e.stock );
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


/* end of file */
