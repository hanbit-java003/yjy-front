require('bootstrap');
require('../less/newmenu/newmenu.less');

var common = require('./common');

$('.hta-tab-header > li').on('click', function () {
    if ($(this).hasClass('active')) {
        return;
    }

    var tabHeader = $(this).parent('.hta-tab-header');      //자기거
    var tabContents = $(this).parents('.hta-tab').find('hta-tab-contents');

    tabHeader.find('li').removeClass('active');
    tabContents.find('span').removeClass('active');

        $('.hta-tab-header > li').removeClass('active');
        $('.hta-tab-contents > li').removeClass('active');

    var tabId = $(this).attr('tab-id');

    tabHeader.find('li[tab-id=' + tabId + ']').addClass('active');
    tabContents.find('span[tab-id=' + tabId + ']').addClass('active');
});









/*    $('.hc-tab-header > li').on('click', function () {
        if($(this).hasClass('active')) {
            return;
        }

        var tabId = $(this).index();

        var tabBtns = $(this).parent('hc-tab-btns').find('li');
        tabBtns.removeClass('active');
        $(tabBtns[tabId]).addClass('active');

        var tabContents = $(this).parents('hc-tab').find('hc-tab-contents > li');
        tabContents.removeClass('active');
        $(tabContents[tabId]).addClass('active');
    });

    //newmenu 클릭 시 내용 변경되는 거 템플릿으로 만들고 db저장하기*/