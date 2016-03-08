<?php
/**
 * @file Srot_app.php
 */
/*** require ***/
require_once( dirname(__FILE__)."/../../com/Scom_log.php" );
require_once( dirname(__FILE__)."/Sapp_first.php" );
require_once( dirname(__FILE__)."/Sapp_init.php" );
require_once( dirname(__FILE__)."/Sapp_ready.php" );

/*** function ***/
function Fapp_ctrl() {
    try {
      global $Grot_path;
      # Fcom_setLogInfo( DCOM_LOGLV_DBG , "app func:".$Grot_path );
      
      $sub_stt = Frot_getSession( DROT_SESROT_SUBSTT );
      if( null === $sub_stt ) {
        Frot_setSession( DROT_SESROT_SUBSTT , DROT_SUBSTT_FST );
        $sub_stt = Frot_getSession( DROT_SESROT_SUBSTT );
      }
      if( 0 === strcmp( $sub_stt , DROT_SUBSTT_FST ) ) {
        # Fcom_setLogInfo( DCOM_LOGLV_DBG , "first func" );
        Fapp_first();
        return;
      } elseif( 0 === strcmp( $sub_stt , DROT_SUBSTT_INI ) ) {
        Fapp_init();
        return;
      } elseif( 0 === strcmp( $sub_stt , DROT_SUBSTT_RDY ) ) {
        # Fcom_setLogInfo( DCOM_LOGLV_DBG , 'call Fapp_ready' );
        Fapp_ready();
        return;
      } else {
        Fapp_jumpFirst();
      }
    } catch( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'() path:'.$path.PHP_EOL.$e->getMessage() );
    }
}

function Fapp_jumpFirst() {
  try {
    global $Grot_path;
    Fcom_setLogInfo( DCOM_LOGLV_DBG , "app jump first:".$Grot_path );
    
    $user = Frot_getSession( "user" );
    # Frot_logSession();
    Frot_resetSession();
    if( null === $user ) {
      header( 'Location: http://'.DROT_HOST.'/'.DROT_APP_NAME );
      exit;
    }
    Frot_setSession( DROT_SESROT_STT    , DROT_STT_APP , false );
    Frot_setSession( DROT_SESROT_SUBSTT , DROT_SUBSTT_FST , false );
    Frot_setSession( DROT_LGDIN_USER    , $user , false );
    
    header( 'Location: http://'.DROT_HOST.'/'.DROT_APP_NAME.'/' );
    exit;
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}

/* end of file */
