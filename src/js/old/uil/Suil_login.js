/**
 * @file Suil_login.js
 */
$(function(){
  try {
    Fuil_loadLogin();
  } catch( e ) {
    alert( e.stock );
  }
});

function Fuil_loadLogin() {
  try {
    $("#i-cnt").css( "height" , ( $(window).height() - 60 ) + "px" );
    $("#i-cnt").css( "width"  , $(window).width() + "px" );
    Fcom_loadCss( "./load/css/back" );
    
    Fcom_loadHtml (
      "./load/html/form" ,
      "i-cnt" ,
      function() {
        try {
          Fcom_loadCss( "./load/css/flowuplabel" );
          $("#i-form").css( "top" , (($(window).height()-60-300)/2)  + "px" );
          $("#i-form").css( "left" , (($(window).width()/2) - 225) + "px" );
          Fcom_loadCss( "./load/css/form" );
          Fcom_loadCss( "./load/css/ujarak" );
          Fcom_loadJs( [ "./load/js/flowuplabel" ,
                         "./load/js/auth"        ,
                         "./load/js/loginview" ] ,
            function() {
              try {
                $('.FlowupLabels').FlowupLabels({
                  feature_onInitLoad: true      ,
                  class_focused:      'focused' ,
                  class_populated:    'populated'
                });
              } catch( e ) {
                alert( e.stock );
              }
            }
          );
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stock );
  }
}

/* end of file */
