const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        667: {
            slidesPerView: 2,
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