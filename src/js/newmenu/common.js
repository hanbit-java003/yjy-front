$('.menu-list > li').on('click', function () { //누르면 링크로 가게
    var link = $(this).attr('link');

    if (!link) { //아닌 경우를 먼저 체크해서 빨리 끝내고 맞는 경우는 if문 밖에서 그냥 한다. 맞는 경우를 if문으로 넣으면 계속 if문이 도니까}}
        return;
    }

    location.href = './newmenu + .html';
});