<?php
/**
 * @file Slgn_func.php
 */
/*** require ***/
require_once( dirname(__FILE__)."/Sath_login.php" );

/*** define ***/
define ( 'DATH_CONT_LGI' , 'login' );   //! login
define ( 'DATH_CONT_LGO' , 'logout' );  //! logout
define ( 'DATH_CONT_USR' , 'user' );


/*** function ***/

function Fath_ctrl( $cont ) {
  try {
    $ret = array();
    if ( 0 === strcmp( $cont , DATH_CONT_LGI ) ) {
      if( true === Fath_login() ) {
        $ret["ret"] = true;
      } else {
        $ret["ret"]     = false;
        $ret["ret_msg"] = "authorization failed";
      }
    } else if ( 0 === strcmp( $cont , DATH_CONT_LGO ) ) {
      Frot_resetSession();
      $ret["ret"] = true;
    } else if ( 0 === strcmp( $cont , DATH_CONT_USR ) ) {
      $user = Frot_getSession( "user" );
      $ret["ret"]     = true;
      $ret["ret_msg"] = $user;
    }
    return $ret;
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}

/* end of file */
