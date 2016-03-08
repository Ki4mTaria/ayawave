<?php
  /**
   * @file Cfnc_if.php
   */
  
  class Cfnc_if extends Cfnc_flameExtd implements Cfnc_flameImpl {
    public function exec( &$resp ) {
      try {
        $rsp_line = $resp->getPrev();
        
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
  }
  
/* end of file */
