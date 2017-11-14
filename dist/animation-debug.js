$(function () {

    /// sticky menu

    const $sticky = $('.stickyBar');
    const $logo = $('.logo');
    const $ul = $sticky.find('.menu');
    const top = $ul.offset().top;

    $(function () {
        $(window).on('scroll', function () {
            const pix = $(document).scrollTop();
            if (pix > top) {
                $sticky.addClass('sticky');
                $logo.addClass('sticky-logo');
                $ul.addClass('sticky-menu');
            } else {
                $sticky.removeClass('sticky');
                $logo.removeClass('sticky-logo');
                $ul.removeClass('sticky-menu');
            }
        })
    });

    $(window).on('rezise', function () {
        if ($sticky.hasClass('sticky')) {
            pix = $ul.offset().top;
        } else {
            pix = $sticky.offset().top;
        }

        const pix = $(document).scrollTop();

        if (pix > top) {
            $sticky.addClass('sticky');
            $logo.addClass('sticky-logo');
            $ul.addClass('sticky-menu');
        } else {
            $sticky.removeClass('sticky');
            $logo.removeClass('sticky-logo');
            $ul.removeClass('sticky-menu');
        }
    });

    /// hamburger    

    const hamburger = $('.hamburger');

    function animatedHamburger() {
        hamburger.on("click", function () {
            $(this).toggleClass("is-active");
        });
    };

    /// show hide menu

    function showMenu() {
        hamburger.on('click', function () {
            $ul.slideToggle().addClass('show-hide-menu');
        });
    }
    showMenu();




    /// resize

    const bg = $('.main-section');
    const triangle = $('.triangle');

    function resizeMainBackground() {
        bg.height($(window).height() + 60);
    }

    $(window).resize(resizeMainBackground);

    /// training btns

    var $trainingList = $('.training-list');

    function showHideList() {
        $trainingList.find('dd').addClass('hide');

        $trainingList.find('dt').on('click', function () {
            $(this).next().slideToggle().toggleClass('hide');
            $(this).children().last().toggleClass('rotate');
        })
    }

    resizeMainBackground();
    animatedHamburger();
    showHideList();
});
