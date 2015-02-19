(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function() {

  'use strict';

  //$('#service_1').hide();
  //$('#service_2').hide();

  var wheight = $(window).height();
  var whalfheight = $(window).height()/2;
  var topoffset = 95;
  var fades_1 = 0;
  var fades_2 = 0;
  var fades_3 = 0;
  $('.fullheight').css('height', wheight);
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
      $('span#name').addClass("hide");
    } else {
      $("#navBar").removeClass("background").addClass("none");
      $('a').removeClass('importantRule');
      $('span#name').removeClass("hide");
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

   $(window).on('scroll', function() {
     var windowpos = $(window).scrollTop() + topoffset;
     var service = $('#services').offset().top;
     $('div.right a').removeClass('active');

     if ((windowpos + 200 > $('#aboutUs').offset().top) && (windowpos < $('#services').offset().top - 400)) {
       $('div.right a').removeClass('active');
       $('a[href$="#aboutUs"]').addClass('active');
     }

     if ((windowpos + 200 > $('#services').offset().top) && (windowpos < $('#jobs').offset().top - 400)) {
       $('div.right a').removeClass('active');
       $('a[href$="#services"]').addClass('active');
     }

     if (windowpos + 400 > $('#jobs').offset().top) {
       $('div.right a').removeClass('active');
       $('a[href$="#jobs"]').addClass('active');
     }

     //fade in services
     if (windowpos + 300 > service && fades_1 == 0 && !isTouch)  {
       $('div#service_1').fadeIn('slow', function() {
         fades_1 = 1;
       });
     } else if (isTouch) {
       $('div#service_1').show('slide');
     }

     if (windowpos - 100 > service && fades_2 == 0 && !isTouch) {
       $('div#service_2').fadeIn('slow', function() {
         fades_2 = 1;
       });
     } else if (isTouch) {
       $('div#service_2').show();
     }

     //fade in header text
     if (windowpos + 125 > $('.subnav-middle').offset().top && fades_3 == 0 && !isTouch) {
       $('.subnav-middle').fadeOut('slow', function() {
         fades_3 = 1;
       });
     }
     if (windowpos < 250 && fades_3 == 1 && !isTouch) {
       $('.subnav-middle').fadeIn('slow', function() {
         fades_3 = 0;
       });
     }

   });


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