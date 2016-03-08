<?php
/**
 * @file Sitm_ctrl.php
 */
/*** require ***/
require_once( dirname(__FILE__)."/../rot/com/Srot_define.php" );
require_once( dirname(__FILE__)."/Sitm_get.php" );
require_once( dirname(__FILE__)."/Sitm_add.php" );
require_once( dirname(__FILE__)."/Sitm_search.php" );

/*** define ***/
define ( "DITM_TYPE_TTL"  , "title" );
define ( "DITM_TYPE_TAG"  , "tag" );
define ( "DITM_TYPE_DATE" , "date" );
define ( "DITM_FCONT_SRH" , "search" );
define ( "DITM_FCONT_CNT" , "contents" );

/*** function ***/
function Fitm_ctrl( $cont ) {
  try {
    $ret = array();
    if ( 0 === strcmp( $cont , DROT_FCONT_GET ) ) {
      $ptype = $_POST["type"];
      if ( 0 === strcmp( $ptype , DITM_TYPE_TTL ) ) {
        $itm = Fitm_getTitle();
        $ret["ret"]     = true;
        $ret["ret_msg"] = $itm;
      }
    } else if ( 0 === strcmp($cont, DROT_FCONT_DEL) ) {
      
    } else if ( 0 === strcmp($cont, DROT_FCONT_ADD) ) {
      Fitm_addItem();
      $ret["ret"]     = true;
    } else if ( 0 === strcmp($cont, DITM_FCONT_SRH) ) {
      $ret["ret"]     = true;
      $ret["ret_msg"] = Fitm_search();
    } else if ( 0 === strcmp($cont, DITM_FCONT_CNT) ) {
      $ret["ret"]     = true;
      $ret["ret_msg"] = Fitm_getConts( $_POST["id"] );
    } else {
      $ret["ret"]     = false;
      $ret["ret_msg"] = "invalid function";
    }
    return $ret;
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}


/* end of file */
