/*
===================================
          Table Content
===================================
1.  isotope filter
2.  slick slider
3.  navber's background color change
4.  smooth scroll
*/


$(function (){

	//isotope filter
	var $grid = $('.portfolio > .items').isotope({
	  itemSelector: '.portfolio > .items > .item'
	});

	$('.portfolio > .buttons').on( 'click', 'button', function() {

		$('.portfolio > .buttons > button').removeClass("active");
		$(this).addClass("active");

	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	//slick slider
	$(document).ready(function(){
	  $('.testemonial > .items').slick({
	    infinite: true,
	  	slidesToShow: 2,
	  	autoplay: true,
	  	autoplaySpeed: 2000,
	  	arrows: false,
	  	responsive: [
	  		{
	  			breakpoint: 768,
	  			settings: {
	  				slidesToShow: 1
	  			}
	  		}
	  	]
	  });
	});

	//navber's background color change
	let expnh = "navbar-collapse collapse show";
	let hp = $("header").offset().top;
	if(hp > 0){
		$("header").addClass("bgw bsb1");
	}
	else {
		$("header").removeClass("bgw bsb1");
	}

	$(window).scroll(function (event){
		expn = $("#navbarSupportedContent").attr("class");
		let scroll = $(window).scrollTop();
		hp = $("header").offset().top;

		if(hp > 0){
			$("header").addClass("bgw bsb1");
		}
		else {
			if(expn != expnh){
				$("header").removeClass("bgw bsb1");
			}
		}
	});

	$("#navToggle").click(function() {
		if(hp == 0){
			$("header").toggleClass("bgw bsb1");
		}
	});

	// smooth scroll
	let hheight = $("header").height();
	$('.test, .nav-link, .navbar-brand, .new-button').click(function() {
	    var sectionTo = $(this).attr('href');
	    $('html, body').animate({
	      scrollTop: $(sectionTo).offset().top - hheight
	    }, 1500, "easeOutCubic");
	});
})