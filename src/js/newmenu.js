require('bootstrap');
require('../less/newmenu/newmenu.less');

var common = require('./common');

    $('.hc-tab-btns > li').on('click', function () {
        if($(this).hasClass('active')) {
            return;
        }

        var tabIndex = $(this).index();

        var tabBtns = $(this).parent('hc-tab-btns').find('li');
        tabBtns.removeClass('active');
        $(tabBtns[tabIndex]).addClass('active');

        var tabContents = $(this).parents('hc-tab').find('hc-tab-contents > li');
        tabContents.removeClass('active');
        $(tabContents[tabIndex]).addClass('active');
    });

    //newmenu 클릭 시 내용 변경되는 거 템플릿으로 만들고 db저장하기