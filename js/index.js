window.onload = function() {
	initData(a);

	if (a.topImage.length > 1){
        new Swiper('#swiper_top', {
            loop: false, //循环 最后面一个往后面滑动会滑到第一个
            autoplay: 4000,
            //指示器
            pagination: '#swiper_top_position',
            paginationClickable: true,
            autoplayDisableOnInteraction: false
        });
    }else{
        new Swiper('#swiper_top', {
            loop: false, //循环 最后面一个往后面滑动会滑到第一个
            autoplay: 4000,
            //指示器
            autoplayDisableOnInteraction: false
        });
    }

	var mySwiper = new Swiper('#swiper01', {
		loop: false, //循环 最后面一个往后面滑动会滑到第一个
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
		pagination: '.swiper_position002',
		paginationClickable: true,
	});
	new Swiper('#swiper_map_box', {
		loop: false, //循环 最后面一个往后面滑动会滑到第一个
		autoplay: 4000,
		autoplayDisableOnInteraction: false,
		pagination: '.swiper_position_map',
		paginationClickable: true,
		direction: 'vertical'
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
	});

	// 设置地图标签
	var markers = [{
			content: "我的备注1",
			title: "我的标记1",
			imageOffset: {
				width: 0,
				height: 3
			},
			position: {
				lat: 31.232965,
				lng: 121.479965
			},
			isSelect: true
		},
		{
			content: "我的备注1",
			title: "我的标记2",
			imageOffset: {
				width: 0,
				height: 4
			},
			position: {
				lat: 31.235965,
				lng: 121.473965
			},
			isSelect: false
		},
		{
			content: "我的备注1",
			title: "我的标记3",
			imageOffset: {
				width: 0,
				height: 3
			},
			position: {
				lat: 31.236965,
				lng: 121.474965
			},
			isSelect: false
		},
		{
			content: "我的备注1",
			title: "我的标记4",
			imageOffset: {
				width: 0,
				height: 3
			},
			position: {
				lat: 31.238965,
				lng: 121.476965
			},
			isSelect: false
		}
	];
	var iframe = window.frames["map_frame"];
	iframe.setMarkers(markers);
};

function initData(res) {
	//头部banner
	var banner_list = res.topImage;
	for(var i = 0, len = banner_list.length; i < len; i++) {
		if(!banner_list.hasOwnProperty(i)) continue;

		var content = document.getElementById("swiper_top1");
		var div = creElement("div", "swiper-slide", "");
		var img = creElement("img", "", "");
		img.setAttribute("src", banner_list[i].imageUrl);
		img.setAttribute("alt", banner_list[i].text);
		img.setAttribute("index", i);
		img.onclick = function() {
			var p = this.getAttribute("index");
			if(banner_list[p].clickUrl) {
				window.location.href = banner_list[p].clickUrl;
			}
		};
		div.appendChild(img);
		content.appendChild(div);
	}

	var arrSwiper002 = d.life_format;
	for(var i = 0, len = arrSwiper002.length; i < len; i++) {
		var content = document.getElementById("swiper002");
		var div = creElement("div", "swiper-slide", "");
		var img = creElement("img", "", "");
		img.setAttribute("src", arrSwiper002[i].img_url);
		img.setAttribute("index", i);
		img.onclick = function() {
			var posi = this.getAttribute("index");
			if(arrSwiper002[posi].clickUrl.length > 0) {
				window.location.href = arrSwiper002[posi].clickUrl;
			}
		};
		div.appendChild(img);
		content.appendChild(div);
	}
}

function creElement(name, className, idName) {
	var element = document.createElement(name);
	if(className.length > 0) {
		element.setAttribute("class", className);
	}
	if(idName.length > 0) {
		element.setAttribute("id", idName);
	}
	return element;
}