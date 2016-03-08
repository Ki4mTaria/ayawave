<?php
/**
 * @file Sitm_new.php
 */
/*** require ***/
require_once( dirname(__FILE__)."/../com/dbd/Sdbd_mysql.php" );
require_once( dirname(__FILE__)."/../com/Scom_log.php" );
require_once( dirname(__FILE__)."/Sitm_define.php" );


/*** function ***/
function Fitm_addItem() {
  try {
  #Fcom_setLogInfo( "debug" , "type:".$_POST['typ'] );
    $typeid = Fitm_getTypeid( $_POST['typ'] );
  #  Fcom_setLogInfo( "debug" , "addItem:".$typeid );
    
    $ttl = $_POST['ttl'];
    $cnt = $_POST['cnt'];
    if( false === isset( $_POST['dsc'] ) ) {
      $dsc = "";
    } else {
      $dsc = $_POST['dsc'];
    }
    if( false === isset( $_POST['tag'] ) ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):not find tag' );
    }
    $dat = array(
      "title"  => $ttl    ,
      "typeid" => $typeid ,
      "conts"  => $cnt    ,
      "desp"   => $dsc
    );
    Fdbd_insert( DITM_TBNAME_ITEM , $dat );
    $where  = "title=\"".$ttl."\"";
    $where .= " and typeid=".$typeid;
    #$where .= " and conts=\"".$cnt."\"";
    $where .= " and desp=\"".$dsc."\"";

    $max = Fdbd_getTableData( DITM_TBNAME_ITEM , "max(id)" , $where );
    Fcom_setLogInfo( "debug" , $max["max(id)"][0] );
    
    Fitm_setItemTag( $max["max(id)"][0] );
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}

function Fitm_getTypeid( $typ ) {
  try {
    if( 0 === strcmp( $typ , DITM_ITYPVAL_CMD ) ) {
      $row = Fdbd_getRow( DITM_TBNAME_ITMTYPE , "type=\"".DITM_ITYPVAL_CMD."\"" );
    } else if( 0 === strcmp( $typ , DITM_ITYPVAL_RESP ) ) {
      $row = Fdbd_getRow( DITM_TBNAME_ITMTYPE , "type=\"" . DITM_ITYPVAL_RESP ."\"" );
    } else {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           'invalid item type '.$typ );
    }
    return $row["typeid"][0];
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}

function Fitm_setItemTag( $itemid ) {
  try {
    if( false === isset( $_POST['tag'] ) ) {
      return;
    }
    $ptag = $_POST['tag'];
    foreach( $ptag as $t_elm ) {
      $tag = Fdbd_getRow( DITM_TBNAME_TAG , "tag=\"".$t_elm."\"" );
      if( null === $tag ) {
        Fdbd_insert( DITM_TBNAME_TAG , array( "tag"=>$t_elm ));
        $max   = Fdbd_getTableData( DITM_TBNAME_TAG , "max(tagid)" , "tag=\"" .$t_elm. "\"" );
        $tagid = $max["max(tagid)"][0];
      } else{
        $tagid = $tag["tagid"][0];
      }
      $t_dat = array(
        "itemid" => $itemid ,
        "tagid"  => $tagid
      );
      Fdbd_insert( DITM_TBNAME_ITMTAG , $t_dat );
    }
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}


