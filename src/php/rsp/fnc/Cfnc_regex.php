<?php
  /**
   * @file Cfnc_regex.php
   */
  /*** require ***/
  require_once( dirname(__FILE__)."/Cfnc_flame.php" );
  
  class Cfnc_regex extends Cfnc_flameExtd implements Cfnc_flameImpl {
    private $match = null;
    public function exec( &$resp ) {
      try {
        $itm_line  = $this->getPrm( 0 );
        $resp_line = $resp->getLine();
#  echo "  chk:".$resp_line;
#var_dump( $itm_line );
        if( 1 !== preg_match( '.' .$itm_line. '.' , $resp_line , $this->match ) ) {
#  echo "  exec:  is not match".PHP_EOL;
          $this->match = null;
          throw new NotMatchException( $itm_line );
        }
#  echo "  exec: is match".PHP_EOL;
      } catch ( NotmatchException $nmth ) {
        throw $nmth;
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    
    public function getMatch() {
      try {
        return $this->match;
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
  }
  
/* end of file */
