


/* MOBILE MENU */

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');

toggle.addEventListener('click', () => {

    menu.classList.toggle('active');

});

/* SCROLL REVEAL */

const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

});

fadeElements.forEach(el => observer.observe(el));

