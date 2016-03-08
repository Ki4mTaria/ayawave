/**
 * @file Sitm_edtIni.js
 */
/*** initialize ***/
$(function(){
  try {
    Fcom_endLoad( DINI_LOAD_CNT );
  } catch( e ) {
    alert( e.stack );
  }
});

/*** function ***/
function Fitm_setItmConts( itmid ) {
  try {
    // get item info
    var data = {
      id : itmid
    }
    Fjsn_sendPost(
      "./func/item/contents",
      data,
      function( ret ) {
        try {
          if( (false == ret.ret) || (null == ret.ret_msg) ) {
            return;
          }
          // set item common
          Ffom_setValue( "i-itmfom-ttl", ret.ret_msg.title );
          $("#i-itmfom-cnt-txt").val( ret.ret_msg.conts );
          $("#i-itmfom-dsc-txt").val( ret.ret_msg.desp );
          // set tag
          var loop    = 0;
          var tag_str = ""; 
          for( loop=0;loop < ret.ret_msg.tag.length ; loop++ ) {
            tag_str += ret.ret_msg.tag[loop];
            if( loop < ret.ret_msg.tag.length-1 ) {
              tag_str += ",";
            }
          }
          Ffom_setValue( "i-itmfom-tag", tag_str );
          // set type
          var type = 0;
          if( "get-text" == ret.ret_msg.type ) {
            type = 0;
          } else if( "analyze-text" == ret.ret_msg.type ) {
            type = 1;
          }
          Fswh_select( "i-itmfom-typ-swh" , type );
          //Fswh_switchSel(  );
        } catch( e ) {
          alert( e.stack );
        }
      }
    );
  } catch( e ) {
    alert( e.stack );
  }
}
/* end of file */
