/**
 * @file Svew_login.js
 */
$(function(){
  // button event
  $("#i-login-btn").click(function(){
    try { Fath_execLogin(); }
    catch( e ) { alert( e.stack ); }
  });
  
  // enter key event
  $("#i-form-id").keypress(function (e){
    try {
      if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
        Fath_execLogin();
      }
    } catch( e ) {
      alert( e.stack );
    }
  });
  $("#i-form-pass").keypress(function (e){
    try {
      if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
        Fath_execLogin();
      }
    } catch( e ) {
      alert( e.stack );
    }
  });
});


/*** function ***/
function Fvew_setErrStr( err ) {
  try {
    $("#i-from-err").text( err );
    $("#i-from-err").fadeIn( "normal" );
  } catch( e ) {
    alert( e.stock );
  }
}

function Fvew_getUserid() {
  try {
    return $("#i-userid-inp").val();
  } catch( e ) {
    alert( e.stock );
  }
}

function Fvew_getPasswd() {
  try {
    return $("#i-passwd-inp").val();
  } catch( e ) {
    alert( e.stock );
  }
}

/* end of file */
