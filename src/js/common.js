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




var slides = [{
    image: '../src/img/mainBanner_2.jpg'
}, {
    image: '../src/img/mainBanner_3.jpg'
}, {
    image: '../src/img/mainBanner_4.jpg'
}];

var carousel = $('.hc-activity-photos .hc-carousel-visible');
var currentSlideIndex = 0;
var animating = false;

function slide(direction) {
    animating = true;
    clearTimeout(timer);

    var currentSlide = slides[currentSlideIndex];
    var nextSlide;

    if (direction === left) {
        nextSlide = slides[++currentSlideIndex];

        if (!nextSlide) {
            currentSlideIndex = 0;
            nextSlide = slides[currentSlideIndex];
        }
    }
    else if (direction === 'right') {
        nextSlide = slides[--currentSlideIndex];

        if (!nextSlide) {
            currentSlideIndex = slides.length;
            nextSlide = slides[currentSlideIndex]
        }
    }

    var currentElement = carousel.find('li');
    var nextElement = $('<li></li>');
    nextElement.css('background-image', nextSlide.image);
    var animationLeft;

    if (direction === 'left') {
        nextElement.css('left', '100%');
        animationLeft = '-=100%';
    }
    else if (direction === 'right') {
        nextElement.css('left', '-100%');
        animationLeft = '+=100%'
    }

    carousel.append(nextElement);

    carousel.find('li').animate({
        left: animationLeft
    }, {
        duration: 500,
        complate: function () {
            currentElement.remove();
            animating = false;

            if (this === currentElement[0]) {
                return;
            }

            timer = setTimeout(function () {
                slide('left');
            }, 3000);
        }
    });
}


$('hc-carousel-circle').on('click', function () {
   if (animating) {
       return;
   }

   if ($(this).hasClass('left')) {
       slide('left');
   }
   else if ($(this).hasClass('right')) {
       slide('right');
   }
});


var timer = setTimeout(function () {
   slide('left');
}, 2000);


















//메인화면 이미지 변경 안됨ㅠㅠ
/*var photo = ".jpg"; *///1dept 이미지 확장자

/*$('.hc-main-slide').ready(function () {      //메인화면 사진 바뀌게
    $('.bs-slider').bsSlider({
        mode: 'fade',
        auto: true
    });
});*/
/*

$('.hc-main-slide > li.img')
    .mouseenter(function() {
        var imgNm = $(this).find('img').attr('src').split(photo)[0];
        $(this).find('img').attr('src', imgNm + 'active' + photo);

        $('.hc-main-slide > li.img').find('img').stop().animate({'opacity':1}, 300);
        $('.hc-main-slide_layer').slideDown(300);
    })
    .mouseleave( function() {
        var imgNm = $(this).find('img').attr('src').split('_on')[0];
        $(this).find('img').attr('src', imgNm + photo);
    });

$('.hc-main-slide_layer')
    .mouseleave( function() {
        $('.hc-main-slide > li.img').find('img').stop().animate({'opacity':0}, 100);
        $('.hc-main-slide_layer').stop(true, true).slideUp(300);
    });
*/



