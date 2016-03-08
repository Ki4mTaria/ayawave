<?php
  require_once( dirname(__FILE__)."/../com/dbd/Sdbd_mysql.php" );
  try {
    var_dump( Fdbd_getTableData( "tb_item" , "*" , "id=1" ));
  } catch( Exception $e ) {
    echo $e->getMessage();
  }
