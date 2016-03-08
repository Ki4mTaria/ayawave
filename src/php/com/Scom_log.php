<?php
/**
 * @file Scom_log.php
 */
/*** require ***/
require_once( dirname(__FILE__)."/Scom_time.php" );
require_once( dirname(__FILE__)."/dbd/Sdbd_mysql.php" );

/*** define ***/
/**
 * @brief log level
 */
define( 'DCOM_LOGLV_DBG'  , 'debug'       );
define( 'DCOM_LOGLV_INFO' , 'information' );
define( 'DCOM_LOGLV_WARN' , 'warning'     );
define( 'DCOM_LOGLV_ERR'  , 'error'       );
define( 'DCOM_LOGLV_CRIT' , 'critical'    );
define( 'DCOM_LOGLV_ALRT' , 'alert'       );
define( 'DCOM_LOGLV_EMER' , 'emergency'   );
/**
 * @brief log table
 */
define( 'DCOM_LOG_TBL' , 'tb_log' );

/*** function ***/
function Fcom_setLogInfo( $type , $err ) {
  $time = Fcom_getTimeStamp();
  $log  = array(
    'date'  => $time ,
    'type'  => $type ,
    'log'   => $err
  );
  Fdbd_insert( DCOM_LOG_TBL , $log );
}

function Fcom_logObj( $name , $obj ) {
  try {
    Fcom_setLogInfo( DCOM_LOGLV_DBG ,  '--- print get '.$name.' ---' );
    foreach( $obj as $key => $val ) {
      Fcom_setLogInfo( DCOM_LOGLV_DBG ,  '   '.$key.':'.$val );
    }
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}

/* end of file */
