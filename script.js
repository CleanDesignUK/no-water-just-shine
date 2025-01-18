// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper for Testimonials Slider
    var swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Remove navigation buttons
        navigation: false,
        // Responsive breakpoints
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });

    // Optional: Smooth Scroll for Navbar Links
    const navbarLinks = document.querySelectorAll('.nav-link');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.hash !== "" && this.classList.contains('nav-link')) {
                e.preventDefault();
                const hash = this.hash;

                window.scrollTo({
                    top: document.querySelector(hash).offsetTop - 70, // Adjust for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});
