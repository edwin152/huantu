$(function() {
	// 滚动监听
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if(scroll < 40) {
			$('#float_title_box').removeClass('headerPosition');
			$('#float_title_box2').hide();
		} else {
			$('#float_title_box').addClass('headerPosition');
			$('#float_title_box2').show();
		}
	});
	new Swiper('#swiper_top', {
		loop: true, //循环 最后面一个往后面滑动会滑到第一个
		autoplay: 4000,
		//指示器
		pagination : '.swiper_top',
		paginationClickable :true,
		autoplayDisableOnInteraction: false,
	});

	var mySwiper = new Swiper('#swiper01', {
		loop: true, //循环 最后面一个往后面滑动会滑到第一个
		// autoplay: 4000,
		autoplayDisableOnInteraction: false,
		onSlideChangeStart: function(swiper) {
			$(".swiper-contrast").children(".fl").removeClass("current");
			$(".swiper-contrast").children(".fl").eq(swiper.realIndex).addClass("current");
		}
	});
	new Swiper('#swiper02', {
		loop: false, //循环 最后面一个往后面滑动会滑到第一个
		autoplay: 4000,
		autoplayDisableOnInteraction: false,
		pagination : '.swiper_position002',
		paginationClickable :true,
	});
	new Swiper('#swiper_map_box', {
		loop: true, //循环 最后面一个往后面滑动会滑到第一个
		autoplay: 4000,
		autoplayDisableOnInteraction: false,
		pagination : '.swiper_position_map',
		paginationClickable :true,
		direction : 'vertical'
	});

	$(".swiper-contrast .fl").click(function() {
		$(".swiper-contrast").children(".fl").removeClass("current");
		var index = $(this).index();
		console.log(index)
		mySwiper.slideTo(index + 1, 1000, false);
		$(".swiper-contrast").children(".fl").eq(index).addClass("current");
	});

	var timeqrCode = null;

	$("#qrCodeAnchor").hover(function() {
		$("#qrCode").show();
	}, function() {
		timeqrCode = setTimeout(function() {
			$("#qrCode").hide();
		}, 100);
	});

	$("#qrCode").hover(function() {
		clearTimeout(timeqrCode);
		$("#qrCode").show();
	}, function() {
		$("#qrCode").hide();
	});

	var timeWx = null;
	$(".item_wx").hover(function() {
		$(".item_wx_detail_box").show();
	}, function() {
		timeWx = setTimeout(function() {
			$(".item_wx_detail_box").hide();
		}, 100);
	});

	$(".item_wx_detail_box").hover(function() {
		clearTimeout(timeWx);
		$(".item_wx_detail_box").show();
	}, function() {
		$(".item_wx_detail_box").hide();
	});

	var timePhone = null;
	$(".item_phone").hover(function() {
		$(".item_phone_detail_box").show();
	}, function() {
		timePhone = setTimeout(function() {
			$(".item_phone_detail_box").hide();
		}, 100);
	});

	$(".item_phone_detail_box").hover(function() {
		clearTimeout(timePhone);
		$(".item_phone_detail_box").show();
	}, function() {
		$(".item_phone_detail_box").hide();
	})
});