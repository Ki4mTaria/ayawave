<?php
/**
 * @file Sapp_init.php
 */
/*** require ***/
require_once "Net/URL/Mapper.php";
require_once( dirname(__FILE__)."/../com/Srot_conts.php" );
require_once( dirname(__FILE__)."/../com/Srot_session.php" );
require_once( dirname(__FILE__)."/../../ath/Sath_ctrl.php" );

/*** function ***/
function Fapp_init() {
  try {
    global $Grot_path;
    # Frot_logSession();
    # Fcom_setLogInfo( "debug" , "Fapp_init:".$Grot_path );
    
    $map   = Net_URL_Mapper::getInstance();
    $map->connect('/:app/:func/:type/:cont');
    $npurl = Frot_getNoprmPath( $Grot_path );
    $url   = $map->match( $npurl );
    if( $url ) {
      if ( 0 !== strcmp( $url["app"] , DROT_APP_NAME ) ) {
        Fapp_jumpFirst();
      }
      if ( 0 === strcmp( $url["func"] , DROT_FUNC_SRC ) ) {
        Fapp_iniSrc( $url );
      } else if ( 0 === strcmp( $url["func"] , DROT_FUNC_FNC ) ) {
        Fapp_iniFunc( $url );
      } else {
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

function Fapp_iniSrc( $url ) {
  try {
    global $Grot_path;
    $cont  = Frot_getConts($url["type"], $url["cont"], $tgt);
    if ( null === $cont ) {
      Fcom_setLogInfo( "debug" , "app null conts:".$Grot_path );
      #Fapp_jumpFirst();
      return;
    }
    Frot_setSession( $tgt , true , false );
    # Frot_logSession();
    $conts_lst =  Frot_getContsList( array( DROT_STT_APP ,
                                            DROT_SUBSTT_INI ) );
    # Fcom_logObj( "conts_lst" , $conts_lst );
    $chk_flg = true;
    # Fcom_setLogInfo( "debug" , "check ready start" );
    foreach( $conts_lst as $key => $val ) {
      $chk_flg = Frot_getSession( $val );
      # Fcom_setLogInfo( "debug" , $key.":".$chk_flg );
      if ( null === $chk_flg ) {
        # Fcom_setLogInfo( "debug" , "null session:".$val );
        break;
      }
    }
#    Fcom_setLogInfo( "debug" , "end check ready" );
    if ( true === $chk_flg ) {
      $user = Frot_getSession( "user" );
      Frot_resetSession();
      Frot_setSession( DROT_SESROT_STT , DROT_STT_APP );
      Frot_setSession( DROT_SESROT_SUBSTT , DROT_SUBSTT_RDY );
      Frot_setSession( "user" , $user , false );
      Fcom_setLogInfo( "debug" , "app ready:".$user );
    }
    echo $cont;
    return;
    
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}


function Fapp_iniFunc( $url ) {
  try {
    header("Content-Type: application/json; charset=utf-8");
    if ( 0 === strcmp( $url["type"] , DROT_FTYPE_ATH ) ) {
      $ret = Fath_ctrl( $url["cont"] );
    }
    echo json_encode( $ret );
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}

/* end of file */
