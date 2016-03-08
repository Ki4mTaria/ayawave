<?php
/*** require ***/
require_once( dirname(__FILE__)."/../com/dbd/Sdbd_mysql.php" );

/*** function ***/
function Fitm_getTitle() {
  try {
    $ret = Fdbd_getTableData( "tb_item" , "distinct title" , null );
    return $ret["title"];
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'() path:'.$path.PHP_EOL.$e->getMessage() );
  }
}


function Fitm_getConts( $id ) {
  try {
    $item    = Fdbd_getTableData( "tb_item"     , "*" , "id=".$id );
    $type    = Fdbd_getTableData( "tb_itemtype" , "*" , "typeid=".$item["typeid"][0] );
    $tagchk  = Fdbd_getTableData( "tb_itemtag"  , "*" , "itemid=".$id );
    $tag     = array();
    foreach( $tagchk["tagid"] as $tagid ) {
      $tag_buf = Fdbd_getTableData( "tb_tag" , "*" , "tagid=".$tagid );
      $tag[]   = $tag_buf["tag"][0];
    }
    $ret_val = array(
      "title" => $item["title"][0] ,
      "tag"   => $tag              ,
      "type"  => $type["type"][0]  ,
      "conts" => $item["conts"][0] ,
      "desc"  => $item["desp"][0],
    );
    return $ret_val;
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'() path:'.$path.PHP_EOL.$e->getMessage() );
  }
}

/* end of file */
