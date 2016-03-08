<?php
  /**
   * @file Cfnc_until.php
   */
  /*** responce ***/
  require_once( dirname(__FILE__)."/../Crsp_item.php" );
  require_once( dirname(__FILE__)."/Cfnc_xmorel.php" );
  require_once( dirname(__FILE__)."/Cfnc_return.php" );
  
  
  /*** define ***/
  define( "DUTL_ACTTP_ACTIVE"    , "act" );
  define( "DUTL_ACTTP_NOTACTIVE" , "nact" );
  
  class Cfnc_until extends Cfnc_flameExtd implements Cfnc_flameImpl {
    function __construct() {
      try {
        $this->prm_cnt = 3;
      } catch( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    public function exec( &$resp ) {
      try {
        $act_type = $this->getPrm( 0 );
        if ( 0 === strcmp( DUTL_ACTTP_ACTIVE , $act_type ) ) {
          /* active */
          $this->act( $resp );
        } else if ( 0 === strcmp( DUTL_ACTTP_NOTACTIVE , $act_type ) ) {
          /* not active */
          $this->nact( $resp );
        } else {
          throw new Exception("invalid action type");
        }
      } catch( EndRespExcp $end ) {
        throw $end;
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    
    private function act( &$resp ) {
      try {
        $chk = $this->getPrm( 1 );
        while( $line = $resp->getLine() ) {
#  echo "  chk:".$line;
//  echo "      ".$chk.PHP_EOL;
          $ret = preg_match( '.' .$chk. '.' , $line , $match );
          if( 1 !== $ret ) {
            $resp->prevLine();
            $this->mainFunc( $resp );
          } else {
#  echo "until active is end".PHP_EOL;
            return;
          }
        }
      } catch ( EndRespExcp $end ) {
        throw $end;
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    
    private function nact( &$resp ) {
      try {
        $chk = $this->getPrm( 1 );
        while( $line = $resp->getLine() ) {
#  echo "  chk:".$line;
          
          if( 1 === preg_match( '^' .$chk. '^' , $line , $match ) ) {
            $resp->prevLine();
            $this->mainFunc( $resp );
            return;
          }
        }
      } catch ( EndRespExcp $end ) {
        throw $end;
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    
    private function mainFunc( &$resp ) {
      try {
        //echo $line;
        $item = new Crsp_item( array( $this->getPrm( 2 ) ) );
#  echo "  exec:".$this->getPrm( 2 ).PHP_EOL;
        $func = $item->getFunc();
#  echo get_class($func).PHP_EOL;
        
        if( null === $func ) {
          $resp->getLine();
          return;
        }
        $func->exec( $resp );
      } catch ( Exception $e ) {
        throw $e;
      }
    }
  }
  
/* end of file */
