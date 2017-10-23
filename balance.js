$(document).ready(function() {

	// Validate Forms
	$("#pass").validate();
	$("#login").validate();
	$("#contact").validate();

	// Page Title to Fill Container
	$('.page-title').bigtext();

	// Toggle Pass
	$('.togglePass').on('click', function() {
		$('.login-form').slideUp();
		$('.pass-form').slideToggle();
	});

	// Toggle Login
	$('.toggleLogin').on('click', function() {
		$('.pass-form').slideUp();
		$('.login-form').slideToggle();
	});

	// Close Button
	$('button.close-btn').on('click', function() {
		$(this).parent().slideUp();
	});

	// Toggle Locations
	$('#toggleLocations').on('click', function() {
		$('.locations-menu').slideToggle();
	});

	// Navigation Toggle
	$('#toggleNav').on('click', function() {
		$('.navigation').slideToggle();
		$(this).toggleClass('toggle');
	});

	// Load More Communities
	$('#load-more').on('click', function() {
		$('#toggleComm').slideToggle();
	});

	// Change Text from Load More
	$('#load-more').on('click', function() {
		$(this).text(function(i, text){
			return text === "+ Load More" ? "- See Less" : "+ Load More";
		})
	});

	// Locations Animation
	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({
		triggerElement: "body"
	})
	.setTween(".hero", 0.5, {opacity: 1, delay: 0.5})
	.addTo(controller);

	var scene = new ScrollMagic.Scene({
		triggerElement: ".locations"
	})
	.setTween(".schedules", 0.5, {opacity: 1, delay: 0.5})
	.addTo(controller);

	var scene = new ScrollMagic.Scene({
		triggerElement: ".locations"
	})
	.setTween(".tc", 0.5, {opacity: 1, delay: 1})
	.addTo(controller);

	var scene = new ScrollMagic.Scene({
		triggerElement: ".locations"
	})
	.setTween(".ch", 0.5, {opacity: 1, delay: 1.5})
	.addTo(controller);

	var scene = new ScrollMagic.Scene({
		triggerElement: ".locations"
	})
	.setTween(".fb", 0.5, {opacity: 1, delay: 2})
	.addTo(controller);

	var scene = new ScrollMagic.Scene({
		triggerElement: ".locations"
	})
	.setTween(".gp", 0.5, {opacity: 1, delay: 2.5})
	.addTo(controller);

	// Premium Offerings
	$('.tab').on('click', function() {
		var tab_id = $(this).attr('data-tab');

		$('.tab').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$('#'+tab_id).addClass('current');
	});

	// Team Carousel
	$('.team-container').slick({
	  centerMode: true,
	  centerPadding: '70px',
	  slidesToShow: 4,
	  prevArrow: '<button type="button" class="slick-prev"><span class="prev"></span></button>',
	  nextArrow: '<button type="button" class="slick-next"><span class="next"></span></button>',
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 640,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	// Premium Offerings on Mobile
	$('.offerings-detail').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		infinite: false,
		asNavFor: '.offerings-nav'
	});

	$('.offerings-nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<button type="button" class="slick-prev"><span class="prev"></span></button>',
	  nextArrow: '<button type="button" class="slick-next"><span class="next"></span></button>',
		asNavFor: '.offerings-detail'
	});

	// Filter Classes
	var mixer = mixitup('.class-container', {
		load: {
			filter: '.initial-load'
		}
	});

	// Change Text from Load More
	$('.load-more').on('click', function() {
		$(this).text(function(i, text){
			return text === "+ Load More" ? "- See Less" : "+ Load More";
		})
	});

	// Hide Load More on Filter Click
	$('.filter-container li').on('click', function() {
		$('.load-more').hide();
	});

});