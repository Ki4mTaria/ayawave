<?php
require_once( dirname(__FILE__)."/Sdbd_mysql.php" );


try {
  //$test = Fdbd_getTableData( "tb_itemtype" , "type=\"command\"" );
   //$test = Fdbd_getTableData( "tb_item" , "max(id)" , "title=\"fdsaf\" and typeid=3 and conts=\"fadsfd\"" );

  // $test = Fdbd_getRow( "tb_tag" , "tag=\"test\"" );
  $test = Fdbd_getTableData( "tb_item" , "distinct title" , null );
  var_dump( $test );
  $dat = array(
    "title"  => "test"    ,
    "typeid" => 3 ,
    "conts"  => "contents"    ,
    "desp"   => "test"
  );
  //Fdbd_insert( "tb_item" , $dat );
  
  
  
} catch( Exception $e ) {
  echo $e->getMessage();
}


