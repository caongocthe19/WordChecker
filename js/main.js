(function ($) {
	"use strict";
	$(document).ready(function () {

		// Menu mobile
		$('.mobile-menu').on('click', function () {
			$(this).parents('.main-menu').toggleClass('open');
			$(this).parents('body').toggleClass('over-hidden');
		});

		// Back-to-top
		if ($('#back-top').length) {
			var scrollTrigger = 100, // px
				backToTop = function () {
					var scrollTop = $(window).scrollTop();
					if (scrollTop > scrollTrigger) {
						$('#back-top').addClass('show');
					} else {
						$('#back-top').removeClass('show');
					}
				};
			backToTop();
			$(window).on('scroll', function () {
				backToTop();
			});
			$('#back-top').on('click', function (e) {
				e.preventDefault();
				$('html,body').animate({
					scrollTop: 0
				}, 700);
			});
		}

		// // header fixed
		$(window).scroll(function () {
			var sticky = $('.site-header'),
				scroll = $(window).scrollTop();

			if (scroll >= 40) {
				sticky.addClass('fixed');
			} else {
				sticky.removeClass('fixed');
			}
		})

		//Tab--main
		$(".tab-control li:first-child").addClass("active");

		var first_tab = $(".tab-control li:first-child a").attr("href");
		$(first_tab).show();

		$(".tab-control li a").click(function (event) {
			event.preventDefault();
			$(this).parents("ul").find("li").removeClass("active");
			$(this).parent().addClass("active");
			var id = $(this).attr("href");
			$(".tab-content").hide();
			$(id).show();
		});


		if (document.cookie.indexOf("accepted_cookies=") < 0) {
		  $('.cookie-overlay').removeClass('d-none').addClass('d-block');
		}

		$('.accept-cookies').on('click', function() {
		  document.cookie = "accepted_cookies=yes;"
		  $('.cookie-overlay').removeClass('d-block').addClass('d-none');
		})

		// expand depending on your needs
		$('.close-cookies').on('click', function() {
		  $('.cookie-overlay').removeClass('d-block').addClass('d-none');
		})

	});
})(jQuery);