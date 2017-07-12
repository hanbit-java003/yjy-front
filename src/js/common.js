var menu = require('./model/menu');


$('.header-menu-text > li').on('mouseover', function() {
    $(this).find('.header-sub-menu').show();

    subMenu.width(width);
    subMenu.show();
});

$('.header-menu-text > li').on('mouseout', function() {
    $(this).find('.header-sub-menu').hide();
});
