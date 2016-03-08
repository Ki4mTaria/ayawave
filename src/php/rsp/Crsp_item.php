<?php
  /**
   * @file Crsp_item.php
   */
  /*** require ***/
  require_once( dirname(__FILE__)."/fnc/Cfnc_regex.php" );
  #require_once( dirname(__FILE__)."/fnc/Cfnc_until.php" );
  
  
  /*** gloval ***/
  $Grsp_funcLst = array(
    "until"  ,
    "reserv" ,
    "return" ,
    "if"     ,
    "xmorel" ,
    "prm"
  );
  
  /*** class ***/
  class Crsp_item {
    private $item = null;
    private $idx  = 0;
    private $pos  = 0;
    function __construct( $i ) {
      try {
        $this->item = $i;
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    
    public function getFunc() {
      try {
        if( $this->idx >= count($this->item) ) {
          return null;
        }
        $itm_line = $this->item[$this->idx];
        $atm_pos  = strpos( $itm_line , "@" , $this->pos );
        if( false === $atm_pos ) {
          /* there is no func in the item line */
          if( 0 === strlen($itm_line) ) {
            return null;
          }
          $ret = new Cfnc_regex();
          $ret->setPrm( $itm_line );
          $this->nextLine();
          return $ret;
        } else {
          if( ($this->pos === 0) &&
              ($atm_pos !== 0) ) {
            throw new Exception("non support");
//            $sub_itm = substr( $itm_line , $this->pos , $atm_pos );
//            if ( false === $sub_itm ) {
//              throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.')' );
//            }
//            $this->pos = $atm_pos;
//            $ret =  new Crsp_regex();
//            $ret->setPrm( $sub_itm );
//            return;
          } else {
            $func_nm = "Cfnc_".$this->getFuncName( $atm_pos );
            require_once( dirname(__FILE__)."/fnc/".$func_nm.".php" );
            $ret     = new $func_nm();
            for( $loop=0 ; $loop < $ret->getPrmCnt() ; $loop++ ) {
              $ret->setPrm( $this->getFuncParam($itm_line) );
            }
            $this->nextLine();
            return $ret;
          }
        }
//        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.')' );
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    
    private function nextLine() {
      try {
        $this->idx++;
        $this->pos = 0;
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    
    private function getFuncParam( $itm_line ) {
      try {
        $ret_val = "";
        $scp_cnt = 0;
        for( ; $this->pos < strlen($itm_line) ; $this->pos++ ) {
          if( 0 === strcmp( "{" , $itm_line{$this->pos} ) ) {
            $scp_cnt++;
            if( 2 <= $scp_cnt ) {
              $ret_val .= $itm_line{$this->pos};
            }
          } else if( "}" === $itm_line{$this->pos} ) {
            $scp_cnt--;
            if( 0 === $scp_cnt ) {
              $this->pos++;
              break;
            } else {
              $ret_val .= $itm_line{$this->pos};
            }
          }else {
            if( 0 === $scp_cnt ) {
              throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.')' );
            }
            $ret_val .= $itm_line{$this->pos};
          }
        }
        return $ret_val;
       //   $pat_str .= "{[a-zA-Z0-9]*}";
        
       // preg_match( '^'.$pat_str.'^' , $itm_line , $match );
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
    
    private function getFuncName( $atm_pos ) {
      try {
        $Grsp_funcLst = array(
          "until"  ,
          "reserv" ,
          "return" ,
          "if"     ,
          "xmorel"
        );
        $itm_line = $this->item[$this->idx];
        
        /* start func search */
        foreach( $Grsp_funcLst as $func ) {
          $chk_pos = strpos( $itm_line , "@".$func , $atm_pos );
          if( 0 === $chk_pos ) {
            $this->pos .= strlen( "@".$func );
            return $func;
          }
        }
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):could not be found function name:'.
                              $itm_line.PHP_EOL );
      } catch ( Exception $e ) {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
      }
    }
  }
  
  /* end of file */
