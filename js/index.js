const BURGER = document.querySelector('.burger');
const MENU = document.querySelector('.header-nav');
const BODY = document.querySelector('body');

BURGER.addEventListener('click', toggleMenu);

function toggleMenu() {
    BURGER.classList.toggle('active');
    MENU.classList.toggle('open');
    
}


let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((el) => el.addEventListener('click', closeMenu));

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        MENU.classList.remove('open');
        BURGER.classList.remove('active');
    }
      
}

/* MENU.addEventListener('click', function() {
    BURGER.classList.toggle('active');
    MENU.classList.toggle('open');
}); */


