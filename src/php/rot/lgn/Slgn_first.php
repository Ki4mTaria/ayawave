<?php
/**
 * @file Slgn_first.php
 */
/*** require ***/
require_once "Net/URL/Mapper.php";
require_once ( dirname(__FILE__)."/../com/Srot_conts.php" );

/*** function ***/
function Flgn_first() {
  try {
    global $Grot_path;
    # Fcom_setLogInfo( "debug" , "Frot_lgnFirst : ".$Grot_path );
    $map = Net_URL_Mapper::getInstance();
    $map->connect('/:app/');
    $url = $map->match( $Grot_path );
    if ( $url ) {
      if( 0 === strcmp( $url["app"] , DROT_APP_NAME )  ) {
        /* '/ayawave/' request */
        $cont = Frot_getInit( DROT_INITTYP_BSC );
        Frot_setSession( DROT_SESROT_SUBSTT , DROT_SUBSTT_INI , true );
        echo $cont;
        return;
      } else {
        Frot_jumpFirst();
      }
    } else {
      Frot_jumpFirst();
    }
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}


/* end of file */
