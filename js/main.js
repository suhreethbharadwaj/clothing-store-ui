// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor Logic
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');
const hoverTargets = document.querySelectorAll('.hover-target, a, button, .cat-item, .crafting-video');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
});

hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    target.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

// Sticky Header
const header = document.querySelector('.header-wrapper');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        document.body.classList.add('scrolled-down');
    } else {
        header.classList.remove('scrolled');
        document.body.classList.remove('scrolled-down');
    }
});

// Initialize Hero Swiper
const heroSwiper = new Swiper('.hero-carousel', {
    loop: true,
    effect: 'fade',
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Initialize Testimonial Swiper
const testiSwiper = new Swiper('.testi-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// GSAP Fade Reveals
gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Parallax Effects on Images
gsap.utils.toArray('.parallax-bg').forEach(function(img) {
    gsap.to(img, {
        scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: 100,
        ease: "none"
    });
});
