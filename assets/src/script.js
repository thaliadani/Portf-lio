mudarTema();

function mudarTema() {
    const toggleTheme = document.getElementById("botao-tema");
    const rootHtml = document.documentElement;

    toggleTheme.addEventListener("click", (changeTheme) => {
        const currentTheme = rootHtml.getAttribute("data-theme");

        changeThemeTo = (newTheme) => {
            document.documentElement.setAttribute("data-theme", newTheme);
        };

        currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

        toggleTheme.classList.toggle("fa-sun");
        toggleTheme.classList.toggle("fa-moon");
    });
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    loop: true,
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});