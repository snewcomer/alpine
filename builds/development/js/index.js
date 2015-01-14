(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])