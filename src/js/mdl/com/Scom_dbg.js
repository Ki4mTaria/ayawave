/**
 * @file Scom_dbg.js
 */
/*** function ***/
function Fcom_printObj( obj ) {
  var properties = "";
  for ( var prop in obj ) {
    properties += prop + "=" + obj[prop] + "\n";
  }
  alert( properties );
}

/* end of file */
