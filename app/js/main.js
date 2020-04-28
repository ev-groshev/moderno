$(function () {

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "12px",
		readOnly: true
	});

	$('.products-slider__inner').slick({
		dots: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [{
				breakpoint: 1900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1401,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		prefix: "$"
	});

	$('.icon-th-list').on('click', function () {
		$('.products__item').addClass('list');
		$('.icon-th-list').addClass('active');
		$('.products__item').removeClass('active');
	});

	$('.icon-th-large').on('click', function () {
		$('.products__item').removeClass('list');
		$('.products__item').addClass('active');
		$('.icon-th-list').removeClass('active');
	});

	$('.menu__btn').on('click', function () {
		$('.menu__list').slideToggle();
	});

	$('.header__btn-menu').on('click', function () {
		$('.header__box').toggleClass('active');
	});

	$('.product-one__tabs .tab, .settigs__tabs .tabs').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.product-one__tabs, .settigs__tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.product-one__tabs .tabs, .settigs__tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	$('input[type="file"], select').styler();

	var mixer = mixitup('.products__inner-box');
});