$(document).ready(function() {

	$('.toogle-mnu.head').click(function() {
		$(this).toggleClass('on');
		$('.main-mnu').slideToggle();
		return false;
	});

	$('.toogle-mnu.foot').click(function() {
		$(this).toggleClass('on');
		$('.main-mnu__footer').slideToggle();
		return false;
	});

	$('.toogle-mnu.foot').click(function() {
		$('html, body').animate({
			scrollTop: $(document).height()
		}, "slow");
		return false;
	});

	$('.scrollTop_footer').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, "slow");
		return false;
	});

	$('.main-head .arrow-bottom').click(function() {
		$('html, body').animate({
			scrollTop: $('.main-head').height() + 150
		}, "slow");
		return false;
	});

	$('.section_1 .info-item').equalHeights();
	$('.section_3 .info-item').equalHeights();
	$('.section_4 .cards .card').equalHeights();
	$('.section_6 .teams .team').equalHeights();
	$('.section_8 .item-porf ').equalHeights();

	$('.section_4').waypoint(function() {
		$('.section_4 .card').each(function(index) {
			var ths =$(this);
			setInterval(function() {
				ths.removeClass('card-off').addClass('card-on');
			}, 250*index);
		});
	}, {
		offset: "35%"
	});

	$('.section_5').waypoint(function() {
		$('.section_5 .work-item').each(function(index) {
			let ths2 = $(this),
					indNew = index + 1;

			if(ths2.hasClass('work-item__off')) {
				setTimeout(function() {
					ths2.removeClass('work-item__off');
					var myAnimation = new DrawFillSVG({
							elementId: 'tc-svg' + indNew
					});
					ths2.children('.work-item__content').addClass('anim_cont');
				}, 500*index);
			} else {
				return false;
			}
		});

	}, {
		offset: "35%"
	});

	$('.section_6').waypoint(function() {

		$('.section_6 .team').each(function(index) {
			var ths2 =$(this);
			setInterval(function() {
				ths2.removeClass('team-off').addClass('team-on');

			}, 250*index);
		});
	}, {
		offset: "35%"
	});

// slider owl.carousel
	$('.owl-carousel').owlCarousel({
		items : '1',
		loop : true,
		nav : true
	});

	$('.slider .owl-nav span').html('');

	// *****Animate******

$('.section-head h2, .section-head p').animated("fadeInRight");
$('.info-item-wrap .info-item').animated("zoomIn");

$('.section_2').waypoint(function() {

	$('.section_2 .s2-item').each(function(index) {
		var ths2 =$(this);
		setInterval(function() {
			ths2.addClass('on');

		}, 250*index);
	});
}, {
	offset: "35%"
});

$('.section_8').waypoint(function() {

	$('.section_8 .item-prof').each(function(index) {
		var ths2 =$(this);
		setInterval(function() {
			ths2.addClass('on');

		}, 250*index);
	});
}, {
	offset: "35%"
});

$('.section_8 .forms').animated("flipInX");


// overlay-popup

	$('.popup_open').on('click', function() {

		$('body').addClass('body_scroll');

		$('.overlay .popup .forms h4').text($(this).text());
		$('.overlay').removeClass('off').addClass('on');
		$('.overlay .popup').removeClass('off').addClass('on');



		$('.popup .close-btn').click(function() {
			$('.overlay .popup').removeClass('on').addClass('off');
			$('.overlay').removeClass('on').addClass('off');
			$('body').removeClass('body_scroll');
		});

		return false;
	});

});