$(function() {
    var sticky_navigation_offset_top = $('header').offset().top;
    var sticky_navigation_offset_top2 = 150;
    var sticky_navigation = function() {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > sticky_navigation_offset_top) {
            $('header').css({ 'position': '', 'top': 0, 'left': 0 });
            $('header').addClass('sticky fadeInDown animated');
        } else {
            $('header').css({ 'position': '' });
            $('header').removeClass('sticky fadeInDown animated');
        }
    };
    sticky_navigation();
    $(window).scroll(function() { sticky_navigation(); });
    $('a[href="#"]').click(function(event) {
        event.preventDefault();
    });
});