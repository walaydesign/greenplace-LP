AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 70;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(".sideBtn_top").click(function(){
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

$(".beauty_mode button").click(function() {
    $(this).addClass("active").siblings("button").removeClass("active");
    if($(this).hasClass("beauty_mode-light")) {
        $(".beauty").removeClass("dark").addClass("light");
    }else if($(this).hasClass("beauty_mode-dark")) {
        $(".beauty").removeClass("light").addClass("dark");
    }
})

$(window).on("resize", function() {
    mapResize();
})
mapResize();

function mapResize() {
    if($(window).width() <= 991) {
        let mapWidth = $(".map_main").height() * 1.79;
        let windowWidth = $(window).width();
        let mapX = (mapWidth - windowWidth ) / 2;
        $(".map_inner").animate({scrollLeft: mapX});
    }
}