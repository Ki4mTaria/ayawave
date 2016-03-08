<?php
  /**
   * @file Srot_login.php
   */
  /*** require ***/
  require_once( dirname(__FILE__)."/Slgn_first.php" );
  require_once( dirname(__FILE__)."/Slgn_init.php" );
  require_once( dirname(__FILE__)."/Slgn_ready.php" );
  require_once( dirname(__FILE__)."/../../com/Scom_log.php" );
    
  /*** function ***/
  function Flgn_ctrl() {
    try {
      global $Grot_path;
      global $Grot_state;
      # Frot_logSession();
      $sub_sts = Frot_getSession( DROT_SESROT_SUBSTT );
      if( null === $sub_sts  ) {
        Frot_setSession( DROT_SESROT_SUBSTT , DROT_SUBSTT_FST , false );
        $sub_sts = DROT_SUBSTT_FST;
      }
      if( 0 === strcmp( $sub_sts , DROT_SUBSTT_FST ) ) {
        # Fcom_setLogInfo( "debug" , "first:".$Grot_path );
        Flgn_first();
        return;
      } else if( 0 === strcmp( $sub_sts , DROT_SUBSTT_INI ) ) {
        # Fcom_setLogInfo( "debug" , "init:".$Grot_path );
        Flgn_init();
        return;
      } else if( 0 === strcmp( $sub_sts , DROT_SUBSTT_RDY ) ) {
        # Fcom_setLogInfo( "debug" , "ready:".$Grot_path );
        Flgn_ready();
        return;
      } else {
        Frot_jumpFirst();
        return;
      }
    } catch( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
  function Frot_jumpFirst() {
    try {
      global $Grot_pathl;
      Fcom_setLogInfo( "debug" , "jump first:".$Grot_path );
      Frot_resetSession();
      Frot_setSession( DROT_SESROT_STT    , DROT_STT_LGN , true );
      Frot_setSession( DROT_SESROT_SUBSTT , DROT_SUBSTT_FST , true );
      header( 'Location: http://'.DROT_HOST.'/'.DROT_APP_NAME.'/' );
      exit;
    } catch( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
/* end of file */
