<?php
  /**
   * @file Cfnc_xmorel.php
   */
  
  class Cfnc_xmorel extends Cfnc_flameExtd implements Cfnc_flameImpl {
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
        //$rsp_line = $resp->getLine();
        $type     = $this->getPrm(0);
        if( 0 === strcmp( "*" , $type ) ) {
          $item = new Crsp_item( array( $this->getPrm( 1 ) ) );
#    echo "  exec:".$this->getPrm(1).PHP_EOL;
          $func = $item->getFunc();
#    echo get_class($func).PHP_EOL; 
          if( null === $func ) {
            throw new Exception('ERR(File:'.basename(__FILE__).',Line:'.__line__.')');
            return;
          }
          try {
            $func->exec( $resp );
          } catch ( NotmatchException $nmth ) {}
        } else {
          throw new Exception( "invalid type".$type );
        }
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
  }
  
/* end of file */
