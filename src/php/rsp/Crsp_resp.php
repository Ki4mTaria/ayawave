<?php
  /**
   * @file Crsp_resp.php
   */
  class Crsp_resp {
    private $resp    = null;
    private $idx = 0;
    function __construct( $r ) {
      try {
        $this->resp = $r;
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    
    public function getRespCnt() {
      try {
        return count( $this->resp );
      } catch( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    
    public function getLine() {
      try {
        if( $this->idx >= count($this->resp) ) {
          throw new EndRespExcp();
        }
        $ret_val = $this->resp[$this->idx];
        $this->idx++;
        return $ret_val;
      } catch ( EndRespExcp $end ) {
        throw $end;
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    
    public function prevLine() {
      try {
        if( $this->idx <= 0 ) {
          throw new Exception( "prev:out of list" );
        }
        $this->idx = $this->idx - 1;
        return $this->resp[$this->idx];
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
  }
  
  /* end of file */
