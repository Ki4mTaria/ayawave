/**
 * @file Sath_logout.js
 */
function Fath_logout() {
  try {
    Fjsn_sendPost( "logout" , null , function(){
      try {
        $("body").fadeOut( 
          "normal" ,
          function(){
            try{location.reload(true);}
            catch(e){alert(e.stack);}
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

/* end of file */
