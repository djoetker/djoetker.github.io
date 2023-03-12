const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', function () {
    hamburger.classList.remove('is-active');
    menu.classList.remove('is-active');

}));

