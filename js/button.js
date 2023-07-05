$(function () {
    $('.main_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.game_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 500 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    });

    // ----------------------------------------

    $('.mobile_btn').on('click', function () {
        $('.gnb').toggleClass('on');
    });


    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        };

        $(this).next().stop().slideDown();
        $(this).parent().siblings().find('.sub').stop().slideUp();

    });


    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });


});