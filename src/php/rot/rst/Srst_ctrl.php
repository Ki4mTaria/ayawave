<?php
  /**
   * @file Srst_ctrl.php
   */
  /*** require ***/
  require_once( dirname(__FILE__)."/../../com/Scom_log.php" );
  require_once( dirname(__FILE__)."/../com/Srot_define.php" ); 
  require_once( dirname(__FILE__)."/../../com/dbd/Sdbd_mysql.php" );
  require_once( dirname(__FILE__)."/../../itm/Sitm_define.php" );

  #Frst_isRestRequest( "/ayawave/rest/test" , null );
  
  /*** function ***/
  function Frst_isRestRequest( $uri , $prm ) {
    try {
      // basic uri check
      $exp_uri = explode( "/" , $uri );
      if( 0 !== strcmp( $exp_uri[0] , "" ) ) {
        return false;
      }
      if( 0 !== strcmp( $exp_uri[1] , DROT_APP_NAME ) ) {
        return false;
      }
      if( 0 !== strcmp( $exp_uri[2] , "rest" ) ) {
        return false;
      }
      
      // check post param
      if( false === isset( $_POST["token"] ) ) {
        
        return false;
      }
      if( false === isset( $_POST["tag"] ) ) {
        return false;
      }
      return true;
      //Fcom_setLogInfo( "debug" , $chk_uri );
      //Fcom_setLogInfo( "debug" , $uri );
    } catch( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
  function Frst_getItemRow( $uri ) {
    try {
      $chk_uri = "";
      $exp_uri = explode( "/" , $uri ); 
      for ( $lpexp=3; $lpexp < count($exp_uri) ; $lpexp++ ) {
        $chk_uri .= $exp_uri[$lpexp];
        if( $lpexp !== count($exp_uri)-1 ) {
          $chk_uri .= "/";
        }
      }
      $ret = Fdbd_getRow( DITM_TBNAME_ITEM , "title='" . $chk_uri . "'" );
      return $ret;
    } catch ( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
  function Frst_getItemId( $row, $tag ) {
    try {
      $nmat = false;
      foreach( $row["id"] as $itm_id ) {
        $dtag = Fdbd_getRow( "tb_itemtag" , "itemid=" . $itm_id );
        if( count($dtag["tagid"]) !== count($tag) ) {
          continue;
        }
        $nmat = false;
        for($loop=0; $loop < count($tag) ;$loop++) {
          $dtag_db = Fdbd_getRow( "tb_tag" , "tagid=".$dtag["tagid"][$loop] );
          if( 0 !== strcmp( $dtag_db["tag"][$loop] , $tag[$loop] ) ) {
            $nmat = true;
            break;
          }
        }
        if( false === $nmat ) {
          return $itm_id;
        }
      }
      return null;
    } catch ( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
  function Frst_callTarget( $uri, $prm ) {
    try {
      $ret = array();
      // check item title
      $row = Frst_getItemRow( $uri );
      if( null === $row ) {
        $ret["ret"] = false;
        $ret["msg"] = "can not find item";
        return $ret;
      }
      $itm_id = Frst_getItemId( $row , $prm["tag"] );
      if( null === $itm_id ) {
        $ret["ret"] = false;
        $ret["msg"] = "not hit item";
        return $ret;
      }
      
      for( $loop=0; $loop < count($row["id"]); $loop++ ) {
        if( $row["id"][$loop] === $itm_id ) {
          /* call function */
          if( 0 === strcmp( "1" , $row["typeid"][$loop] ) ) {
            // get-text
            $ret["ret"] = true;
            $ret["msg"] = $row["conts"][$loop];
            return $ret;
          } else if( 0 === strcmp( "2", $row["typeid"][$loop] ) ) {
            // analyze-text
            require_once( dirname(__FILE__)."/../../rsp/Srsp_engine.php" );
            if( false === isset( $prm["resp"] ) ) {
              $ret["ret"]  = false;
              $ret["msg"] = "invalid param";
              return $ret;
            }
            $result = Frsp_iface( $_POST["resp"] , $row["conts"][$loop] );
            $ret["ret"] = true;
            $ret["msg"] = $result;
            return $ret;
          } else {
            $ret["ret"]  = false;
            $ret["msg"] = "can not find function";
            return $ret;
          }
        }
      }
    } catch ( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
