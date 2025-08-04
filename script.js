const accordionItems = document.querySelectorAll(".accordian-item");
const swiperContainer = document.querySelector('.swiper-container');
const leftBtn = document.querySelector('.versatile-nav-container img[alt="left"]');
const rightBtn = document.querySelector('.versatile-nav-container img[alt="right"]');
const scrollAmount = 340;
const hamburger = document.querySelector(".hamburger");
const mobileLinks = document.querySelector(".header-mobile-links");
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');
const zoom = document.querySelector('.zoom-preview');
const zoomableObjects = document.querySelectorAll('.zoomable');
const magnifierGlass = document.getElementById('magnifierGlass');


accordionItems.forEach((item) => {
    const titleContainer = item.querySelector(".accordian-title-container");
    const body = item.querySelector(".accordian-body");
    const icon = item.querySelector("img");

    body.style.display = "none";

    titleContainer.addEventListener("click", () => {
        const isOpen = body.style.display === "block";

        accordionItems.forEach((otherItem) => {
            otherItem.querySelector(".accordian-body").style.display = "none";
            otherItem.querySelector("img").src = "./assets/images/accordian-close.svg";
        });

        if (!isOpen) {
            body.style.display = "block";
            icon.src = "./assets/images/accordian-open.svg";
        } else {
            body.style.display = "none";
            icon.src = "./assets/images/accordian-close.svg";
        }
    });
});

rightBtn.addEventListener('click', () => {
    swiperContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

leftBtn.addEventListener('click', () => {
    swiperContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

hamburger.addEventListener("click", () => {
    mobileLinks.classList.toggle("show");
});

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > window.innerHeight / 4) {
        if (currentScrollY > lastScrollY) {
            header.classList.add('sticky-visible');
        } else {
            header.classList.remove('sticky-visible');
        }
    } else {
        header.classList.remove('sticky-visible');
    }

    lastScrollY = currentScrollY;
});

zoomableObjects.forEach(img => {
    img.addEventListener('mouseenter', () => {
        zoom.style.display = 'block';
        magnifierGlass.style.display = 'flex';
        zoom.style.backgroundImage = `url(${img.src})`;
    });

    img.addEventListener('mousemove', (e) => {
        const rect = img.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / img.width) * 100;
        const y = ((e.clientY - rect.top) / img.height) * 100;

        zoom.style.backgroundPosition = `${x}% ${y}%`;
        magnifierGlass.style.top = `${e.clientY - 50}px`;
        magnifierGlass.style.left = `${e.clientX - 50}px`;
    });

    img.addEventListener('mouseleave', () => {
        zoom.style.display = 'none';
        magnifierGlass.style.display = 'none';
    });
});






