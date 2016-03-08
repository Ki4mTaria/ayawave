/**
 * @file Sath_login.js
 */
/*** function ***/
function Fath_execLogin() {
  try {
    var userid = Fvew_getUserid();
    var passwd = Fvew_getPasswd();
    if( (null == userid) || ('' == userid) ) {
      Fvew_setErrStr( "ユーザ名を入力してください。" );
      return;
    }
    if( (null == passwd) || ('' == passwd) ) {
      Fvew_setErrStr( "パスワードを入力してください。" );
      return;
    }
    var param = {
      userid : userid,
      passwd : passwd
    }
    Fjsn_sendPost( "auth" , param , function( ret ) {
      if( true === ret['ret'] ) {
        $("body").fadeOut( 'normal' , function(){
          try{location.reload(true);}
          catch(e){alert(e.stack);}
        });
      } else {
        Fvew_setErrStr( "ログインに失敗しました。" );
      }
    });
  } catch( e ) {
    alert( e.stack );
  }
}


/* end of file */
