var menus = require('./model/menu');

$('.header-logo').on('click', function () {     // 로고 클릭 시 메인 페이지로 돌아가기
    location.href = './';
});

$('.header-sub-menu2 > li').on('click', function () {       // header-sub-menu2 클릭 시 다른 페이지로 넘어가게 하기
    var newmenuId = $(this).attr('newmenu-id');

    location.href = './newmenu.html';
});

$('.header-main-menu > li').on('mouseover', function() {
    $('.header-menu-text2').show();


});



$('.header-main-menu > li').on('mouseout', function() {
    $('.header-menu-text2').hide();
});



