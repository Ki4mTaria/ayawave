/**
 * @file Svew_logout.js
 */
/*** initial ***/
$(function(){
  try {
    Fcom_loadHtml (
      "./load/html/logout" ,
      "i-hdr-conts-right" ,
      function() {
        $( "#i-hdr-conts-right" ).css( "padding-top" , "7px" );
        $( "#i-hdr-conts-right" ).click(function(){
          try{ Fath_logout(); }catch(e){alert(e.stack);}
        });
      }
    );
    
  } catch( e ) {
    alert( e.stack );
  }
});


/* end of file */
