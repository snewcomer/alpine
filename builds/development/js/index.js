(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
      $('span#name').addClass("hide");
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

//    $(function(){
//        var scroller = $('#scroller div.innerScrollArea');
//        var scrollerContent = scroller.children('ul');
//        scrollerContent.children().clone().appendTo(scrollerContent);
//        var curX = 0;
//        scrollerContent.children().each(function(){
//            var $this = $(this);
//            $this.css('left', curX);
//            curX += $this.outerWidth(true);
//        });
//        var fullW = curX / 2;
//        var viewportW = scroller.width();
//
//        // Scrolling speed management
//        var controller = {curSpeed:0, fullSpeed:1};
//        var $controller = $(controller);
//        var tweenToNewSpeed = function(newSpeed, duration)
//        {
//            if (duration === undefined)
//                duration = 600;
//            $controller.stop(true).animate({curSpeed:newSpeed}, duration);
//        };
//
//        // Scrolling management; start the automatical scrolling
//        var doScroll = function()
//        {
//            var curX = scroller.scrollLeft();
//            var newX = curX + controller.curSpeed;
//            if (newX > fullW*2 - viewportW)
//                newX -= fullW;
//            scroller.scrollLeft(newX);
//        };
//        setInterval(doScroll, 20);
//        tweenToNewSpeed(controller.fullSpeed);
//    });
    $(window).load(function() { //start after HTML, images have loaded

    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 2500;

            //interval between items (in milliseconds)
            var itemInterval = 6000;

            //cross-fade time (in milliseconds)
            var fadeTime = 3000;

            //count number of items
            var numberOfItems = $('.rotating-item').length;

            //set current item
            var currentItem = 0;

            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);

                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);

            }, itemInterval);
        }
    };

    InfiniteRotator.init();

});

});//document.ready

},{}]},{},[1])