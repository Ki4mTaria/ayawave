/**
 * @brief header loader
 */
/*** initialize ***/
$(function(){
  try {
    Fuil_loadHeader();
  } catch( e ) {
    alert( e.stock );
  }
});


/*** function ***/

function Fuil_loadHeader() {
  try {
    Fcom_loadHtml(
      "./load/html/header" ,
      "i-hdr" ,
      function(){
        try {
          Fcom_loadCss( "./load/css/header" );
          Fvew_setBorder( false );
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fuil_showTitle( ttl ) {
  try {
    $( "#i-hdr-conts-left" ).text( ttl );
  } catch( e ) {
    alert( e.stack );
  }
}

function Fvew_setBorder( flg ) {
  try {
    if ( true === flg ) {
      $( "#i-hdr" ).css( "border-bottom" , "1px solid black" );
    } else {
      $( "#i-hdr" ).css( "border-bottom" , "0px" );
    }
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
