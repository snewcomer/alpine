(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function() {

  'use strict';

  //for fade in functions below
  document.getElementById("service_1").style.display = "none";
  document.getElementById("service_2").style.display = "none";

  var e = document.getElementById('spinner');
  setTimeout(function() {
    e.parentNode.removeChild(e);
  }, 1200);

  //animate, resize as page changes
  var wheight = $(window).height();
  var wheightMobile = wheight - $('#navBar').height();
  var whalfheight = $(window).height()/2 + 100;
  var topoffset = 95;
  var fades_1 = 0;
  var fades_2 = 0;
  var fades_3 = 0;
  var fades_4 = 0;
  $('.fullheight').css('height', wheight);
  $('.fullheight-mobile').css('height', wheight);
  $('.halfheight').css('height', whalfheight);

  var isTouch = 'ontouchstart' in document.documentElement;

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

  /////scroll top
  $('#brand').click(function() {
    $("html, body").animate({scrollTop: 0}, 'slow');
    return false;
  });

   $(window).on('scroll', function() {
     var windowpos = $(window).scrollTop() + topoffset;
     var service = $('#services').offset().top;
     $('div.right a').removeClass('active');

     //highlight links
     if ((windowpos + 200 > $('#aboutUs').offset().top) && (windowpos < $('#services').offset().top - 400)) {
       $('div.right a').removeClass('active');
       $('a[href$="#aboutUs"]').addClass('active');
     }

     if ((windowpos + 200 > $('#services').offset().top) && (windowpos < $('#employment').offset().top - 400)) {
       $('div.right a').removeClass('active');
       $('a[href$="#services"]').addClass('active');
     }

     if (windowpos + 200 > $('#employment').offset().top) {
       $('div.right a').removeClass('active');
       $('a[href$="#employment"]').addClass('active');
     }

     if (windowpos + 300 > $('#contact').offset().top) {
       $('div.right a').removeClass('active');
       $('a[href$="#contact"]').addClass('active');
     }

     //fade in services
     if (windowpos + 300 > service && fades_1 == 0 && !isTouch)  {
       $('div#service_1').fadeIn('slow', function() {
         fades_1 = 1;
       });
     } else if (isTouch) {
       $('div#service_1').show('slide');
     }

     if (windowpos + 50 > service && fades_2 == 0 && !isTouch) {
       $('div#service_2').fadeIn('slow', function() {
         fades_2 = 1;
       });
     } else if (isTouch) {
       $('div#service_2').show();
     }

     if (windowpos + 50 > service && fades_4 == 0 && !isTouch) {
       $('#contact').fadeIn('slow', function() {
         fades_4 = 1;
       });
     } else if (isTouch) {
       $('#contact').show();
     }

     //fade in header text
     if (windowpos < 200 && !isTouch) {
       $('.subnav').fadeIn('slow', function() {
         fades_3 = 0;
       });
     } else if (windowpos + 125 > $('.subnav').offset().top && fades_3 == 0 && !isTouch) {
       $('.subnav').fadeOut('normal', function() {
         fades_3 = 1;
       });
     }//else

   });//window.on scroll


   $('#mobile').on('click', function(e) {
     e.preventDefault();
     $('.nav-list-mobile').slideToggle();
   });

   $(window).resize(function() {
     var menu = $('.nav-list-mobile');
     var w = $(window).width();
     if( w > 320 && menu.not(':hidden')) {
       menu.hide();
     }
   });

});//document.ready

},{}]},{},[1])