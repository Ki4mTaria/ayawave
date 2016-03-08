<?php
  /*** require ***/
  require_once( dirname(__FILE__)."/rest.php" );
  
  try {
    $vln_resp   = "";
    $vln_resp .= "show vlan".PHP_EOL;
    $vln_resp .= "".PHP_EOL;
    $vln_resp .= "VLAN Name                             Status    Ports".PHP_EOL;
    $vln_resp .= "---- -------------------------------- --------- -------------------------------".PHP_EOL;
    $vln_resp .= "1    default                          active    Fa0/2, Fa0/3, Fa0/4, Fa0/5, Fa0/6, Fa0/7, Fa0/8, Fa0/9, Fa0/12, Fa0/13".PHP_EOL;
    $vln_resp .= "                                                Fa0/14, Fa0/15, Fa0/16, Fa0/17, Fa0/18, Fa0/19, Fa0/20, Fa0/21, Fa0/22".PHP_EOL;
    $vln_resp .= "                                                Fa0/23, Fa0/24, Gi0/1, Gi0/2".PHP_EOL;
    $vln_resp .= "6    VLAN0006                         active".PHP_EOL;
    $vln_resp .= "20   VLAN0020                         active    Fa0/10".PHP_EOL;
    $vln_resp .= "1002 fddi-default                     act/unsup".PHP_EOL;
    $vln_resp .= "1003 token-ring-default               act/unsup".PHP_EOL;
    $vln_resp .= "1004 fddinet-default                  act/unsup".PHP_EOL;
    $vln_resp .= "1005 trnet-default                    act/unsup".PHP_EOL;
    $vln_resp .= "".PHP_EOL;
    $vln_resp .= "VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2".PHP_EOL;
    $vln_resp .= "---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------".PHP_EOL;
    $vln_resp .= "1    enet  100001     1500  -      -      -        -    -        0      0".PHP_EOL;
    $vln_resp .= "6    enet  100006     1500  -      -      -        -    -        0      0".PHP_EOL;
    $vln_resp .= "20   enet  100020     1500  -      -      -        -    -        0      0".PHP_EOL;
    $vln_resp .= "1002 fddi  101002     1500  -      -      -        -    -        0      0".PHP_EOL;
    $vln_resp .= "1003 tr    101003     1500  -      -      -        -    -        0      0".PHP_EOL;
    $vln_resp .= "1004 fdnet 101004     1500  -      -      -        ieee -        0      0".PHP_EOL;
    $vln_resp .= "1005 trnet 101005     1500  -      -      -        ibm  -        0      0".PHP_EOL;
    $vln_resp .= "".PHP_EOL;
    $vln_resp .= "Remote SPAN VLANs".PHP_EOL;
    $vln_resp .= "------------------------------------------------------------------------------".PHP_EOL;
    $vln_resp .= "".PHP_EOL;
    $vln_resp .= "".PHP_EOL;
    $vln_resp .= "Primary Secondary Type              Ports".PHP_EOL;
    $vln_resp .= "------- --------- ----------------- ------------------------------------------".PHP_EOL;
    $vln_resp .= "".PHP_EOL;
    $vln_resp .= "l3sw1#".PHP_EOL;
    $post = array(
      "token" => "test" ,
      "tag"   => array( "cisco" ),
      "resp"  => $vln_resp
    );
    $ret = call_rest(
             "http://ec2-52-69-165-168.ap-northeast-1.compute.amazonaws.com/ayawave/rest/get/vlan/lists" ,
             "POST" ,
             $post
           );
    var_dump( $ret );
    
  } catch( Exception $e ) {
    echo $e->getMessage();
  }
  
  
  
  
  
