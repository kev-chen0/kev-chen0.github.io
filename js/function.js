jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 700) {
      $('.exp1').addClass('col');
      $('.exp2').addClass('col');
      $('.exp1').removeClass('col-3');
      $('.exp2').removeClass('col-9');
    } else if (ww >= 701) {
      $('.exp1').removeClass('col');
      $('.exp2').removeClass('col');
      $('.exp1').addClass('col-3');
      $('.exp2').addClass('col-9');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  alterClass();
});

$(document).ready(function() {

  $('.testimonial-box').on('click', function(event){
    var $this = $(this);
    if($this.hasClass('clicked')){
      $this.removeAttr('style').removeClass('clicked');
    }
  });

});

(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();

  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // // Preloader
  // $(window).on('load', function () {
  //   if ($('#preloader').length) {
  //     $('#preloader').delay(100).fadeOut('slow', function () {
  //       $(this).remove();
  //     });
  //   }
  // });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30,
      smartBackspace: true,
		});
	}

    // Portfolio
    $('.portfolio-carousel').owlCarousel({
        autoplay: false,
        autoplayTimeout: 2000,
    		autoplayHoverPause: true,
        loop: true,
        margin: 20,
        nav: true,
        responsiveClass: true,
        responsive: { 0: { items: 1 } }
      });

  // Experience
  $('.experience-carousel').owlCarousel({
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      loop: true,
      margin: 20,
      nav: true,
      responsiveClass: true,
      responsive: { 0: { items: 1 } }
    });

  // Project
  $('.project-carousel').owlCarousel({
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      loop: true,
      margin: 20,
      nav: true,
      responsiveClass: true,
      responsive: { 0: { items: 1 } }
    });

  // Skills
  $('.services-carousel').owlCarousel({
      autoplay: true,
      autoplayTimeout: 2000,
  		autoplayHoverPause: true,
      loop: true,
      margin: 20,
      nav: true,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });


  // Project owl
  $('#portfolio-cont').owlCarousel({
		margin: 20,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		responsive: {
			0: {
				items: 1,
			},
		},
    nav    : true,
    smartSpeed :900,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
	});

	/*--/ Experience owl /--*/
	$('#job-cont').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		responsive: {
			0: {
				items: 1,
			},
		},
    nav    : true,
    smartSpeed :900,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
	});

	/*--/ Activities owl /--*/
	$('#activities-cont').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		responsive: {
			0: {
				items: 1,
			}
		},
    nav    : true,
    smartSpeed :900,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
	});

	/*--/ Awards owl /--*/
	$('#awards-cont').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		responsive: {
			0: {
				items: 1,
			}
		},
    nav    : true,
    smartSpeed :900,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
	});

	/*--/ Summit owl /--*/
	$('#summit-cont').owlCarousel({
		margin: 20,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: false,
		responsive: {
			0: {
				items: 1,
			}
		},
    nav    : true,
    smartSpeed :900,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
	});

})(jQuery);

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})

var OpenTab;

function showTab(num) {
  try{
      if(OpenTab!=undefined){
        var OldTabID = document.getElementById('tab'+OpenTab);
        var OldPanelID = document.getElementById('panel'+OpenTab);
        OldTabID.className = '';
        OldPanelID.className = 'hide';
        OldTabID.setAttribute('aria-selected', false);
        OldPanelID.setAttribute('aria-hidden', true);
      }
      var TabID = document.getElementById('tab'+num);
      var PanelID = document.getElementById('panel'+num);
      TabID.className = 'selected';
      PanelID.className = 'selected';
      TabID.setAttribute('aria-selected', true);
      PanelID.setAttribute('aria-hidden', false);
      OpenTab = num;
  }catch(e){}
}

showTab(1);

// Contact Form
// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseconfig = {
  apiKey: "AIzaSyCwDBt09-InBOhsO3FvAF5k9043avzUIuY",
  authDomain: "web-port-folio.firebaseapp.com",
  databaseURL: "https://web-port-folio.firebaseio.com",
  projectId: "web-port-folio",
  storageBucket: "web-port-folio.appspot.com",
  messagingSenderId: "351464750374",
  appId: "1:351464750374:web:47c4fce61adfff4d9655e7",
  measurementId: "G-39D426YYGD"
};
firebase.initializeApp(firebaseconfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  if(name != "" && email != "" && subject != "" && message != "")
  {
    // Save message
    saveMessage(name, email, subject, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
  }
  else {
    // Show alert
    document.getElementById('messageerror').style.display = 'block';
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.getElementById('messageerror').style.display = 'none';
    },3000);
  }
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    subject:subject,
    message:message
  });
}
