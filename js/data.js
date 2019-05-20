$(function () {
    initData(d);

});


function initData(res) {
    //头部banner
    var banner_list = res.banner;
    for (var i in banner_list) {
        if (!banner_list.hasOwnProperty(i)) continue;

        var content = $("#swiper_top1")[0];
        var div = creElement("div", "swiper-slide", "");
        var img = creElement("img", "", "");
        img.setAttribute("src", banner_list[i].img_url);
        img.setAttribute("alt", banner_list[i].text);
        img.setAttribute("index", i);
        img.onclick = function () {
            var p = this.getAttribute("index");
            if (banner_list[p].clickUrl) {
                window.location.href = banner_list[p].clickUrl;
            }
        };
        div.appendChild(img);
        content.appendChild(div);
    }
    //
    // //集团介绍标题图片
    // $(".title1")[0].setAttribute("src", res.groupTitleImage);
    // //集团介绍文字
    // var arrGroup = res.groupText.split('/n');
    // var div = $(".group_introduce_text")[0];
    // var stringGroup = "";
    // for (var i = 0, len = arrGroup.length; i < len; i++) {
    //     stringGroup += "<p>" + arrGroup[i] + "</p>";
    // }
    // div.innerHTML = stringGroup;
    // //集团介绍轮播图
    // var arrSwiper001 = res.groupImages;
    // for (var i = 0, len = arrSwiper001.length; i < len; i++) {
    //     var content = $("#swiper001")[0];
    //     var div = creElement("div", "swiper-slide", "");
    //     var img = creElement("img", "", "");
    //     img.setAttribute("src", arrSwiper001[i].imageUrl);
    //     img.setAttribute("index", i);
    //     img.onclick = function () {
    //         var posi = this.getAttribute("index");
    //         if (arrSwiper001[posi].clickUrl.length > 0) {
    //             window.location.href = arrSwiper001[posi].clickUrl;
    //         }
    //     }
    //     div.appendChild(img);
    //     content.appendChild(div);
    //
    //     var content1 = $("#swiper0011")[0];
    //     var div1 = creElement("div", "fl", "");
    //     var img1 = creElement("img", "", "");
    //     if (i == 1) {
    //         img1.classList.add("current");
    //     }
    //     img1.setAttribute("src", arrSwiper001[i].imageUrl);
    //     div1.appendChild(img1);
    //     content1.appendChild(div1);
    // }
    //
    // //集团二级介绍标题图片
    // $("#title002")[0].setAttribute("src", res.projectTitleImage);
    //
    // //集团二级介绍
    // var arrIntroduction = res.projects;
    // for (var i = 0, len = arrIntroduction.length; i < len; i++) {
    //     var content = $("#Introduction_list")[0];
    //     var div = creElement("div", "project_introduc_box", "");
    //     var div2 = creElement("div", "project_introduc_img_box", "");
    //     var img = creElement("img", "project_introduc_img", "");
    //     img.setAttribute("src", arrIntroduction[i].leftImage);
    //     div2.appendChild(img)
    //     div.appendChild(div2);
    //
    //     var div3 = creElement("div", "project_introduc_text_box", "");
    //     var div4 = creElement("div", "project_introduc_title", "");
    //     div4.innerHTML = (i + 1) + ". " + arrIntroduction[i].title;
    //     div3.appendChild(div4);
    //     var div5 = creElement("div", "project_introduc_text", "");
    //     div5.innerHTML = arrIntroduction[i].text;
    //     div3.appendChild(div5);
    //     div.appendChild(div3);
    //     div.setAttribute("index", i);
    //     div.onclick = function () {
    //         var posi = this.getAttribute("index");
    //         if (arrIntroduction[posi].clickUrl.length > 0) {
    //             window.location.href = arrIntroduction[posi].clickUrl;
    //         }
    //     }
    //     content.appendChild(div);
    // }
    //
    // var arrSwiper002 = res.projectImages;
    // for (var i = 0, len = arrSwiper002.length; i < len; i++) {
    //     var content = $("#swiper002")[0];
    //     var div = creElement("div", "swiper-slide", "");
    //     var img = creElement("img", "", "");
    //     img.setAttribute("src", arrSwiper002[i].imageUrl);
    //     img.setAttribute("index", i);
    //     img.onclick = function () {
    //         var posi = this.getAttribute("index");
    //         if (arrSwiper002[posi].clickUrl.length > 0) {
    //             window.location.href = arrSwiper002[posi].clickUrl;
    //         }
    //     }
    //     div.appendChild(img);
    //     content.appendChild(div);
    // }
    //
    // //项目介绍
    // $("#title003")[0].setAttribute("src", res.exampleTitleImage);
    //
    // var arrMove = res.example;
    // for (var i = 0, len = arrMove.length; i < len; i++) {
    //     var content = $(".move_project")[0];
    //     var div = creElement("div", "example_box", "");
    //     var img = creElement("img", "example_image", "");
    //     img.setAttribute("src", arrMove[i].exampleImage);
    //     div.appendChild(img);
    //     var div1 = creElement("div", "example_title", "");
    //     div1.innerHTML = arrMove[i].exampleTitle;
    //     div.appendChild(div1);
    //     var div2 = creElement("div", "example_text", "");
    //     var span = creElement("div", "price", "");
    //     span.innerHTML = arrMove[i].exampleText;
    //     div2.appendChild(span);
    //     var span1 = creElement("div", "price_end", "");
    //     span1.innerHTML = "/m²/天";
    //     div2.appendChild(span1);
    //     div.appendChild(div2);
    //     div.setAttribute("index", i);
    //     div.onclick = function () {
    //         var posi = this.getAttribute("index");
    //         if (arrMove[posi].clickUrl.length > 0) {
    //             window.location.href = arrMove[posi].clickUrl;
    //         }
    //     }
    //     content.appendChild(div);
    // }
    //
    // //地图
    // $("#title003")[0].setAttribute("src", res.mapTitle);
    //
    // var arrMap = res.mapImages;
    // for (var i = 0, len = arrMap.length; i < len; i++) {
    //     var content = $("#swiper_map")[0];
    //     var div = creElement("div", "swiper-slide", "");
    //     var img = creElement("img", "image_map_swiper", "");
    //     img.setAttribute("src", arrMap[i].imageUrl);
    //     img.setAttribute("index", i);
    //     img.onclick = function () {
    //         var posi = this.getAttribute("index");
    //         if (arrMap[posi].clickUrl.length > 0) {
    //             window.location.href = arrMap[posi].clickUrl;
    //         }
    //     }
    //     div.appendChild(img);
    //     content.appendChild(div);
    // }
}

function creElement(name, className, idName) {
    var element = document.createElement(name);
    if (className.length > 0) {
        element.setAttribute("class", className);
    }
    if (idName.length > 0) {
        element.setAttribute("id", idName);
    }
    return element;
}