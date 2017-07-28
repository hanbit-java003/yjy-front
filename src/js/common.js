var menus = require('./model/menu');

$('.header-logo').on('click', function () {     // 로고 클릭 시 메인 페이지로 돌아가기
    location.href = './';
});

$('.header-sub-menu2 > li').on('click', function () {       // header-sub-menu2 클릭 시 다른 페이지로 넘어가게 하기
    var newmenuId = $(this).attr('newmenu-id');

    location.href = './newmenu.html';
});

$('.header-main-menu > li').on('mouseover', function() {    //menu show, hide
    $('.header-menu-text2').show();
});


$('.header-main-menu > li').on('mouseout', function() {
    $('.header-menu-text2').hide();
});









$('.hc-main-visual-slide').ready(function () {      //메인화면 사진 바뀌게
    $('.bs-slider').bsSlider({
        mode: 'fade',
        auto: true
    });


    var mainImgExt = ".jpg"; //1dept 이미지 확장자

    $('.hc-main-visual-slide > li')
        .mouseenter( function() {
            var imgNm = $(this).find('img').attr('src').split(mainImgExt)[0]
            $(this).find('img').attr('src', imgNm + '_on' + mainImgExt);

            $('.hc-main-visual-slide > li').find('span').stop().animate({'opacity':1}, 300);
            $('.hc-main-visual-slide_layer').slideDown(300);
        })
        .mouseleave( function() {
            var imgNm = $(this).find('img').attr('src').split('_on')[0];
            $(this).find('img').attr('src', imgNm + mainImgExt);
        });

    $(".hc-main-visual-slide_layer")
        .mouseleave( function() {
            $('.hc-main-visual-slide > li').find('span').stop().animate({'opacity':0}, 100);
            $('.hc-main-visual-slide_layer').stop(true, true).slideUp(300);
        });





});

