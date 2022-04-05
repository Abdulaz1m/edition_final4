new Swiper (".image-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    slidesPerView: 3.5,
    spaceBetween: 30,
    slidesPerGroup: 3,
});

function menuClick () {
    document.getElementById("menu").classList.toggle("menu_active")
}