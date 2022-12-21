$(function() {
	//Header Window Full Size
	/*function wResize() {
		$("header.main_header, .project-item").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});*/

	$('#main-navbar').wrapInner('<div class="container"><div class="row"></div></div>');
	$('.navbar-toggler').on('click', function(event) {
			event.preventDefault();
			$('body').addClass('no-scroll');
			$('#main-navbar').addClass('open');
			return false;
		});
		$('.navbar-close').on('click', function(event) {
			event.preventDefault();
			$('body').removeClass('no-scroll');
			$('#main-navbar').removeClass('open');
			return false;
		});
		
		var mql = window.matchMedia('all and (min-width: 980px)');
		if (mql.matches) {
			$('ul.navbar-nav li.dropdown').hover(function() {
				$(this).addClass('hover').find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
			}, function() {
				$(this).removeClass('hover').find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
			});
		}
	

	//OWL Carousel Plugin
	//Documentation: https://owlcarousel2.github.io/OwlCarousel2/
	$(".main-slider").owlCarousel({
		responsive : {
			0 : {
				items : 1,
				nav : false,
				margin: 5,
				dots: true
			}
		}
	});

	var owlProject = $(".project-slider").owlCarousel({
		responsive : {
			0 : {
				nav : false,
				dots: true,
			},
			1160 : {
				nav : true,
				navText: "",
				navContainerClass: "container container-nav"
			}
		},
		items : 1
	});

	var $eventSelect = $('.select2').select2({
		theme: "default",
		placeholder: "Выбрать из списка"
	});

	/*$eventSelect.on("select2:open", function (e) { 
		$(".select2-results").mCustomScrollbar();
	});*/

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
