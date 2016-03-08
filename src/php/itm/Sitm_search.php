<?php
/**
 * @file Sitm_search.php
 */

/*** function ***/
function Fitm_search() {
  try {
    $ret = "test";
    if( false === isset($_POST["key"]) ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):invalid param' );
    }
    $ttl = $_POST["key"];
    $ret = Fdbd_getTableData( "tb_item" , "*" , "title='".$ttl."'" );
    
    return $ret;
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}


/* end of file */
