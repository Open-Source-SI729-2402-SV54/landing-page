const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".about__section", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".section__header", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".experience__content", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
});


ScrollReveal().reveal(".chef__image img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".chef__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".chef__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".chef__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
});



const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});
