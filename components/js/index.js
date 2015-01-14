$(document).ready(function() {
  var wheight = $(window).height();
  var whalfheight = $(window).height()/2;
  $('.fullheight').css('height', wheight);
  $('.halfheight').css('height', whalfheight);

 ////Image Resizing///////////
  $(window).resize(function() {
    var wheight = $(window).height(); 
    var whalfheight = $(window).height()/2;
    $('.fullheight').css('height', wheight);
      $('.halfheight').css('height', whalfheight);
  }); //on resize of window the image resizes


 ////Collapsing navbar////////
  $(document).on("scroll", function() {
    if($(document).scrollTop() > 85) {
      $("#navBar").removeClass("none").addClass("background");

      $('a').addClass('importantRule');
    } else {
      $("#navBar").removeClass("background").addClass("none");
      $('a').removeClass('importantRule');
    }
  });//collapsing navbar

});//document.ready
