$(document).ready(function() {
  var wheight = $(window).height();
  var whalfheight = $(window).height()/2;
  $('.fullheight').css('height', wheight);
  $('.halfheight').css('height', whalfheight);


  //collapsing navbar
  $(document).on("scroll", function() {
    if($(document).scrollTop() > 85) {
      $("#navBar").removeClass("none").addClass("background");

      $('a').addClass('importantRule');
    } else {
      $("#navBar").removeClass("background").addClass("none");
      $('a').removeClass('importantRule');
    }
  });

});//document.ready
