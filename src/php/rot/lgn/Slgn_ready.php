<?php
/**
 * @file Slgn_ready.php
 */
/*** require ***/
require_once "Net/URL/Mapper.php";
require_once( dirname(__FILE__)."/../../ath/Sath_ctrl.php" );
require_once( dirname(__FILE__)."/../../com/Scom_log.php" );

/*** define ***/
define( "DROT_LGDIN_USER" , "user" );

/*** function ***/
function Flgn_ready() {
  try {
    global $Grot_path;
    Fcom_setLogInfo( "debug" , "login ready:".$Grot_path );
    $map   = Net_URL_Mapper::getInstance();
    $map->connect('/:app/:func/:type/:cont');
    $url = $map->match( $Grot_path );
    if( $url ) {
      if ( (0 !== strcmp( $url["app"]  , DROT_APP_NAME )) ||
           (0 !== strcmp( $url["func"] , DROT_FUNC_FNC )) ) {
        Frot_jumpFirst();
      }
      if ( 0 === strcmp( $url["type"] , DROT_FTYPE_ATH )) {
        $ret = Fath_ctrl( $url["cont"] );
        echo json_encode( $ret );
        return;
      }
    } else {
      # Fcom_setLogInfo( DCOM_LOGLV_ERR , "".$Grot_path );
      Fapp_jumpFirst();
    }
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}

/* end of file */
