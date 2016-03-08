/**
 * @file Svew_search.js
 */

/*** initial ***/
$(function(){
  try {
    Fcom_loadJs(
      [ "./load/js/search_vew" ,
        "./load/js/search_mdl" ,
        "./load/js/flowuplabel"] ,
      function() {
        try {
          $("#i-hdr-conts-center").css( "display" , "none" );
          Fsrh_init( "i-hdr-conts-center" );
          Fsrh_start( "i-hdr-conts-center" );
        } catch( e ) {
          alert( e.stock );
        }
      }
    );

//    Fcom_loadHtml (
//      "./load/html/search" ,
//      "i-hdr-conts-center" ,
//      function() {
//        try {
//          Fcom_loadCss( "./load/css/flowuplabel" );
//          Fcom_loadCss( "./load/css/search" );
//          Fcom_loadCss( "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" );
//          Fsrh_startInput();
//        } catch( e ) {
//          alert( e.stack );
//        }
//      }
//    );
  } catch( e ) {
    alert( e.stack );
  }
});

//function Fsrh_startInput() {
//  try {
//    $('#i-search-input').FlowupLabels({
//      feature_onInitLoad: true      ,
//      class_focused:      'focused' ,
//      class_populated:    'populated'
//    });
//  } catch( e ) {
//    alert( e.stack );
//  }
//}

/* end of file */
