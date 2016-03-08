<?php

/**
 * @brief send request REST API and return response
 */
function CallRestAPI( $url, $method, $params=array() ){
  try{
    if( "1" == $method ) {
      // GETメソッドの場合
      if( count($params) > 0 ) {
        $url  .= '?';
        $query = '';
        foreach ($params as $key => $value) {
          if( strlen(trim($key)) > 0 ) {
            $query .= (rawurlencode($key).'='.rawurlencode($value).'&');
          }
        }

        $url .= $query;
      }
    }

    $curl=curl_init($url);
    
