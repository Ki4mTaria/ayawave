<?php
  /**
   * @file Srot_url.php
   */
  /*** require ***/
  require_once( dirname(__FILE__)."/Srot_define.php"        );
  require_once( dirname(__FILE__)."/Srot_session.php"       );
  require_once( dirname(__FILE__)."/../lgn/Slgn_ctrl.php"   );
  require_once( dirname(__FILE__)."/../../com/Scom_log.php" );
  require_once( dirname(__FILE__)."/../app/Sapp_ctrl.php"   );
  require_once( dirname(__FILE__)."/../rst/Srst_ctrl.php"   );
  
  /*** global ***/
  $Grot_path  = null;
  $Grot_state = null;
  try {
    session_start();
    $Grot_path = $_SERVER['REQUEST_URI'];
    // check REST
    if( true === Frst_isRestRequest( $Grot_path , $_POST ) ) {
      $ret = Frst_callTarget( $Grot_path, $_POST );
      echo json_encode( $ret );
      return;
    }
    
    /* routing state */
    $Grot_state = Frot_getSession( DROT_SESROT_STT );

    /* degub start */
    # Frot_resetSession();
    # return;
    # Frot_logSession();
    Fcom_setLogInfo( "debug" , "url:".$Grot_path );
    /* debug end */
    
    /* check login */
    if( null === $Grot_state ) {
      Frot_setSession( DROT_SESROT_STT , DROT_STT_LGN , false );
      $Grot_state = DROT_STT_LGN;
    }
    if ( 0 === strcmp( $Grot_state , DROT_STT_LGN ) ) {
      Flgn_ctrl();
      return;
    } else if ( 0 === strcmp( $Grot_state , DROT_STT_APP ) ) {
      # Fcom_setLogInfo( "debug" , "app:".$Grot_path );
      # Frot_resetSession();
      Fapp_ctrl();
      return;
    }  else {
      return;
    }
  } catch ( Exception $e ) {
    echo $e->getMessage();
    Fcom_setLogInfo( DCOM_LOGLV_ERR , $e->getMessage() );
  }


  /*** function ***/
  function Frot_getGETprm( $end_uri ) {
    try {
      $ret_val = array();
      $exp1 = explode( '?' , $end_uri );
      if ( 1 === count( $exp ) ) {
        return null;
      } else if( 2 === count( $exp1 ) ) {
        $preg = preg_match('/([!-~]+=[!-~]+&)*([!-~]+=[!-~]+)+/', $exp1[1] , $m); 
        if( 1 !== $preg ) {
          return null;
        }
        $exp2 = explode( '&' , $exp1[1] );
        foreach( $exp2 as $getp ) {
          $exp3 = explode( '=' , $getp );
          if( 2 !== count( $exp3 ) ) {
            return null;
          } else {
            $ret_val[ $exp3[0] ] = $exp3[1];
          }
        }
        return $ret_val;
      } else {
        throw new Exception("");
      }
    } catch( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }

function Frot_getNoprmPath( $upath ) {
  try {
    $ret_val = '';
    $uexp    = explode( '/' , $upath );
    for ( $loop=0 ; $loop < count($uexp) ; $loop++ ) {
      if( $loop == count($uexp)-1 ) {
        $gexp     = explode( '?' , $uexp[$loop] );
        $ret_val .= $gexp[0];
      } else {
        $ret_val .= $uexp[$loop] . '/';
      }
    }
    return $ret_val;
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}


/* end of file */
