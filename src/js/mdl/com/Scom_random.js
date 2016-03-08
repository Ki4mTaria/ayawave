/**
 * @file Scom_random.js
 */
/*** function ***/
function Fcom_random( limit ) {
  try {
    // check limit
    if ( ( null == limit ) ||
         ( 0    >= limit ) ) {
      return 0;
    }
    limit_lst = Fcom_chkLimit( limit );
    return Frdm_gatVal( limit_lst );
  } catch ( e ) {
    alert( e.stack );
  }
}

function Fcom_chkLimit( limit ) {
  try {
    var dig_chk = "" + limit;
    var dig     = dig_chk.length;  // 桁数
    var ret_val = new Array( dig );
    var i       = 0;
    var k       = 0;
    var dig_val = 1;
    var temp    = 0;
    for( i=0 ; i < dig ; i++ ) {
      dig_val  = 1;
      for ( k=0; k < i ;k++ ) {
        dig_val *= 10;
      }
      temp = Math.floor( limit / dig_val );
      ret_val[i] = temp % 10;
    }
    return ret_val;
  } catch ( e ) {
    alert( e.stack );
  }
}

function Frdm_gatVal( limit_lst ) {
  try {
    var dig_len  = limit_lst.length;
    var dig_val  = 1;
    var ret_val  = 0;
    var rand_chk = 0;
    var limit    = true;
    var i        = 0;
    var k        = 0;
    
    for ( i=dig_len-1 ; i >= 0 ; i-- ) {
      rand_chk = Math.floor( Math.random() * 10 );
      if ( true == limit ) {
        while(true) {
          if( rand_chk > limit_lst[i] ) {
            rand_chk = Math.floor( Math.random() * 10 );
          } else {
            break;
          }
        }
      }
      if ( rand_chk == limit_lst[i] ) {
        limit = true;
      } else {
        limit = false;
      }
      dig_val  = 1;
      for ( k=0; k < i ;k++ ) {
        dig_val *= 10;
      }
      ret_val += ( dig_val * rand_chk );
    }
    return ret_val;
  } catch ( e ) {
    alert( e.stack );
  }
}


/* end of file */
