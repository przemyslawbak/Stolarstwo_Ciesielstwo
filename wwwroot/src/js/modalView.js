//shows details of the 'offer'
// Get the modal
var modal = document.getElementById('myModal');
var wnetrze = document.getElementById("wewnetrzne");
var schody = document.getElementById("schody");
var domki = document.getElementById("domki");
var galanteria = document.getElementById("galanteria");
var zewnetrzne = document.getElementById("zewnetrzne");
var wyposazenie = document.getElementById("wyposazenie");
var ciesielstwo = document.getElementById("ciesielstwo");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
wnetrze.onclick = function () {
    $('.modal-wewnetrzne').css('display', 'block');
    $('html').css('overflow-y', 'hidden');
    modal.style.display = "block";
    $('.modal-wewnetrzne').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
};
schody.onclick = function () {
    $('.modal-schody').css('display', 'block');
    $('html').css('overflow-y', 'hidden');
    modal.style.display = "block";
    $('.modal-schody').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
};
domki.onclick = function () {
    $('.modal-domki').css('display', 'block');
    $('html').css('overflow-y', 'hidden');
    modal.style.display = "block";
    $('.modal-domki').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
};
galanteria.onclick = function () {
    $('.modal-galanteria').css('display', 'block');
    $('html').css('overflow-y', 'hidden');
    modal.style.display = "block";
    $('.modal-galanteria').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
};
zewnetrzne.onclick = function () {
    $('.modal-zewnetrzne').css('display', 'block');
    $('html').css('overflow-y', 'hidden');
    modal.style.display = "block";
    $('.modal-zewnetrzne').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
};
wyposazenie.onclick = function () {
    $('.modal-wyposazenie').css('display', 'block');
    $('html').css('overflow-y', 'hidden');
    modal.style.display = "block";
    $('.modal-wyposazenie').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
};
ciesielstwo.onclick = function () {
    $('.modal-ciesielstwo').css('display', 'block');
    $('html').css('overflow-y', 'hidden');
    modal.style.display = "block";
    $('.modal-ciesielstwo').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $('html').css('overflow-y', 'scroll');
        $('.modal-schody').css('display', 'none');
        $('.modal-wewnetrzne').css('display', 'none');
        $('.modal-domki').css('display', 'none');
        $('.modal-galanteria').css('display', 'none');
        $('.modal-zewnetrzne').css('display', 'none');
        $('.modal-wyposazenie').css('display', 'none');
        $('.modal-ciesielstwo').css('display', 'none');
    }
}