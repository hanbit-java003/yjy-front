require('bootstrap');
require('../less/newmenu/newmenu.less');

var common = require('./common');
var menus = require('./model/menu');

$('.goto-main').on('click', function() {
    location.href = 'index.html';
});