<?php
  /**
   * @file Srot_conts.php
   */
  /*** require ***/
  require_once( dirname(__FILE__)."/../../com/Scom_log.php" );
  require_once( dirname(__FILE__)."/Srot_define.php" );
  
  /*** global ***/
  $Grot_uriList = array(
    DROT_STT_LGN => array(
      DROT_SUBSTT_FST => array(
      ),
      DROT_SUBSTT_INI => array(
        # html
        'html' => array(
          'header'      => '/html/uip/hdr/basic.html'  ,
          'loginform'   => '/html/ctf/lgf/basic.html'  ,
        ),
        # javascript
        'js'   => array(
          'jquery'      => '/src/js/lib/jquery/jquery-2.1.4.min.js' ,
          'start'       => '/src/js/ctl/ini/Sini_login.js'          ,
          'loader'      => '/src/js/mdl/com/Scom_loader.js'         ,
          'json'        => '/src/js/mdl/com/Scom_json.js'           ,
          'err'         => '/src/js/mdl/com/Scom_err.js'            ,
          'debug'       => '/src/js/mdl/com/Scom_dbg.js'            ,
          'header'      => '/src/js/ctl/uil/hdr/Shdr_login.js'      ,
          'basicheader' => '/src/js/vew/hdr/Shdr_basic.js'          ,
          'loginform'   => '/src/js/ctl/uil/lgf/Slgf_ujaflow.js'    ,
          'shadowbox'   => '/src/js/vew/sbx/Ssbx_basic.js'          ,
          'flowupform'  => '/src/js/vew/fom/Sfom_flowup.js'         ,
          'flowuplabel' => '/src/js/lib/FlowupLabels.js/jquery.FlowupLabels.min.js' ,
          'ujarakbtn'   => '/src/js/vew/btn/Sbtn_ujarak.js'         ,
          'loginevt'    => '/src/js/ctl/evt/lgn/Slgn_func.js'       ,
          'authuser'    => '/src/js/mdl/ath/Sath_moron.js'          ,
          'cmdflow'     => '/src/js/vew/txf/Svew_cmdFlow.js'        ,
          'randam'      => '/src/js/mdl/com/Scom_random.js'         ,
          'velocity'    => '/src/js/lib/velocity/velocity.min.js'   ,
        ),
        # css
        'css' => array(
          'header'      => '/css/uip/hdr/basic.css'                 ,
          'ujarakbtn'   => '/css/uip/btn/ujarak.css'                ,
          'flowuplabel' => '/src/js/lib/FlowupLabels.js/jquery.FlowupLabels.css'    ,
          'loginform'   => '/css/lgn/form.css'                                ,
          'cmdflow'     => '/css/uip/txf/cmdflow.css'                ,
        ),
      ),
      DROT_SUBSTT_RDY => array()
    ),
    DROT_STT_APP => array (
      DROT_SUBSTT_FST => array (
        //'/ayawave/' => '/html/uip/ini/init.html'
      ),
      DROT_SUBSTT_INI => array (
        # html
        'html' => array(
          'header'     => '/html/uip/hdr/basic.html'               ,
        ),
        # css
        'css' => array(
          'header'      => '/css/uip/hdr/basic.css'                 ,
          'ujarakbtn'   => '/css/uip/btn/ujarak.css'                ,
          'ujarakdrp'   => '/css/uip/drp/ujarakdrp.css'             ,
          'flowuplabel' => '/src/js/lib/FlowupLabels.js/jquery.FlowupLabels.css'    ,
          'search'      => '/css/hdr/search.css'                    ,
        ),
        # javascript
        'js' => array(
          'jquery'       => '/src/js/lib/jquery/jquery-2.1.4.min.js' ,
          'start'        => '/src/js/ctl/ini/Sini_app.js'            ,
          'loader'       => '/src/js/mdl/com/Scom_loader.js'         ,
          'json'         => '/src/js/mdl/com/Scom_json.js'           ,
          'err'          => '/src/js/mdl/com/Scom_err.js'            ,
          'debug'        => '/src/js/mdl/com/Scom_dbg.js'            ,
          'header'       => '/src/js/ctl/uil/hdr/Shdr_app.js'        ,
          'basicheader'  => '/src/js/vew/hdr/Shdr_basic.js'          ,
          'ujarakdrop'   => '/src/js/vew/drp/Sdrp_ujarak.js'         ,
          'ujarakbtn'    => '/src/js/vew/btn/Sbtn_ujarak.js'         ,
          'ujarakswh'    => '/src/js/vew/swh/Sswh_ujarak.js'         ,
          'flowupform'   => '/src/js/vew/fom/Sfom_flowup.js'         ,
          'flowuplabel'  => '/src/js/lib/FlowupLabels.js/jquery.FlowupLabels.min.js' ,
          'logout'       => '/src/js/mdl/ath/Sath_logout.js'         ,
          'conts'        => '/src/js/ctl/uil/cnt/Scnt_flame.js'      ,
          'cntitem'      => '/src/js/ctl/uil/cnt/Scnt_item.js'       ,
          'evt_itmttl'   => '/src/js/ctl/evt/itm/Sitm_evtTtl.js'     ,
          'acdarrow'        => '/src/js/vew/acd/Sacd_arrow.js'       ,
          'slidemenu'    => '/src/js/vew/sdm/Ssdm_basic.js'          ,
          'velocity'     => '/src/js/lib/velocity/velocity.min.js'   ,
        )
      ),
      DROT_SUBSTT_RDY => array(
        # html
        'html' => array(
          'header'  => '/html/uip/hdr/basic.html'               ,
          #'new'     => '/html/uip/ini/newinit.html'             ,
        ),
        #css
        'css' => array(
          'header'   => '/css/uip/hdr/basic.css'                 ,
          'ujarakbtn'   => '/css/uip/btn/ujarak.css'             ,
          'flowuplabel' => '/src/js/lib/FlowupLabels.js/jquery.FlowupLabels.css'    ,
        ),
        # javascript
        'js' => array(
          # '/ayawave/load/js/cntnew'    => '/src/js/ctl/uil/cnt/Scnt_new.js'        ,
          # 'newsend'     => '/src/js/ctl/evt/new/Snew_send.js'       ,
          'modaldlg'        => '/src/js/vew/dlg/Smdg_func.js'           ,
          'shadowbox'       => '/src/js/vew/sbx/Ssbx_basic.js'          ,
          'itmmnu'          => '/src/js/ctl/evt/itm/Sitm_mnu.js'        ,
          'jquery'          => '/src/js/lib/jquery/jquery-2.1.4.min.js' ,
          'newstart'        => '/src/js/ctl/ini/Sini_new.js'            ,
          'editstart'       => '/src/js/ctl/ini/Sini_edit.js'           ,
          'loader'          => '/src/js/mdl/com/Scom_loader.js'         ,
          'json'            => '/src/js/mdl/com/Scom_json.js'           ,
          'err'             => '/src/js/mdl/com/Scom_err.js'            ,
          'debug'           => '/src/js/mdl/com/Scom_dbg.js'            ,
          'newheader'       => '/src/js/ctl/uil/hdr/Shdr_new.js'        ,
          'basicheader'     => '/src/js/vew/hdr/Shdr_basic.js'          ,
          'newconts'        => '/src/js/ctl/uil/cnt/itm/Sitm_new.js'    ,
          'editconts'       => '/src/js/ctl/uil/cnt/itm/Sitm_edit.js'   ,
          'ujarakbtn'       => '/src/js/vew/btn/Sbtn_ujarak.js'         ,
          'flowupform'      => '/src/js/vew/fom/Sfom_flowup.js'         ,
          'flowuplabel'     => '/src/js/lib/FlowupLabels.js/jquery.FlowupLabels.min.js' ,
          'ujarakswh'       => '/src/js/vew/swh/Sswh_ujarak.js'         ,
          'velocity'        => '/src/js/lib/velocity/velocity.min.js'   ,
          'evt_itmnew_add'  => '/src/js/ctl/evt/new/Snew_add.js'        ,
          'evt_itmedt_ini'  => '/src/js/ctl/evt/itm/Sitm_edtIni.js'     ,
          'evt_itmedt_upd'  => '/src/js/ctl/evt/itm/Sitm_edtEvt.js'     ,
          'search'          => '/src/js/ctl/evt/srh/Ssrh_ctrl.js'       ,
        )
      ),
    )
  );
  
  
  /*** function ***/
  function Frot_getInit( $type ) {
    try {
      header("Content-Type: text/html; charset=utf-8");
      
      if ( 0 === strcmp( DROT_INITTYP_BSC , $type ) ) {
        return file_get_contents( dirname(__FILE__).'/../../../..'.'/html/uip/ini/init.html' );
      } else if ( 0 === strcmp( DROT_INITTYP_NEW , $type ) ) {
        return file_get_contents( dirname(__FILE__).'/../../../..'.'/html/uip/ini/newinit.html' );
      } else if ( 0 === strcmp( DROT_INITTYP_EDT , $type ) ) {
        return shell_exec( "php ".dirname(__FILE__).'/../../../..'.'/html/uip/ini/editinit.html'.' '.$_GET["id"] );
        //return shell_exec( "php ".dirname(__FILE__).'/../../../..'.'/html/uip/ini/editinit.html' );
        // return file_get_contents( dirname(__FILE__).'/../../../..'.'/html/uip/ini/editinit.html' );
      } else {
        return null;
      }
    } catch ( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'() path:'.$path.PHP_EOL.$e->getMessage() );
    }
  }
  
  /**
   * @brief get front contents
   * @param url : url object (/:app/:func/:type/:cont)
   */
  function Frot_getConts( $type , $cont , &$tgt ) {
    try {
      global $Grot_uriList;
      global $Grot_path;
      
      # Fcom_setLogInfo( "debug" , "Frot_getConts:".$Grot_path );
      $list    = null;
      $sts     = Frot_getSession( DROT_SESROT_STT );
      $sub_sts = Frot_getSession( DROT_SESROT_SUBSTT );
      
      if ( !isset( $Grot_uriList[$sts] ) ) {
        # Fcom_setLogInfo ( "debug" , 'ERR(File:'.basename(__FILE__).',Line:'.__line__.')' );
        return null;
      }
      $list = $Grot_uriList[$sts];
      if ( !isset( $list[$sub_sts] ) ) {
        Fcom_setLogInfo ( "debug" , 'ERR(File:'.basename(__FILE__).',Line:'.__line__.')' );
        return null;
      }
      $list2 = $list[$sub_sts];
      if ( isset( $list2[$type][$cont] ) ) {
        Frot_setContsType( $list2[$type][$cont] );
        $tgt = $list2[$type][$cont];
        return file_get_contents( dirname(__FILE__).'/../../../..'.$list2[$type][$cont] );
      }
      #Fcom_setLogInfo ( "debug" , 'ERR(File:'.basename(__FILE__).',Line:'.__line__.')' );
      return null;
    } catch( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'() path:'.$path.PHP_EOL.$e->getMessage() );
    }
  }
  
  function Frot_setContsType( $c_url ) {
    try {
      $ex_url = explode( "/" , $c_url );
      if( false !== strpos( $ex_url[count($ex_url)-1] , ".js" ) ) {
        header("Content-Type: text/javascript; charset=utf-8");
      } else if( false !== strpos( $ex_url[count($ex_url)-1] , ".css" ) ) {
        header("Content-Type: text/css; charset=utf-8");
      } else if( false !== strpos( $ex_url[count($ex_url)-1] , ".html" ) ) {
        header("Content-Type: text/html; charset=utf-8");
      } else {
        throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                             'invalid type:'.$type.PHP_EOL );
      }
    } catch( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
  function Frot_getContsList( $tgt ) {
    try {
      global $Grot_uriList;
      $ret_val = array();
      $list    = null;
      foreach( $tgt as $val ) {
        if ( null === $list ) {
          $list = $Grot_uriList[$val];
          continue;
        }
        $list = $list[$val];
      }
      foreach ( $list["html"] as $val ) {
        $ret_val[] = $val;
      }
      foreach ( $list["js"] as $val ) {
        $ret_val[] = $val;
      }
      foreach ( $list["css"] as $val ) {
        $ret_val[] = $val;
      }
      return $ret_val;
    } catch ( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
  function Frot_getContsCnt( $tgt ) {
    try {
      global $Grot_uriList;
      $list = null;
      foreach( $tgt as $val ) {
        if ( null === $list ) {
          $list = $Grot_uriList[$val];
          continue;
        }
        $list = $list[$val];
      }
      return count( $list );
    } catch ( Exception $e ) {
      throw new Exception( 'ERR(File:'.basename(__FILE__).',Line:'.__line__.'):'.
                           __FUNCTION__.'()'.PHP_EOL.$e->getMessage() );
    }
  }
  
/* end of file */
