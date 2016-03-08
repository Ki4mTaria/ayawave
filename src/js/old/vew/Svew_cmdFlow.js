/**
 * @file Svew_cmdFlow.js
 */
/*** define ***/
var Gcdf_cmdList = new Array(
  'set'                   ,
  'unset'                 , 
  'enable'                ,
  'enable&nbsp;password'  ,
  'enable&nbsp;secret'    ,
  'conf&nbsp;t'           ,
  'show&nbsp;run'         ,
  'interface'             , 
  'show&nbsp;interface'   ,
  'shutdown'              ,
  'no&nbsp;shutdown'      ,
  'exit'                  ,
  'set&nbsp;vlan'         ,
  'switchport'            ,
  'switchport&nbsp;mode'   ,
  'access&nbsp;vlan'      ,
  'trunk&nbsp;allow'      ,
  'set&nbsp;ipaddress'    ,
  'no&nbsp;switchport'    ,
  'write&nbsp;memory'     ,
  'access-list'           ,
  'commit'                   ,
  'show&nbsp;running-config' ,
  'show&nbsp;running-config&nbsp;startup-config' ,
  'show&nbsp;ip&nbsp;route'  ,
  'show&nbsp;clock'       ,
  'show&nbsp;version'     ,
  'show&nbsp;arp'         ,
  'show&nbsp;flash'       ,
  'show&nbsp;environment' ,
  'show&nbsp;process&nbsp;cpu' ,
  'show&nbsp;process&nbsp;memory' ,
  'show&nbsp;tech-support' ,
  'show&nbsp;diag'         ,
  'show&nbsp;cdp&nbsp;neighbors' ,
  'show&nbsp;ip&nbsp;interface&nbsp;brief',
  'configure&nbsp;terminal' ,
  'terminal&nbsp;length'    ,
  'line&nbsp;vty'           ,
  'ping'                    ,
  'traceroute'              ,
  'ping'                    ,
  'reload'                  ,
  'ip&nbsp;nat&nbsp;inside&nbsp;source&nbsp;static' ,
  'ip&nbsp;nat&nbsp;inside&nbsp;source&nbsp;list&nbsp;1&nbsp;pool' ,
  'access-list'          ,
  'router&nbsp;rip'      ,
  'version&nbsp;2'       ,
  'router&nbsp;eigrp'    ,
  'no&nbsp;auto-summary' ,
  'passive-interface'    ,
  'router&nbsp;ospf'     ,
  // Linux
  'cat'   ,
  'chgrp' ,
  'chown' ,
  'chmod' ,
  'date'  ,
  'echo'  ,
  'find'  ,
  'ftp'   ,
  'grep'  ,
  'groupadd' ,
  'groupdel' ,
  'gzip'     ,
  'kill'     ,
  'less'     ,
  'ln'       ,
  'ls'       ,
  'mkdir'    ,
  'man'      ,
  'mv'       ,
  'more'     ,
  'netstat'  ,
  'nohup'    ,
  'passwd'   ,
  'ps'       ,
  'pwd'      ,
  'rmdir'    ,
  'rm'       ,
  'sed'      ,
  'shutdown' ,
  'sleep'    ,
  'su'       ,
  'telnet'   ,
  'tail'     ,
  'touch'    ,
  'unzip'    ,
  'useradd'  ,
  'userdel'  ,
  'usermod'  ,
  'which'    ,
  'who'      ,
  'zip'      ,
  'curl'     ,
  'wget'     ,
  'tar'
);
var Gcdf_switch = false;
var Gcdf_flowStack = new Array(); 
//var Gcdf_fontList  = new Array(
//  "'Montserrat' , serif"          ,
//  "'Open Sans Condensed' , serif" ,
//  "'Noto Serif' , serif"          ,
//  "'Sigmar One' , cursive"        ,
//  "'Abril Fatface', cursive"
//);

/*** initialize ***/
$(function(){
  try {
    $("body").css( "overflow" , "hidden" );
    Fcom_loadCss( "./load/css/cmdflow" );
    $( "#i-cnt" ).append( "<div id='i-cmdflow'></div>" );
  } catch( e ) {
    alert( e.stack );
  }
});

function Fcdf_start() {
  try {
    Gcdf_switch = true;
    Fcdf_flow();
    
    

  } catch ( e ) {
    alert( e.stack );
  }
}

function Fcdf_flow() {
  try {
    Fcdf_startFlow();
    if ( true == Gcdf_switch ) {
      setTimeout( Fcdf_flow , (Fcom_random( 250 )*10)+500 );
    }
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fcdf_startFlow() {
  try {
    var hit = false;
    var i   = 0;
    for(i=0; i < Gcdf_flowStack.length ;i++) {
      if ( false == Gcdf_flowStack[i] ) {
        hit = true;
        Gcdf_flowStack[i] = true;
        break;
      }
    }
    if( false == hit ) {
      Gcdf_flowStack.push( false );
      var cnt = Gcdf_flowStack.length-1;
      if ( 0 > cnt ) {
        cnt = 0;
      }
      // add tag
      $( "#i-cmdflow" ).append( "<div class='c-cmdflow' id='i-cmdflow-"+ cnt +"'></div>" );
      $( "#i-cmdflow-"+ cnt ).css( "display" , "none" );
      Fcdf_startFlow();
      return;
    }
    // hit stack
    Fcdf_flowing( i );
    
  } catch( e ) {
    alert( e.stack );
  }
}


function Fcdf_flowing( idx ) {
  try {
    // set tag
    var cmd_str = Gcdf_cmdList[ Fcom_random( Gcdf_cmdList.length-1 ) ];
    $( "#i-cmdflow-" + idx ).html( cmd_str );
    //$( "#i-cmdflow-" + idx ).css( "left" , "-300px" );
    //$( "#i-cmdflow-" + idx ).css( "display" , "block" );
    // set font
    //var font_idx = Fcom_random( Gcdf_fontList.length-1 );
    $( "#i-cmdflow-" + idx ).css( "font-family" , "Orbitron, sans-serif" );
    // set font-size
    var font_size = Fcom_random(50)+15;
    $( "#i-cmdflow-" + idx ).css( "font-size" , font_size + "px" );
    
    // set height
    var hei = Fcom_random( $(window).height() ) + 150;
    while( true ) {
      if( $(window).height()-50 < hei ) {
        hei = Fcom_random( $(window).height() ) + 100;
        continue;
      }
      break;
    }   
    $( "#i-cmdflow-"+ idx ).css( "top" , hei + "px" );
    
    // set speed
    //var speed =  ( ( font_size - 10 ) / 3);
    var speed =  70 - font_size;

    // set position
    var pos = 100 + (cmd_str.length*3) + (font_size * 6);
    
    $( "#i-cmdflow-" + idx ).css( "left" , (0 - pos) + "px" );
    $( "#i-cmdflow-" + idx ).css( "display" , "block" );
    

    // fire
    $( "#i-cmdflow-"+ idx ).velocity(
      {  left : $(window).width()  } ,
      {  easing: 'linear' , duration: speed * 1000 }
    );
    
    setTimeout( "Fcdf_offSwtch(" + idx +")"  , speed * 1000 );
    
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fcdf_offSwtch( idx ) {
  try {
    Gcdf_flowStack[idx] = false;
  } catch( e ) {
    alert( e.stack );
  }
}

/* end of file */
