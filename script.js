


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

/* BOOKING FORM */

const bookingForm = document.getElementById('bookingForm');

if(bookingForm){

    bookingForm.addEventListener('submit', function(e){

        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;

        const whatsappMessage =
`Hello Modish,%0A%0A
Name: ${name}%0A
Phone: ${phone}%0A
Service: ${service}%0A
Details: ${message}`;

        window.open(
`https://wa.me/2349157220613?text=${whatsappMessage}`,
'_blank'
        );

    });

}

