<?php
  /**
   * @file Cfnc_return.php
   */
  
  class Cfnc_return extends Cfnc_flameExtd implements Cfnc_flameImpl {
    function __construct() {
      try {
        $this->prm_cnt = 2;
      } catch( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    
    public function exec( &$resp ) {
      try {
    //    $rsp_line = $resp->getLine();
    //echo "  chk:".$rsp_line.PHP_EOL;
        $item = new Crsp_item( array( $this->getPrm( 0 ) ) );
#    echo "  exec:".$this->getPrm(0).PHP_EOL;
         $func = $item->getFunc();
#    echo get_class($func).PHP_EOL;
         if( null === $func ) {
           throw new Exception('ERR(File:'.basename(__FILE__).',Line:'.__line__.')');
           return;
         }
         $func->exec( $resp );
         $this->setReturn( $func->getMatch() );
         
      } catch ( NotmatchException $nmth ) {
        throw $nmth;
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    
    private function setReturn( $match ) {
      try {
        global $Grsp_result;
        $key = $this->getPrm(1);
        foreach( $match as $mat ) {
#          echo "  match:".$mat.PHP_EOL;
          if( false === isset( $Grsp_result[$key] ) ) {
            $Grsp_result[$key] = $mat;
          } else {
            if( false === is_array( $Grsp_result[$key] ) ) {
              $buff = $Grsp_result[$key];
              $Grsp_result[$key]   = null;
              $Grsp_result[$key]   = array();
              $Grsp_result[$key][] = $buff;
              $Grsp_result[$key][] = $mat;
            } else {
              $Grsp_result[$key][] = $mat;
            }
          }
        }
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
  }
  
/* end of file */
