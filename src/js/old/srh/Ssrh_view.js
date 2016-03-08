/**
 * @file Ssrh_view.js
 */
/*** initial ***/
//$(function(){
//  try {
//  }  catch( e ) {
//     alert( e.stack );
//  }
//});

/*** function ***/
function Fsrh_init( tgt_id ) {
  try {
     Fcom_loadHtml(
       "./load/html/search" ,
       tgt_id ,
       function(){
         try {
           Fcom_loadCss( "./load/css/flowuplabel" );
           Fcom_loadCss( "./load/css/search" );
           $('#i-search-input').FlowupLabels({
             feature_onInitLoad: true      ,
             class_focused:      'focused' ,
             class_populated:    'populated'
           });
           Fujb_init( "i-search-btndiv"  , "<i class=\"fa fa-search\" id=\"i-search-icon\"></i>" );
           Fujb_start( "i-search-btndiv" );
           Fcom_loadCss( "./load/css/search" );
         } catch( e ) {
           alert( e.stack );
         }
       }
     );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fsrh_start( tgt_id ) {
  try {
    $("#"+tgt_id).fadeIn();
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
