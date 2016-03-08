<?php
/**
 * @file Sdbd_mysql.php
 */
/*** require ***/
require_once( dirname(__FILE__)."/../Scom_log.php" );

/*** global ***/
$Gdbd_dbname   = "db_ayawave";
$Gdbd_dbuser   = "root";
$Gdbd_dbpass   = "password";

/*** function ***/
function Fdbd_connect() {
  try {
    global $Gdbd_dbname;
    global $Gdbd_dbuser;
    global $Gdbd_dbpass;
    // DB接続処理
    $options = array(
      PDO::MYSQL_ATTR_READ_DEFAULT_FILE => '/etc/my.cnf',
    );
    // Connect Database
    $pdo = new PDO( 'mysql:host=localhost;dbname='.$Gdbd_dbname.';charset=utf8',
                    $Gdbd_dbuser ,
                    $Gdbd_dbpass ,
                    array(PDO::ATTR_EMULATE_PREPARES => false) );
    if( is_null($pdo) ){
      // 接続できなかった場合エラー
      throw new Exception('SV_ERR:'.basename(__FILE__)."_".__line__);
    }
    // エラー時にExceptionを発するように設定
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}

function Fdbd_getRow( $tbl , $where ) {
  try {
Fcom_setLogInfo( "debug" , "where:".$where );
    return Fdbd_getTableData( $tbl , "*" , $where );
  } catch ( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}

function Fdbd_getTableData( $tbl , $sel , $where ) {
  try {
    if ( ( null === $tbl ) || ( 0 === strcmp( $tbl , "" ) ) ) {
      throw new Exception('SV_ERR:'.basename(__FILE__)."_".__line__);
    }
    if( false === isset( $sel ) ) {
      $sel = "*";
    }
    $pdo = Fdbd_connect();
    if( null === $pdo ) {
      throw new Exception('SV_ERR:'.basename(__FILE__)."_".__line__);
    }
    $where_str = "";
    if ( ( null !== $where ) || ( 0 !== strcmp( $where , "" ) ) ) {
      $where_str .= " WHERE ".$where;
    }
    $sql  = "SELECT " . $sel . " FROM ".$tbl.$where_str;
    Fcom_setLogInfo( "debug" , $sql );
    $stmt = $pdo->prepare( $sql );
    if ( (null === $stmt) || ( false === $stmt->execute() ) ) {
      throw new Exception('SV_ERR:'.basename(__FILE__)."_".__line__);
    }
    if( 0 === strcmp( "*" , $sel ) ){
      $column  = Fdbd_getColumnList( $tbl );
      if( null === $column ) {
        throw new Exception('SV_ERR:'.basename(__FILE__)."_".__line__);
      }
    } else {
      $column[] = $sel;
    }
    $ret_val = null;
    while( $result = $stmt->fetch(PDO::FETCH_ASSOC) ) {
      if( null === $ret_val ) {
        $ret_val = array();
      }
      # var_dump( $result );
      foreach( $result as $col => $val ) {
        $ret_val[$col][] = $val;
      }
    }
    return $ret_val;
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}

function Fdbd_getColumnList( $tbl ) {
  try {
    if ( ( null === $tbl ) || ( 0 === strcmp( $tbl , "" ) ) ) {
      throw new Exception('SV_ERR:'.basename(__FILE__)."_".__line__);
    }
    $pdo = Fdbd_connect();
    if( null === $pdo ) {
      throw new Exception('SV_ERR:'.basename(__FILE__)."_".__line__);
    }
    $sql  = "SHOW COLUMNS FROM ".$tbl;
    # Fcom_setLogInfo( "debug" , $sql );
    $qret = $pdo->query( $sql );
    if( null === $qret ) {
      throw new Exception('SV_ERR:'.basename(__FILE__)."_".__line__);
    }
    $ret_val = null;
    foreach ( $qret as $val ) {
      if( null === $ret_val ) {
        $ret_val = array();
      }
      $ret_val[] = $val['Field'];
    }
    return $ret_val;
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
  }
}

function Fdbd_insert( $tbl , $row ) {
  try {
    if ( ( true  === empty( $tbl ) )    ||
         ( true  === empty( $row ) )    ||
         ( false === is_array( $row ) ) ||
         ( array_values( $row ) === $row ) ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           'invalid paramater'.PHP_EOL );
    }
    $pdo = Fdbd_connect();
    if( null === $pdo ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           'pdo is null'.PHP_EOL );
    }
    
    $set_str = "(";
    $val_str = " VALUES(";
    $set_flg = false;
    foreach ( $row as $col => $col_val ) {
      if ( true === $set_flg ) {
        $set_str .= ", ";
        $val_str .= ", ";
      } else {
        $set_flg = true;
      }
      $set_str  .= $col;
      $val_str  .= "?";
      $set_val[] = $col_val;
    }
    $set_str .= ")";
    $val_str .= ")";
    // insert row
    $sql  = "INSERT INTO ".$tbl.$set_str." ".$val_str;
    $stmt = $pdo->prepare( $sql );
    if ( null === $stmt ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           'statement error'.PHP_EOL );
    }
    if ( false === $stmt->execute( $set_val ) ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           'execute error'.PHP_EOL );
    }
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'() sql:'.$sql.PHP_EOL.$e->getMessage() );
  }
}

function Fdbd_delete( $tbl ) {
  try {
    $pdo = Fdbd_connect();
    if( null === $pdo ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           'pdo is null'.PHP_EOL );
    }
    $sql  = "DELETE FROM ".$tbl;
    $stmt = $pdo->prepare( $sql );
    if ( null === $stmt ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           'statement error'.PHP_EOL );
    }
    if ( false === $stmt->execute() ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           'execute error'.PHP_EOL );
    }
  } catch( Exception $e ) {
    throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                         __FUNCTION__.'() sql:'.$sql.PHP_EOL.$e->getMessage() );
  }
}

/* end of file */
