/**
 * @file Sedt_ctrl.js
 */
/*** initialize ***/
$(function(){
  try {
    Fedt_setBodyClickEvent();
  } catch ( e ) {
    alert( e.stack );
  }
});


/*** global ***/
var Gedt_editorClick = false;

/*** function ***/
function Fedt_clickEditor() {
  try {
    Gedt_editorClick = true;
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fedt_setBodyClickEvent() {
  try {
     $("body").click(function(){
      try {
        if( true == Gedt_editorClick ) {
          Fedt_startCursor();
          Gedt_editorClick = false;
        } else {
          Fedt_stopCursor();
        }
      }
      catch(e){alert( e.stack );}
    });
  } catch ( e ) {
    alert( e.stack );
  }
}


/* end of file */
