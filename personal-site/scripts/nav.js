const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.links');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('open');
    btn.classList.toggle('change');
}