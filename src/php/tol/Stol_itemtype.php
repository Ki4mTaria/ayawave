<?php
  /*** require ***/
  require_once( dirname(__FILE__)."/../com/dbd/Sdbd_mysql.php" );
  require_once( dirname(__FILE__)."/../itm/Sitm_define.php" );
  
  try {
    Fdbd_delete( DITM_TBNAME_ITMTYPE );
    $type = array(
      "type" => DITM_ITYPVAL_CMD
    );
    Fdbd_insert( DITM_TBNAME_ITMTYPE , $type );
    $type["type"] = DITM_ITYPVAL_RESP;
    Fdbd_insert( DITM_TBNAME_ITMTYPE , $type );
  } catch( Exception $e ) {
    echo $e->getMessage();
  }
  
