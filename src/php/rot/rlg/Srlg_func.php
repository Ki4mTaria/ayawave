<?php
/**
 * @file Srlg_login.php
 */
/*** require ***/
require_once( "Net/URL/Mapper.php" );
require_once( dirname(__FILE__)."/../Srot_url.php" );
require_once( dirname(__FILE__)."/../Srot_nat.php" );
require_once( dirname(__FILE__)."/../Srot_define.php" );
require_once( dirname(__FILE__)."/../../ath/Sath_login.php" );
require_once( dirname(__FILE__)."/../../com/Scom_log.php" );

/*** define ***/
define('DRLG_LGDIN_USER' , "logedin user" );

/*** function ***/
function Frlg_func ( $mapper , $path ) {
  try {
    $state = Frot_getSesDat( DROT_SESIDX_STT );
    //Fcom_setLogInfo( DCOM_LOGLV_DBG , 'route login state:'.$state );
    
    if( null == $state ) {
      Frot_setSesDat( DROT_SESIDX_STT , DROT_STT_LGN );
      // Fcom_setLogInfo( DCOM_LOGLV_DBG , 'update state:'.Frot_getSesDat( DROT_SESIDX_STT ) );
      
      Frot_setSesDat( DROT_SESIDX_SUBSTT , DROT_SUBSTT_FST );
    }
    $sub_stt = Frot_getSesDat( DROT_SESIDX_SUBSTT );
    if( null === $sub_stt ) {
      Frot_setSesDat( DROT_SESIDX_SUBSTT , DROT_SUBSTT_FST );
    }
    // Fcom_setLogInfo( DCOM_LOGLV_DBG , 'sub state:'.Frot_getSesDat( DROT_SESIDX_SUBSTT ) );
    
    $sub_stt = Frot_getSesDat( DROT_SESIDX_SUBSTT );
    if(  0 === strcmp( $sub_stt , DROT_SUBSTT_FST ) ) {
      //Fcom_setLogInfo( DCOM_LOGLV_DBG , 'before Frlg_first' );
      
      Frlg_first( $mapper , $path );
      return;
    } elseif( 0 === strcmp( $sub_stt , DROT_SUBSTT_INI ) ) {
      //Fcom_setLogInfo( DCOM_LOGLV_DBG , 'before Frlg_init' );
      
      Frlg_init( $mapper , $path );
      return;
    } elseif( 0 === strcmp( $sub_stt , DROT_SUBSTT_RDY ) ) {
      Frlg_ready( $mapper , $path );
      return;
    } else {
      return;
    }
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'() path:'.$path.PHP_EOL.$e->getMessage() );
  }
}

function Frlg_first( $mapper , $path ) {
  try {
    # Fcom_setLogInfo( DCOM_LOGLV_DBG , 'first function' );
    
    $mapper->connect('/:app/');
    $url_param = $mapper->match( $path );
    if ( $url_param ) {
      // check func
      if( 0 === strcmp( $url_param["app"] , DROT_APP_NAME )  ) {
        /* '/ayawave/' request */
        Fcom_setLogInfo( DCOM_LOGLV_DBG , 'jump init' );
        
        $cont = Frot_getConts( $path );
        
        Frot_setSesDat( DROT_SESIDX_SUBSTT , DROT_SUBSTT_INI , true );
        header("Content-Type: text/html; charset=utf-8");
        echo $cont;
        return;
      } else {
        /* func is not login */
        Fcom_setLogInfo( DCOM_LOGLV_DBG , 'invalid url at first func' );
        
        Frlg_jumpFirst();
      }
    } else {
      /* not match */
      Fcom_setLogInfo( DCOM_LOGLV_DBG , 'invalid url at first func' );
      
      Frlg_jumpFirst();
    }
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'() path:'.$path.PHP_EOL.$e->getMessage() );
  }
}


function Frlg_init( $mapper , $path ) {
  try {
    $mapper->connect('/:app/:action/:type/:target');
    $url_param = $mapper->match( $path );
    if( !$url_param ) {
      Fcom_setLogInfo( DCOM_LOGLV_DBG , 'invalid url at init func' );
      
      Frlg_jumpFirst();
    } else {
      /* match */
      //Fcom_setLogInfo( DCOM_LOGLV_DBG , 'init match path:'.$path );
      # Fcom_setLogInfo( DCOM_LOGLV_DBG , 'state:'.$_SESSION["STATE"].'/sub_state:'.$_SESSION["SUBSTATE"] );
      
      $noprm = Frot_getNoprmPath( $url_param );
      $cont  = Frot_getConts( $noprm );
      if( null === $cont ) {
        Fcom_setLogInfo( DCOM_LOGLV_DBG , 'null contents at init func' );
        Frlg_jumpFirst();
      } else {
        Frot_addSesIdx( $noprm , true );
        //$load_cnt = Frot_getSesDat( DROT_SESIDX_LOADCNT ) + 1;
        //Fcom_setLogInfo( DCOM_LOGLV_DBG , 'load cnt:'.$load_cnt );
        
        //Frot_setSesDat( DROT_SESIDX_LOADCNT , $load_cnt , false );
        $conts_lst =  Frot_getContsList( array( DROT_STT_LGN ,
                                                DROT_SUBSTT_INI ) );
        
        $chk_flg = true; 
        foreach( $conts_lst as $key => $val ) {
          $chk_ses = Frot_getSesDat( $key );
          if ( null === $chk_ses ) {
            $chk_flg = false;
            break;
          }
        }
        if( true === $chk_flg ) {
          Fcom_setLogInfo( DCOM_LOGLV_DBG , 'jump ready:'.$path );
          $idx = array(
            DROT_SESIDX_STT    => DROT_STT_LGN ,
            DROT_SESIDX_SUBSTT => DROT_SUBSTT_RDY
          );
          Frot_resetSession( $idx );
        }
        echo $cont;
      }
    }
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'() path:'.$path.PHP_EOL.$e->getMessage() );
  }
}

function Frlg_ready( $mapper , $path ) {
  try {
    if( (true === isset( $_POST["userid"] ) ) &&
        (true === isset( $_POST["passwd"] ) ) ) {
      # Fcom_setLogInfo( DCOM_LOGLV_DBG ,
      #                  'post param:'.$_POST["userid"].'_'.$_POST["passwd"] );
      $mapper->connect('/:app/:func');
      $url_param = $mapper->match( $path );
      if( !$url_param ) {
         Fcom_setLogInfo( DCOM_LOGLV_DBG , 'invalid url at ready func' );
         Frlg_jumpFirst();
      } else {
        if ( ( 0 === strcmp( $url_param["app"] , DROT_APP_NAME )) &&
             ( 0 === strcmp( $url_param["func"] , DROT_FUNC_ATH ) ) ) {
          header("Content-Type: application/json; charset=utf-8");
          /* 認証 */
          if( true === Fath_chkLogin( $_POST["userid"] ,
                                      $_POST["passwd"] ) ) {
            $idx = array(
              DROT_SESIDX_STT    => DROT_STT_APP ,
              DROT_SESIDX_SUBSTT => ""
            );
            Frot_resetSession( $idx );
            Frot_addSesIdx( DRLG_LGDIN_USER , $_POST["userid"] );
            Fcom_setLogInfo( DCOM_LOGLV_DBG , 'login success:'.$_POST["userid"] );
            
            echo json_encode( array( 'ret' => true ) );
            return;
          } else {
            echo json_encode( array( 'ret' => false ) );
            return;
          }
        } else {
          Fcom_setLogInfo( DCOM_LOGLV_DBG , 'invalid url at ready func' );
          Frlg_jumpFirst();
        }
      }
    } else {
      Fcom_setLogInfo( DCOM_LOGLV_DBG , 'invalid url at ready func' );
      Frlg_jumpFirst();
    }
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}


function Frlg_jumpFirst() {
  try {
    Fcom_setLogInfo( DCOM_LOGLV_DBG , 'jump first' );
    $idx = array(
      DROT_SESIDX_STT    => DROT_STT_LGN ,
      DROT_SESIDX_SUBSTT => ""
    );
    
    Frot_resetSession( $idx );
    header( 'Location: http://'.DROT_HOST.':'.DROT_PORT.'/'.
                                DROT_APP_NAME );
    exit;
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}

/* end of file */
