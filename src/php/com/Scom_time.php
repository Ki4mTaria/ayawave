<?php
/**
 * @file Scom_time.php
 */
/*** function ***/
function Fcom_getTimeStamp() {
  try {
    date_default_timezone_set("Asia/Tokyo");
    $dt = new DateTime('NOW');
    return $dt->format("Y-m-d H:i:s");
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __LINE__.'()'.PHP_EOL.$e->getMessage() );
  }
}

/* end of file */
