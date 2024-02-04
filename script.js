document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const menu = document.querySelector('.menu');

    window.addEventListener('scroll', function () {
        activateNavLinks();
        animateOnScroll('.animate');
    });

    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            scrollToSection(targetSection);
            toggleMenu();
        });
    });

    document.querySelector('.logo a').addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection(document.getElementById('home'));
    });

    document.querySelector('.menu-toggle').addEventListener('click', function () {
        toggleMenu();
    });

    function activateNavLinks() {
        let currentSectionId = '';

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 50;
            const sectionBottom = sectionTop + section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
                currentSectionId = section.id;
            }
        });

        navLinks.forEach(function (navLink) {
            navLink.classList.remove('active');
            const targetId = navLink.getAttribute('href').substring(1);

            if (targetId === currentSectionId) {
                navLink.classList.add('active');
            }
        });
    }

    function scrollToSection(targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 40,
            behavior: 'smooth',
        });
    }

    function animateOnScroll(animationClass) {
        const elements = document.querySelectorAll(animationClass);

        elements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight / 1.3) {
                element.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    }

    function toggleMenu() {
        menu.classList.toggle('show');
    }
});
