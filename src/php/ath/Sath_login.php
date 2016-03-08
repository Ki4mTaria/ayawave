<?php
/**
 * @file Slgn_func.php
 */
/*** require ***/
require_once( dirname(__FILE__)."/../com/dbd/Sdbd_mysql.php" );

/*** function ***/
function Fath_login() {
  try {
    if ( true === Fath_chkLogin( 
                    $_POST["userid"] ,
                    $_POST["passwd"]
                  ) ) {
      Frot_resetSession();
      Frot_setSession( DROT_SESROT_STT , DROT_STT_APP );
      //Frot_setSession( DROT_SESROT_SUBSTT ,  );
      Frot_setSession( DROT_LGDIN_USER , $_POST["userid"] );
      //echo json_encode( array( 'ret' => true ) );
      return true;
    } else {
      // echo json_encode( array( 'ret' => false ) );
      return false;
    }
  } catch ( Exception $e ) {
    
  }
}



function Fath_chkLogin( $userid , $passwd ) {
  try {
    
    
    // password_hash("rasmuslerdorf", PASSWORD_DEFAULT)
    
    return true;
  } catch( Exception $e ) {
    
  }
}

/* end of file */
