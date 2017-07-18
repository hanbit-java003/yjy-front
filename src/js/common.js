var menus = require('./model/menu');

function initMenu() {
    var template = require('../template/header-menu.hbs');

    $('.header-menu').empty();

    for (var i=0; i<menus.length; i++) {
        var menuHtml = template(menus[i]);

        $('.header-menu').append(menuHtml);
    }
}



$('.header-logo').on('click', function () {     /*로고 클릭했을 때 메인화면으로 가기*/
    location.href = './';
});

$('.header-sub-menu > li').on('click', function () {
    var newmenuId = $(this).attr('newmenu-id');

    location.href = './newmenu.html?id=' + newmenuId;
});

function initMenu() {
    var template = require('../template/header.hbs');
    var menuHtml = template(menus);

    $('.header-menu');

    $('.header-sub-menu > li').on('mouseover', function () {
        $(this).find('.header-sub-menu2').show();
    });

    $('.header-sub-menu > li').on('mouseout', function () {
        $(this).find('.header-sub-menu2').hide();
    });
}
/*

$('.header-sub-menu > li').on('mouseover', function() {
    $(this).find('.header-sub-menu2').show();
        var subMenu = $(this).find('.header-sub-menu2');
        var subMenuItemWidth = subMenu.find('li').outerWidth();
        var subMenuItemMaxCount = 5;
        var subMenuItemCount = subMenu.find('li').length;
        var width = subMenuItemWidth
        * Math.min(subMenuItemCount, subMenuItemMaxCount);

    if ($(this).offset().left + width > $(window).width()) {
        var subMenuLeft = $(window).width() - ($(this).offset().left + width);
        subMenu.css('left', subMenuLeft);
    }
    else {
        subMenu.css('left', 0);
    }

        subMenu.width(width);
        subMenu.show();
});

$('.header-sub-menu > li').on('mouseout', function() {
    $(this).find('.header-sub-menu2').hide();
});*/
