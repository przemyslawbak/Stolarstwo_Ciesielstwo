//scroll content from the side for `about/wykonujemy`
$(document).ready(function () {
    var boxDraw = $(".wykonujemyTxt");
    var boxDrawTop = boxDraw.offset().top;
    var windowHeight = $(window).height();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= (boxDrawTop - windowHeight)) {
            if ($(window).width() > 576) { boxDraw.addClass("drawWykonujemy"); } //for small screens
        }
    });
});
//scroll content from the side for `about/oFirmie`
$(document).ready(function () {
    var boxDraw = $(".oFirmieTxt");
    var boxDrawTop = boxDraw.offset().top;
    var windowHeight = $(window).height();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= (boxDrawTop - windowHeight)) {
            if ($(window).width() > 576) { boxDraw.addClass("drawOFirmie"); } //for small screens
        }
    });
});