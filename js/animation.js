$(function () {

    /// sticky menu

    var $sticky = $('.stickyBar');
    var $logo = $('.logo');
    var $ul = $sticky.find('.menu');
    var top = $ul.offset().top;

    $(function () {
        $(window).on('scroll', function () {
            var pix = $(document).scrollTop();
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

        var pix = $(document).scrollTop();

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

    var hamburger = $('.hamburger');

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

    /// resize

    var bg = $('.main-section');
    var triangle = $('.triangle');

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

    // input borders

    var $form = $('.contact-form').find('form').children();
    var $sendBtn = $('.send-btn');
    var mailPattern = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/

    var $nameInput = $form.first();
    var $mailInput = $form.eq(2);
    var $topicInput = $form.eq(4);
    var $textarea = $form.eq(6);

    var $nameLabel = $form.eq(1);
    var $mailLabel = $form.eq(3);
    var $topicLabel = $form.eq(5);
    var $textLabel = $form.eq(7);

    function resetLabels() {
        $nameLabel.html('');
        $mailLabel.html('');
        $topicLabel.html('');
        $textLabel.html('');
    }

    $nameInput.removeClass('border-input');
    $mailInput.removeClass('border-input');
    $topicInput.removeClass('border-input');
    $textarea.removeClass('border-input');

    $nameInput.on('click', function () {
        $(this).toggleClass('border-input');
        $mailInput.removeClass('border-input');
        $topicInput.removeClass('border-input');
        $textarea.removeClass('border-input');

    });
    $mailInput.on('click', function () {
        $nameInput.removeClass('border-input');
        $topicInput.removeClass('border-input');
        $textarea.removeClass('border-input');
        $(this).toggleClass('border-input');
    });
    $topicInput.on('click', function () {
        $nameInput.removeClass('border-input');
        $mailInput.removeClass('border-input');
        $textarea.removeClass('border-input');
        $(this).toggleClass('border-input');
    });
    $textarea.on('click', function () {
        $nameInput.removeClass('border-input');
        $mailInput.removeClass('border-input');
        $topicInput.removeClass('border-input');
        $(this).toggleClass('border-input');
    });

    $sendBtn.on('click', function () {
        var $nameVal = $nameInput.val();
        var $mailVal = $mailInput.val();
        var $topicVal = $topicInput.val();
        var $textVal = $textarea.val();

        function resetInput() {
            $nameInput.val('');
            $mailInput.val('');
            $topicInput.val('');
            $textarea.val('');
        }

        if ($nameVal.length > 5) {
            if (mailPattern.test($mailVal)) {
                if ($topicVal.length > 3) {
                    if ($textVal.length > 5) {
                        //form send
                        resetLabels();
                        resetInput();
                        $nameInput.css('border', ' 1px solid #3e6587');
                        $mailInput.css('border', ' 1px solid #3e6587');
                        $topicInput.css('border', ' 1px solid #3e6587');
                        $textarea.css('border', ' 1px solid #3e6587');
                        $textLabel.css({
                            'color': '#3e6587',
                            'font-size': '16px',
                            'font-weight': 'bold'
                        }).html('Formularz został wysłany!').fadeOut(4000);
                    } else {
                        resetLabels();
                        $textLabel.html('Podany opis jest za krótki!');
                        $nameInput.css('border', ' 1px solid #3e6587');
                        $mailInput.css('border', ' 1px solid #3e6587');
                        $topicInput.css('border', ' 1px solid #3e6587');
                        $textarea.css('border', '2px solid #f29d16');
                    }
                } else {
                    resetLabels();
                    $topicLabel.html('Podany opis tematu jest za krótki!');
                    $nameInput.css('border', ' 1px solid #3e6587');
                    $mailInput.css('border', ' 1px solid #3e6587');
                    $topicInput.css('border', '2px solid #f29d16');
                    $textarea.css('border', ' 1px solid #3e6587');
                }
            } else {
                resetLabels();
                $mailLabel.html('Podany adres e-mail jest nie prawidłowy!');
                $nameInput.css('border', ' 1px solid #3e6587');
                $mailInput.css('border', '2px solid #f29d16');
                $topicInput.css('border', ' 1px solid #3e6587');
                $textarea.css('border', ' 1px solid #3e6587');
            }
        } else {
            $nameLabel.html('Podana wartość jest za krótka!');
            $nameInput.css('border', '2px solid #f29d16');
            $mailInput.css('border', ' 1px solid #3e6587');
            $topicInput.css('border', ' 1px solid #3e6587');
            $textarea.css('border', ' 1px solid #3e6587');
        }
    })


    /// scroll Tops

    var $about = $ul.children().children().first();
    var $training = $ul.children().children().eq(1);
    var $trainingsF2f = $ul.children().children().eq(2);
    var $contact = $ul.children().children().last();

//    console.log($about, $training);

    function clickAndScroll() {
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            var target = this.hash;
            var place = $(this.hash).offset().top;
            $('html, body').stop().animate({
                scrollTop: place,
            }, 1000, function () {
                window.location.hash = target;
            });
        });
    }



    clickAndScroll();
    showMenu();
    resizeMainBackground();
    animatedHamburger();
    showHideList();
});
