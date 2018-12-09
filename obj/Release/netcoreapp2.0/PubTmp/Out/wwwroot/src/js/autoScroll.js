//auto scroll on navbar btn click
$(document).ready(function () {
    var windowHeight = $(window).height();
    $('.start').on('click', function (event) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: $("#offer").offset().top - windowHeight/ 5
            }, 1000);
    });
    $('.onas').on('click', function (event) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $("#about").offset().top - windowHeight / 5
        }, 1000);
    });
    $('.kontakt').on('click', function (event) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $("#contact").offset().top - windowHeight / 5
        }, 1000);
    });
});