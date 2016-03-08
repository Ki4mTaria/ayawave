<?php

function call_rest( $url , $meth , $prm ) {
  try {
    $curl = null;
    if( 0 === strcmp( $meth , "GET" ) ) {
      $url  = geturl_GET( $url , $prm );
      $curl = curl_init( $url );
    } else if( 0 === strcmp( $meth , "POST" ) ) {
      $curl = curl_init( $url );
      curl_setopt($curl , CURLOPT_POST , true);
      curl_setopt($curl , CURLOPT_POSTFIELDS , http_build_query($prm) );
    } else {
      echo $meth." is not supported".PHP_EOL;
      exit;
    }
    curl_setopt( $curl , CURLOPT_SSL_VERIFYPEER , false);
    curl_setopt( $curl , CURLOPT_SSL_VERIFYHOST , false);
    curl_setopt( $curl , CURLOPT_RETURNTRANSFER , true);
    curl_setopt( $curl , CURLOPT_FOLLOWLOCATION , true);
    curl_setopt( $curl , CURLOPT_MAXREDIRS      , 5);

    $output = curl_exec($curl);
    return $output;
  } catch ( Exception $e ) {
    echo $e->getMassage();
  }
}

function geturl_GET( $url , $prm ) {
  $ret = $url;
  if( count($prm) > 0 ) {
    $ret    .= "?";
    $get_prm = "";
    foreach ( $prm as $key => $val ) {
      $get_prm .= (rawurlencode($key).'='.rawurlencode($val).'&');
    }
    $ret .= $get_prm;
  }
  return $ret;
}




