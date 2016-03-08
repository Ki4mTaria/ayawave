/**
 * @brief json sender/receiver
 * @note prefix : jsn
 */

/*** global ***/
var Gjsn_port    = 10016;
//var Gjsn_sendUrl = "http://192.168.0.50:" + Gjsn_port + "/ayawave/";
var Gjsn_sendUrl = "./";

/*** class ***/
//function Cjsn_post() {
//  this.prm     = null;
//  this.cb_func = null;
//}
//Cjsn_post.prototype = {
//  send : function(uri, data, func, fprm) {
//    try {
//      this.prm = fprm || null;
//      if( null == func ) {
//        return;
//      }
//      var test = "test";
//      //this.cb_func = func;
//      $.ajax({
//        url         : Gjsn_sendUrl + uri ,
//        type        : "POST" ,
//        dataType    : 'json' ,
//        data        : data
//      })
//      .done(function(jqXHR, textStatus, errorThrown){
//        alert( test );
//      })
//      .always(function( data, textStatus, errorThrown ) {});
//    } catch(e) {
//      alert( e.stack );
//    }
//  },
//  cb_func : function(jqXHR, textStatus, errorThrown) {
//    try {
//      alert( "cb_func" );
////      if( null != func ) {
////        func(jqXHR);
////      }
//    } catch( e ) {
//      alert( e.stack );
//    }
//  }
//}


/*** function ***/
/**
 * @brief send GET request
 * @param uri : uri following the Gjsn_sendUrl
 * @param data : GET parameter
 * @param func : callback function
 */
function Fjsn_sendGet( uri , data , func ) {
  try {
    Fjsn_sendReq( "GET" , uri , data , func );
  } catch( e ) {
    
  }
}
/**
 * @brief send POST request
 * @param uri : uri following the Gjsn_sendUrl
 * @param data : POST parameter
 * @param func : callback function
 */
function Fjsn_sendPost(uri, data, func, fprm) {
  try {
    var pval = fprm || null;
    Fjsn_sendReq("POST", uri, data, func, pval);
  } catch( e ) {
    alert( e.stack );
  }
}

function Fjsn_sendPost_( uri , data , func ) {
  try {
    $.ajax({
      url      : Gjsn_sendUrl + uri  ,
      type     : 'POST'              ,
      data     : data                ,
      error    : function(e){ Fcom_printObj(e);alert("failed"); },
      complete : function(data){ Fcom_printObj( data ); } ,
      dataType : 'json'
    });
  } catch( e ) {
    alert( e.stack );
  }
}


/**
 * @brief send http request
 * @param rtype : request type (GET,POST)
 * @param uri : uri following the Gjsn_sendUrl
 * @param data : GET parameter
 * @param func : callback function
 */
function Fjsn_sendReq(rtype, uri, data, func, fprm) {
  try {
    var func_prm = fprm;
    $.ajax({
      url         : Gjsn_sendUrl + uri ,
      type        : rtype  ,
      dataType    : 'json' ,
      data        : data
    })
    .done(function(jqXHR, textStatus, errorThrown) {
      try {
        if( null != func ) {
          if( null == func_prm ) {
            func(jqXHR);
          } else {
            func(jqXHR, func_prm);
          }
        }
      }catch( e ) {
        alert( e.stack );
      }
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
      try {
        // send GET is failed
        Fcom_printObj( jqXHR );
        alert( "send request is faied" );
      } catch( e ) {
        alert( e.stack );
      }
    })
    .always(function( data, textStatus, errorThrown ) {});
  } catch( e ) {
    alert( e.stack );
  }
}
/* end of file */
