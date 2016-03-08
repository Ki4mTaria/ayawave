/**
 * @file Snew_add.js
 */
/*** global ***/
var Gnew_loadDlg = false;

/*** function ***/
function Fnew_chkConts( fom_val ) {
  try {
    var conts = Fnew_getConts();
    // check title
    if( "" == conts.ttl ) {
      Fcnt_showNewErr( "Please enter the item Title" );
      Ffom_backColor( "i-newfom-ttl" , "pink" );
      return false;
    }
    Ffom_backColor( "i-newfom-ttl" , "" );
    
    // tag
    if( null != conts.tag ) {
      var lptag = 0;
      for(lptag=0; lptag < conts.tag.length ;lptag++) {
        if( (""   == conts.tag[lptag]) ||
            (null == conts.tag[lptag]) ) {
          Fcnt_showNewErr( "Invalid tag specipy" );
          Ffom_backColor( "i-newfom-tag" , "pink" );
          return false;
        }
      }
    }else {
      Fcnt_showNewErr( "Please specify the tag" );
      Ffom_backColor( "i-newfom-tag" , "pink" );
      return false;
    }
    Ffom_backColor( "i-newfom-tag" , "" );
    
    // type 
    if( null == conts.typ ) {
      Fcnt_showNewErr( "Please select item type" );
      return false;
    }
    // contents
    if ( "" == conts.cnt ) {
      Fcnt_showNewErr( "Please enter the item Contents" );
      $( "#i-newfom-cnt-txt" ).css( "background" , "pink" );
      return false;
    }
    Fcnt_showNewErr(null);
    $( "#i-newfom-cnt-txt" ).css( "background" , "" );
    return true;
  } catch( e ) {
    alert( e.stack );
  }
}

function Fnew_addItem() {
  try {
    Fcom_loadJs(
      ["./src/js/modaldlg"] ,
      function() {
        try {
          if( false == Gnew_loadDlg ) { 
            Fmdg_initConfirm( "i-newfom-dlg" , "Are you sure ?" );
            Fmdg_setBtnEvent( "i-newfom-dlg" , 0 , function(){
              var conts = Fnew_getConts();
              Fjsn_sendPost( "./func/item/add" , conts , function(ret) {
              });
            });
            Gnew_loadDlg = true;
          }
          Fmdg_open( "i-newfom-dlg" );
        } catch(e) { alert(e.stack); }
      }
    );
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fnew_getConts() {
  try {
    var sptag = Ffom_getValue( "i-newfom-tag" );
    if( "" != sptag ) {
      sptag = sptag.split(",");
    }else {
      sptag = null;
    }
    var ret = {
      ttl : Ffom_getValue( "i-newfom-ttl" )        ,
      tag : sptag                                  ,
      typ : Fswh_getSelConts( "i-newfom-typ-swh" ) ,
      cnt : $("#i-newfom-cnt-txt").val()           ,
      dsc : $("#i-newfom-cnt-dsc").val()
    };
    return ret;
  } catch( e ) {
    alert( e.stack );
  }
}


/* end of file */
