$(document).ready(function() {

  $(document).on('click', 'a[class^="openbtn"]', function(e) {
    e.preventDefault();
    var icon = $('.icon');
    icon.toggleClass('wide');
    if ( icon.hasClass('wide') ) {
      // close nav collapse
      icon.text('menu');
      $("#mySidebar").css("width", "0");
      $("#main").css("marginLeft", "0");
    } else {
      // open nav collapse
      icon.text('close');
      $("#mySidebar").css("width", "250px");
      $("#main").css("marginLeft", "250px");
    }
  });

  // tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //scroll top smoothly
  $(document).on('click', 'a[class^="scroll-top"]', function(e) {
    e.preventDefault();
    $('[data-toggle="tooltip"]').tooltip("hide");
    $('html, body').animate({
      scrollTop: $("#page-top").offset().top
  }, 2000);
  });
  
});


