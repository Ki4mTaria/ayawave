<?php
  /**
   * @file Srot_session.php
   */
  /*** function ***/
//  function Frot_addSession( $s_idx ) {
//    try {
//      foreach( $_ as $idx ) {
//        if( 0 === strcmp( $s_idx , $idx ) ) {
//          throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
//                               'already added index:'.$s_idx.PHP_EOL );
//        }
//      }
//      if( !isset( $_SESSION[$s_idx] ) ) {
//        $ses_dat = null;
//      } else {
//        $ses_dat = $_SESSION[$s_idx];
//      }
//      $Grot_idxList[$s_idx] = $ses_dat;
//      if( null === $ses_dat ) {
//        session_regenerate_id( false );
//        $_SESSION[$s_idx]     = DROT_SESVAL_INI;
//        $Grot_idxList[$s_idx] = DROT_SESVAL_INI;
//      }
//    } catch( Exception $e ) {
//      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
//                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
//    }
//  }
  
  function Frot_getSession( $s_idx ) {
    try {
      if ( !isset( $_SESSION[$s_idx] ) ) {
        return null;
      }
      return $_SESSION[$s_idx];
    } catch( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
  function Frot_setSession( $s_idx , $val , $flg=true ) {
    try {
      if( false === $flg ) {
        #session_regenerate_id( false );
        $_SESSION[$s_idx] = $val;
        return;
      }
      $lst_buf = array();
      foreach( $_SESSION as $key => $buf ) {
        $lst_buf[$key] = $buf;
      }
      Frot_resetSession();
      foreach( $lst_buf as $idx => $buf2 ) {
        $_SESSION[$idx] = $buf2;
      }
      
      $_SESSION[$s_idx]     = $val;
    } catch( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'('.$s_idx.','.$val.','.$flg.')'.PHP_EOL.$e->getMessage() );
    }
  }
  
  function Frot_resetSession() {
    try {
      session_regenerate_id( true );
      foreach( $_SESSION as $key => $val ) {
        unset( $_SESSION[$key] );
      }
    } catch( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
  function Frot_chkSession( $s_idx ) {
    try {
      return isset( $_SESSION[$s_idx] );
    } catch( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
  function Frot_logSession() {
  try {
    Fcom_setLogInfo( DCOM_LOGLV_DBG ,  '--- print session ---' );
    foreach( $_SESSION as $key => $val ) {
      Fcom_setLogInfo( DCOM_LOGLV_DBG ,  '   '.$key.':'.$val );
    }
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}
  
/* end of file */
