let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Toggle navbar on small screens
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Highlight active link while scrolling
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(section => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                let targetLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });
        }
    });

    // Remove toggle icon and navbar on scroll (optional)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Optional: Close navbar on link click (for mobile experience)
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});
