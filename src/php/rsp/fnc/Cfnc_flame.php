<?php
  /**
   * @file Cfnc_flame.php
   */
  class Cfnc_flameExtd {
    private   $name    = null;
    protected $prm_cnt = 0;
    private   $prm     = array();
    
    public function setPrm( $p ) {
      try {
        $this->prm[] = $p;
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.$e->getMessage().PHP_EOL );
      }
    }
    
    protected function getPrm( $idx ) {
      try {
        return $this->prm[$idx];
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.$e->getMessage().PHP_EOL );
      }
    }
    
    public function getFuncName() {
      try {
        return $name;
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.$e->getMessage().PHP_EOL );
      }
    }
    
    public function getPrmCnt() {
      try {
        if( 0 === $this->prm_cnt ) {
          throw new Exception( "null parameter" );
        }
        return $this->prm_cnt;
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.$e->getMessage().PHP_EOL );
      }
    }
  }
  
  interface Cfnc_flameImpl {
    public function exec( &$resp );
  }
  /* end of file */
