/**
 * @file Stab_create.js
 */
/*** global ***/
var Gtab_firstCreate = true;

/*** initialize ***/
$(function(){
  try {
    Ftab_setCallback( "i-create-tab" , function(){
      Ftab_clickCreate();
    });
  } catch( e ) {
    alert( e.stack );
  }
});

/*** function ***/
function Ftab_clickCreate() {
  try {
    if( true == Gtab_firstCreate ) {
      Fcom_loadJs(
        [ "./load/js/vtb_create" ] ,
        function(){
          try {
            Ftab_loadCreateBase();
            Ftab_loadCodeEditor();
          }catch(e){ alert(e.stack); }
        }
      );
      Gtab_firstCreate = false;
    }
  } catch( e ) {
    alert( e.stack );
  }
}

function Ftab_loadCodeEditor() {
  try {
    Fcom_loadJs(
      [ "./load/js/edt_ctrl"   ,
        "./load/js/edt_view"   ,
        "./load/js/edt_model" ] ,
      function(){
        try {
          
        }catch(e){ alert(e.stack); }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
