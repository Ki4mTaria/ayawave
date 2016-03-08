/**
 * @file Sath_moron.js
 */
/*** function ***/
function Fath_execLogin( user , pass ) {
  try {
    var param = {
      userid : user,
      passwd : pass
    }
    Fjsn_sendPost( "./func/auth/login" , param , function( ret ) {
      if( true === ret['ret'] ) {
        $("body").fadeOut( 'normal' , function(){
          try{location.reload(true);}
          catch(e){alert(e.stack);}
        });
      } else {
        Flgn_failed();
      }
    });
  } catch( e ) {
    alert( e.stack );
  }
}


/* end of file */
