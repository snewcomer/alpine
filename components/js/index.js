$(document).ready(function() {
  var wheight = $(window).height();
  var whalfheight = $(window).height()/2;
  var topoffset = 95;
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
    if($(document).scrollTop() > 100) {
      $("#navBar").removeClass("none").addClass("background");
      $('a').addClass('importantRule');
    } else {
      $("#navBar").removeClass("background").addClass("none");
      $('a').removeClass('importantRule');
    }
  });//collapsing navbar

 ////////smooth scrolling///////////
  $('a[href*=#]:not([href=#])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html,body').animate({
           scrollTop: target.offset().top - topoffset
         }, 1000);
         return false;
       }
     }
   }); //ahref

   $(window).scroll(function() {
     var windowpos = $(window).scrollTop() + topoffset;
     $('div.right a').removeClass('active');

     if (windowpos > $('#aboutUs').offset().top) {
       $('div.right a').removeClass('active');
       $('a[href$="#aboutUs"]').addClass('active');
     }
   });

});//document.ready
