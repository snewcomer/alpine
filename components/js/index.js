$(document).ready(function() {
  var wheight = $(window).height();
  $('.fullheight').css('height', wheight);

  //collapsing navbar
  $(document).on("scroll", function() {
    if($(document).scrollTop() > 125) {
      $("#navBar").removeClass("none").addClass("background");
    } else {
      $("#navBar").removeClass("background").addClass("none");
    }
  });

});//document.ready
