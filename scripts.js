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
});