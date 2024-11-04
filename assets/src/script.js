const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    loop: true,
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        835: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});