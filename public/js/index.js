AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 70;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})

var swiperTransport = new Swiper(".transport_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 800,
    pagination: {
        el: "#transport-pagination",
        clickable: true,
    },
})

var swiperChill = new Swiper(".chill_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 800,
    pagination: {
        el: "#chill-pagination",
        clickable: true,
    },
})

var swiperChillText = new Swiper(".chill_textSwiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: "#chill-next",
        prevEl: "#chill-prev",
    },
    speed: 800,
    allowTouchMove: false,
})