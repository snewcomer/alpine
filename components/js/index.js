$(document).ready(function() {
  var wheight = $(window).height();
  var whalfheight = $(window).height()/2;
  $('.fullheight').css('height', wheight);
  $('.halfheight').css('height', whalfheight);

  //collapsing navbar
  $(document).on("scroll", function() {
    if($(document).scrollTop() > 125) {
      $("#navBar").removeClass("none").addClass("background");
    } else {
      $("#navBar").removeClass("background").addClass("none");
    }
  });

});//document.ready
