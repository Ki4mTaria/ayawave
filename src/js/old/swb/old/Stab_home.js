/**
 * @file Svew_home.js
 */
/*** global ***/
var Gtab_firstHome = true;

/*** initialize ***/
$(function(){
  try {
    Ftab_setCallback( "i-home-tab" , function(){
      Ftab_clickHome();
    });
  } catch( e ) {
    alert( e.stack );
  }
});


/*** function ***/
function Ftab_clickHome() {
  try {
    if( true == Gtab_firstHome ) {
      Ftab_loadHomeBase(); 
      Gtab_firstHome = false;
    }
    
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
