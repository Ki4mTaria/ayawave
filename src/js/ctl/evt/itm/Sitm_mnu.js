/**
 * @file Sitm_mnu.js
 */
/*** define ***/
var DITM_VEWTYPE_TITLE = "DITM_VEWTYPE_TITLE";
var DITM_VEWTYPE_TAG   = "DITM_VEWTYPE_TAG";
var DITM_VEWTYPE_DATE  = "DITM_VEWTYPE_DATE";

/*** global ***/
var Gitm_first = [
  true  ,  // title
  false ,  // tag
  false    // date
];


/*** function ***/
function Fitm_clickNew() {
  try {
   window.open('./item?func=new');
  } catch( e ) {
    alert( e.stack );
  }
}

function Sitm_clickView( type ) {
  try {
    $("#" + DCNT_ITMCNTID_TTL ).fadeOut();
    $("#" + DCNT_ITMCNTID_TAG ).fadeOut();
    $("#" + DCNT_ITMCNTID_DAT ).fadeOut();
    
    if ( DITM_VEWTYPE_TITLE == type ) {
      $("#" + DCNT_ITMCNTID_TTL ).fadeIn();
    } else if ( DITM_VEWTYPE_TAG == type ) {
      $("#" + DCNT_ITMCNTID_TAG ).fadeIn();
    } else if ( DITM_VEWTYPE_DATE == type ) {
      $("#" + DCNT_ITMCNTID_DAT ).fadeIn();
    } else {
      
    }
  } catch ( e ) {
    alert( e.stack );
  }
}

/* end of file */
