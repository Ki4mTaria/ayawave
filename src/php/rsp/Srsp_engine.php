<?php
  /**
   * @file Srsp_engine.php
   */
  /*** require ***/
  require_once( dirname(__FILE__)."/Srsp_exception.php" );
  require_once( dirname(__FILE__)."/Crsp_resp.php" );
  require_once( dirname(__FILE__)."/Crsp_item.php" );
  
  /*** global ***/
  $Grsp_result = array();
  
  /*** function ***/
  function Frsp_iface( $text , $item ) {
    try {
      $sp_item  = preg_split( "/\\n\\r|\\r|\\n/", $item );
      $set_item = array();
      foreach( $sp_item as $item_line ) {
        $set_item[] = $item_line.PHP_EOL;
      }
      $sp_text  = preg_split( "/\\n\\r|\\r|\\n/", $text );
      $set_text = array();
      foreach( $sp_text as $text_line ) {
        $set_text[] = $text_line.PHP_EOL;
      }
      return Frsp_parseResp( $set_text , $set_item );
    } catch( Exception $e ) {
       throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
  /**
   * @fn     Frsp_parseResp
   * @brief  parse responce
   * @param  resp : responce string (index array)
   * @param  item : item string (index array)
   * @return parsed object
   */
  function Frsp_parseResp( $resp , $item ) {
    try {
      global $Grsp_result;
      
      $resp = new Crsp_resp( $resp );
      $item = new Crsp_item( $item );
      for ( $loop=0 ; $loop < $resp->getRespCnt() ; $loop++ ) {
        $func = $item->getFunc();
        if( null === $func ) {
          break;
        }
# echo get_class($func)." -> exec()".PHP_EOL;
        $func->exec( $resp );
      }
      $Grsp_result["alz_ret"] = true;
      return $Grsp_result;
    } catch ( EndRespExcp $end ) {
      $Grsp_result["alz_ret"] = true;
      return $Grsp_result;
    } catch ( NotMatchException $nmth ) {
      $Grsp_result["alz_ret"] = false;
      $Grsp_result["alz_msg"] = $nmth->getMessage();
      return $Grsp_result;
    } catch ( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
/* end of file */
