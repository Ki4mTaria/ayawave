/**
 * @file Sitm_edtEvt.js
 */
/*** function ***/
function Fitm_update(){
  try {
    // get item contents
    var itm = Fiet_getConts();
    Fcom_printObj( itm );
    
    // check contents

    // confirm 

    // update item

    // i-itmfom-dlg
    // Ffom_setValue( "i-itmfom-ttl", "test" );
  } catch( e ) {
    alert( e.stack );
  }
}


function Fiet_getConts() {
  try {
    var sptag = Ffom_getValue( "i-itmfom-tag" );
    if( "" != sptag ) {
      sptag = sptag.split(",");
    }else {
      sptag = null;
    }
    var ret = {
      ttl : Ffom_getValue( "i-itmfom-ttl" )        ,
      tag : sptag                                  ,
      typ : Fswh_getSelConts( "i-itmfom-typ-swh" ) ,
      cnt : $("#i-itmfom-cnt-txt").val()           ,
      dsc : $("#i-itmfom-cnt-dsc").val()
    };
    return ret;
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
