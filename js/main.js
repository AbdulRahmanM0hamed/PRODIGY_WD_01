let aboutOffset = $('#about').offset().top;

$(window).scroll(function () {
    let Wscroll = $(window).scrollTop();

    if (Wscroll > aboutOffset - 50) {
        $('#main-nav').css('cssText', 'background-color: rgba(0, 0, 0, 0.4) !important');

        $('#btnUp').fadeIn(500);
    }
    else {
        $('#main-nav').css('cssText', 'background-color: transparent !important');

        $('#btnUp').fadeOut(500);

    }
})

$('#btnUp').on('click', function () {
    $('html,body').animate({ scrollTop: '0px' }, 3000)

})

$('.nav-link[href^="#"]').click(function (e) {


    let linkHref = $(e.target).attr('href');
    let linkOffset = $(linkHref).offset().top;

    $('html,body').animate({ scrollTop: linkOffset }, 1000)

})


$('#sideBar i').click(function () {
    let wBox = $('.box').innerWidth();
    console.log($('#sideBar').css('left') == '0px');
    if ($('#sideBar').css('left') == '0px') {
        $('#sideBar').animate({ left: `-${wBox}px` }, 1000)
    }
    else {
        $('#sideBar').animate({ left: `0px` }, 1000)
    }

})


let colorItem = $('.color-item');
let colors = ['red', 'green', 'blue', 'teal', 'orange']
for (let i = 0; i < colors.length; i++) {
    $(colorItem).eq(i).css('backgroundColor', colors[i])

}

$(colorItem).click(function(e){
    let colorThem = $(e.target).css('backgroundColor')

    $(':root').css('--main-color',colorThem)
})













