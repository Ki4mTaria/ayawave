/**
 * @file Slgn_func.js
 */

/*** function ***/
function Flgn_setLoginEvt() {
  try {
    Fujb_setClickEvent( "i-form-send" ,
      function() {
        try {
          Flgn_loadAuth();
        } catch( e ) {alert( e.stack );}
    });
    
    $("#i-form-user").keypress(function (e){
      try {
        if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
          Flgn_loadAuth();
        }
      } catch( e ) {
        alert( e.stack );
      }
    });
    $("#i-form-pass").keypress(function (e){
      try {
        if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
          Flgn_loadAuth();
        }
      } catch( e ) {
        alert( e.stack );
      }
    });
    
  } catch( e ) {
    alert( e.stack );
  }
}

function Flgn_func() {
  try {
    // get user
    var user = Ffom_getValue( "i-form-user" );
    if( '' == user ) {
      $("#i-form-err").text( "ユーザ名を入力してください。" );
      $("#i-form-err").fadeIn( "normal" );
      return;
    }
    // get password
    var pass = Ffom_getValue( "i-form-pass" );
    if( '' == pass ) {
      $("#i-form-err").text( "パスワードを入力してください。" );
      $("#i-form-err").fadeIn( "normal" );
      return;
    }
    Fath_execLogin( user , pass );
  } catch( e ) {
    alert( e.stack );
  }
}

function Flgn_failed() {
  try {
    $("#i-form-err").text( "ログインに失敗しました。" );
    $("#i-form-err").fadeIn( "normal" );
  } catch( e ) {
    alert( e.stack );
  }
}

function Flgn_loadAuth() {
  try {
    Fcom_loadJs(["./src/js/authuser"] ,
      function() {
        try {Flgn_func();}
        catch( e ) {alert( e.stack );}
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
