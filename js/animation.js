$(function () {


    /// hamburger    

    let hamburger = $('.hamburger');

    function animatedHamburger() {
        hamburger.on("click", function () {
            $(this).toggleClass("is-active");
        });
    };


    /// sticky menu

    const $sticky = $('.stickyBar');
    const $logo = $('.logo');
    const $ul = $sticky.find('.menu');
    const top = $ul.offset().top;

    $(function () {
        $(window).on('scroll', function () {
            const pix = $(document).scrollTop();
            console.log('scroll: ' + pix);

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



    animatedHamburger();
});
