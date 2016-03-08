<?php
  /**
   * @file Sapp_ready.php
   */
  /*** require ***/
  require_once "Net/URL/Mapper.php";
  require_once( dirname(__FILE__)."/../../itm/Sitm_ctrl.php" ); 
  
  /*** function ***/
  function Fapp_ready() {
    try {
      global $Grot_path;
      # Fcom_setLogInfo( "debug" , "Fapp_ready:".$Grot_path );
      
      $map = Net_URL_Mapper::getInstance();
      $map->connect('/:app/:func/:type/:cont');
      $url = $map->match( $Grot_path );
      if ( $url ) {
        if( 0 !== strcmp( $url["app"]  , DROT_APP_NAME ) ) {
          Fcom_setLogInfo( DCOM_LOGLV_ERR , "invalid function ".$Grot_path );
          Fapp_jumpFirst();
        }
        if ( 0 === strcmp( $url["func"] , DROT_FUNC_SRC ) ) {
          Fapp_rdySrc( $url );
        } else if ( 0 === strcmp( $url["func"] , DROT_FUNC_FNC ) ) {
          Fapp_rdyFunc( $url );
        }
      } else {
          $map->reset();
          $map->connect( "/:app/:type" );
          $url = $map->match( $Grot_path );
          if( $url ) {
            if ( 0 !== strcmp( $url["app"] , DROT_APP_NAME ) ) {
              Fapp_jumpFirst();
            }
            if( 0 === strcmp( $url["type"] , "item" ) ) {
              if( 0 === strcmp( $_GET["func"] , "new" ) ) {
                echo Frot_getInit( DROT_INITTYP_NEW );
              } else if( 0 === strcmp( $_GET["func"] , "edit" ) ) {
                echo Frot_getInit( DROT_INITTYP_EDT );
              }
            }
          } else {
            Fapp_jumpFirst();
          }
      }
    } catch ( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
  function Fapp_rdySrc( $url ) {
    try {
      global $Grot_path;
      $cont  = Frot_getConts($url["type"], $url["cont"], $tgt);
      if ( null === $cont ) {
        Fcom_setLogInfo( "debug" , "app null conts:".$Grot_path );
        #Fapp_jumpFirst();
        return;
      }
      echo $cont;
    } catch ( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
  function Fapp_rdyFunc( $url ) {
    try {
      global $Grot_path;
      header("Content-Type: application/json; charset=utf-8");
      
      if( 0 === strcmp( $url["type"] , DROT_FTYPE_ATH )) {
        $ret = Fath_ctrl( $url["cont"] );
        echo json_encode( $ret );
        return;
      } else if ( 0 === strcmp( $url["type"] , DROT_FTYPE_ITM ) ) {
        //$ret = array( 'ret' => true );
        $ret = Fitm_ctrl( $url["cont"] );
        echo json_encode( $ret );
        return;
      } else {
        $noprm = Frot_getNoprmPath( $url );
        $cont  = Frot_getConts( $noprm );
        if( null === $cont ) {
          Fcom_setLogInfo( DCOM_LOGLV_ERR , $noprm." is null." );
          Fapp_jumpFirst();
        } else {
          echo $cont;
        }
      }
    } catch ( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
  /* end of file */
