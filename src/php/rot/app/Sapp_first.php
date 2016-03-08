<?php
/**
 * @file Sapp_first.php
 */
/*** require ***/
require_once "Net/URL/Mapper.php";

/*** function ***/
function Fapp_first() {
  try {
    global $Grot_path;
    # Fcom_setLogInfo( "debug" , "app first:".$Grot_path );
    $map = Net_URL_Mapper::getInstance();
    $map->connect('/:app/');
    $url = $map->match( $Grot_path );
    if ( $url ) {
      /* match */
      /* check func */
      if( 0 === strcmp( $url["app"] , DROT_APP_NAME ) ) {
        /* '/ayawave' request */
        $cont = Frot_getInit( DROT_INITTYP_BSC );
        Frot_setSession( DROT_SESROT_SUBSTT , DROT_SUBSTT_INI , false );
        echo $cont;
        return;
      } else {
        /* func is not app */
        Fapp_jumpFirst();
      }
    } else {
      Fapp_jumpFirst();
    }
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}


/* end of file */
