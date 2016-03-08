
var Gsrh_forcus = false;

$(function() {
  var Gsrh_forcus = false;
  $(".fl_wrap").click(function() {
    Gsrh_forcus = true;
    $(".fl_wrap").css( "border" , "1px solid #37474f" );
  });
  $(document).click(function() {
    if( true != Gsrh_forcus ) {
      $(".fl_wrap").css( "border" , "none" );
    }
    Gsrh_forcus = false;
  });
});

