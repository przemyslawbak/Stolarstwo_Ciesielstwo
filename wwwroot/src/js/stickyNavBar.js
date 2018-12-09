//sticky nav bar
$(document).ready(function () {
    // grab the initial top offset of the navigation
    var windowHeight = $(window).height(); // value in pixels
    if ($(window).width() < 992) windowHeight = windowHeight / 2;
    if ($(window).width() < 576) windowHeight = windowHeight / 4;
    var stickyNavTop = $('.headerBackground').offset().top + windowHeight;
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (window.pageYOffset >= stickyNavTop) {
            $('.stickyContainer').addClass('sticky', 1000);
        } else {
            $('.stickyContainer').removeClass('sticky', 1000);
        }
    };
    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function () {
        stickyNav();
    });
});