'use strict'

const btn = document.querySelector('.navbar_link--menu-open');
const menu = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
    if (menu.classList.contains('main-nav_hide')) {
        menu.classList.remove('main-nav_hide');
    } else {
        menu.classList.add('main-nav_hide');
    }
});