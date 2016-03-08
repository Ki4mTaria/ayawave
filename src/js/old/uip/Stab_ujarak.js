/**
 * @file tab_ujarak.js
 */
/*** initialize ***/
$(function(){
  try {
    if ( false == Fcom_isLoaded( DINI_LOAD_UJARAK_SWB ) ) {
      Fcom_startLoad( DINI_LOAD_UJARAK_SWB );
      Fcom_loadJs(
        [ "./load/js/ujarakswb" ] ,
        function() {
          try{Fcom_endLoad( DINI_LOAD_UJARAK_SWB );}
          catch(e){alert(e.stack);}
      );
    }
  } catch( e ) {
    alert( e.stack );
  }
});

/* end of file */
