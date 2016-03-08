<?php
  /*** require ***/
  require_once( dirname(__FILE__)."/Srsp_engine.php" );
  
  try {
    $sh_run   = array();
    $sh_run[] = "sh ru".PHP_EOL;
    $sh_run[] = "".PHP_EOL;
    $sh_run[] = "interface FastEthernet0/1".PHP_EOL;
    $sh_run[] = " no switchport".PHP_EOL;
    $sh_run[] = " ip address 10.0.0.2 255.255.255.0".PHP_EOL;
    $sh_run[] = " shutdown".PHP_EOL;
    $sh_run[] = "!".PHP_EOL;
    $sh_run[] = "interface FastEthernet0/2".PHP_EOL;
    $sh_run[] = " switchport mode dynamic desirable".PHP_EOL;
    $sh_run[] = "!".PHP_EOL;
    $sh_run[] = "".PHP_EOL;
    $sh_run[] = "l3sw1#".PHP_EOL;
    
    $item = array();
    $item[] = "@until{nact}{interface @prm{ifname}}{}".PHP_EOL;
    $item[] = "@until{act}{!}{@if{ shutdown}{@return{}{state}{false}}{@return{}{state}{true}}}".PHP_EOL;
    var_dump( Frsp_parseResp( $vln_resp , $item ) );
    
  } catch( Exception $e ) {
    echo $e->getMessage();
  }
  
  
  
  
  
