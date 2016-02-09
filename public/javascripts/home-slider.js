$(document).ready(function(){
    var slick = $('.single-item').slick({
        arrows: false,
        autoplay: true,
        speed: 777,
        autoplaySpeed: 4444,
        appendArrows: $('#home-arrows')
    });
    
    $('#home-next').on('click', function () {
        slick.slickNext();
    });
    $('#home-prev').on('click', function () {
        slick.slickPrev();
    });
});