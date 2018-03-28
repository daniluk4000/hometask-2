function isMobile() {
    if(window.screen.width < 1280) {
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
    $(window).scroll(function(){
        var main = $('main').offset().top;
        var header = $('header#fixed');
        if($(this).scrollTop()>main){
            if(!header.hasClass('animated')) {
                header.addClass('animated').animate({'top': 0}, 500, 'linear');
            }
        } else {
            if(header.hasClass('animated')) {
                header.removeClass('animated').animate({'top': -200}, 500, 'linear');
            }
        }
    });
    $('.menu-search').click(function() {
       $('.search-popup').removeClass('disabled').find('.popup-background').removeClass('disabled').parent().find('.popup-itself').animate({'margin-top': 0}, 200, 'linear');
    });
    $('.search-popup .close, .search-popup .popup-background').click(function() {
        $('.search-popup .popup-background').addClass('disabled').parent().find('.popup-itself').animate({'margin-top': -132}, 200, 'linear');
        setTimeout(function() {
            $('.search-popup').addClass('disabled');
        }, 200)
    });
    $('#phone').mask('+7 (999) 999-99-99');
    $('.header-callme').click(function() {
       $('.callme-popup').css('display', 'flex').hide().fadeIn('slow');
    });
    $('.callme-popup .popup-background, .callme-popup .close').click(function() {
        $('.callme-popup').fadeOut('slow');
    });
});