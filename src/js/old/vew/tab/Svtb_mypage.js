/**
 * @file Svew_mypage.js
 */


function Fvtb_loadMypConts() {
  try {
    Fcom_loadHtml (
      "./load/html/tab_mypage" ,
      "i-mypage-conts"         ,
      function(){
        try {
          // Fcom_loadCss( "./load/css/tab_create" );
          $( "#i-mypage-tab" ).fadeIn( 'fast' );
        }catch(e){ alert(e.stack); }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
