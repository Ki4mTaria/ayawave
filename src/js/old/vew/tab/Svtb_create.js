/**
 * @file Svew_create.js
 */


function Ftab_loadCreateBase() {
  try {
    Fcom_loadHtml (
      "./load/html/tab_create" ,
      "i-create-conts" ,
      function(){
        try {
          Fcom_loadCss( "./load/css/tab_create" );
          $('#i-codettl-input').FlowupLabels({
            feature_onInitLoad: true      ,
            class_focused:      'focused' ,
            class_populated:    'populated'
          });
          $( "#i-create" ).fadeIn( 'fast' );
        }catch(e){alert(e.stack);}
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
