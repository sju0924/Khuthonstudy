$(document).ready(function(){
    $('body').append('<p>제이쿼리로 추가한 문단</p>');
    $('a[href$="html"]').addClass('html');
    $('a[href$="png"]').addClass('img');//아이콘만들기
    
    $('.tab-section').hide();
    $('#tabs a').bind('click', function(e){
        $('.tab-section:visible').hide();
        $('#tabs a.current').removeClass('current').addClass('unselected');
        $(this.hash).show();
        $(this).removeClass('unselected').addClass('current');
        e.preventDefault;
    }).filter(':first').click()//탭만들기

    dynamic();//qna만들기

    $('#scrolling').jScrollPane({
        showArrows : true,
        verticalGutter : 20
    });
    
});

$(document).ready(function(){
    externalLinks();
});


function dynamic(){
    $('dd').hide()
    $('dt').bind('click',function(){
        $(this).next().toggle();
    });
}

function externalLinks(){
    $('a.new-window').bind('click',function(e){
        var location = $(this).attr('href');
        window.open(location);
        e.preventDefault();
    });
}

//$('a[href="../main.html"]').addClass('main');
//$('a[href="../penance.html"]').addClass('penance');
