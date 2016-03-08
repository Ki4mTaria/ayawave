<?php
/**
 * @file Slgn_init.php
 */
/*** require ***/
require_once "Net/URL/Mapper.php";
require_once ( dirname(__FILE__)."/../com/Srot_conts.php" );

/*** function ***/
function Flgn_init() {
  try {
    global $Grot_path;
    $map   = Net_URL_Mapper::getInstance();
    $map->connect('/:app/:func/:type/:cont');
    $npurl = Frot_getNoprmPath( $Grot_path );
    $url   = $map->match( $npurl );
    # Fcom_setLogInfo( "debug" , "Flgn_init:".$Grot_path );
    if( $url ) {
      if ( 0 !== strcmp( $url["app"]  , DROT_APP_NAME ) ) {
        Fcom_setLogInfo( DCOM_LOGLV_ERR , "invalid function ".$Grot_path );
        Fapp_jumpFirst();
      }
      if( 0 === strcmp( $url["func"] , DROT_FUNC_SRC ) ) {
        Flgn_iniSrc( $url );
      } else {
        Fcom_setLogInfo( DCOM_LOGLV_ERR , "invalid function ".$Grot_path );
        Fapp_jumpFirst();
      }
    } else {
      Frot_jumpFirst();
    }
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}

function Flgn_iniSrc( $url ) {
  try {
    global $Grot_path;
    
    # Fcom_setLogInfo( "debug" , "Flgn_iniSrc:".$Grot_path );
    $cont  = Frot_getConts( $url["type"] , $url["cont"] , $tgt );
    if ( null === $cont ) {
      Frot_jumpFirst();
      return;
    }
    Frot_setSession( $tgt , true , false );
    $conts_lst =  Frot_getContsList( array( DROT_STT_LGN ,
                                            DROT_SUBSTT_INI ) );
    $chk_flg = true;
    foreach( $conts_lst as $key => $val ) {
      $chk_flg = Frot_getSession( $val );
      if ( null === $chk_flg ) {
        # Fcom_setLogInfo( "debug" , "null session:".$val );
        break;
      }
    }
    if ( true === $chk_flg ) {
      Frot_resetSession();
      Frot_setSession( DROT_SESROT_STT , DROT_STT_LGN );
      Frot_setSession( DROT_SESROT_SUBSTT , DROT_SUBSTT_RDY );
      Fcom_setLogInfo( "debug" , "ready" );
    }
    echo $cont;
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}



/* end of file */
