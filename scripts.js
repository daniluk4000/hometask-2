function isMobile() {
    if (window.screen.width < 1280) {
        return true;
    } else {
        return false;
    }
}

$(document).ready(function () {
    $('.print').click(function () {
        window.print();
    });
    $('.project-open').click(function () {
        $('.projects-menu-item').removeClass('active');
        $(this).addClass('active');
        if ($(this).hasClass('open-inet')) {
            $('.type-inet').show('slow');
            $('.type-org').hide('slow');
        } else if ($(this).hasClass('open-org')) {
            $('.type-org').show('slow');
            $('.type-inet').hide('slow');
        } else {
            $('.project').show('slow');
        }
    });
    if (!isMobile())
        $(window).scroll(function () {
            var main = $('main').offset().top;
            var header = $('header#fixed');
            var footer = $('footer').offset().top;
            var scroll = $('#scroll');
            if ($(this).scrollTop() > main) {
                if (scroll.hasClass('disabled'))
                    scroll.removeClass('disabled').removeClass('gone').addClass('enabled');
                if (!header.hasClass('animated')) {
                    header.addClass('animated').animate({'top': 0}, 500, 'linear');
                }
                if($(this).scrollTop() + + $(this).height()> footer) {
                    var bottom = $(this).scrollTop() + $(this).height() - footer + 20;
                    scroll.css('bottom', bottom);
                } else {
                    scroll.removeAttr('style');
                }
            } else {
                if (scroll.hasClass('enabled')) {
                    setTimeout(function () {
                        scroll.addClass('gone')
                    }, 450, scroll);
                    scroll.removeClass('enabled').addClass('disabled');
                }
                if (header.hasClass('animated')) {
                    header.removeClass('animated').animate({'top': -200}, 500, 'linear');
                }
            }
        });
    $('#scroll').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
    if (!isMobile()) {
        $('.menu-search').click(function () {
            $('.search-popup').removeClass('disabled').find('.popup-background').removeClass('disabled').parent().find('.popup-itself').animate({'margin-top': 0}, 200, 'linear');
        });
        $('.search-popup .close, .search-popup .popup-background').click(function () {
            $('.search-popup .popup-background').addClass('disabled').parent().find('.popup-itself').animate({'margin-top': -132}, 200, 'linear');
            setTimeout(function () {
                $('.search-popup').addClass('disabled');
            }, 200)
        });
        $('#phone').mask('+7 (999) 999-99-99');
        $('.header-callme').click(function () {
            $('.callme-popup').css('display', 'flex').hide().fadeIn('slow');
        });
        $('.callme-popup .popup-background, .callme-popup .close').click(function () {
            $('.callme-popup').fadeOut('slow');
        });
    }
    $('header .burger').click(function () {
        if ($(this).hasClass('enabled')) {
            $('.header__bottom').removeClass('expanded');
            $(this).removeClass('enabled');
            $('body').removeClass('burger');
        } else {
            $('.header__bottom').addClass('expanded');
            $('body').addClass('burger');
            $(this).addClass('enabled');
        }
    });
    $('.has-menu').click(function (e) {
        if (isMobile()) {
            e.stopPropagation();
            if ($(this).hasClass('enabled'))
                $(this).removeClass('enabled');
            else
                $(this).addClass('enabled');
            return false;
        }
    });
});