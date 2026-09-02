const bgLayer = document.getElementById('bg-layer');
const parallaxSpeed = 0.3;

function sizeBgLayer() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const buffer = scrollableHeight * parallaxSpeed;

    bgLayer.style.top = `-${buffer}px`;
    bgLayer.style.height = `calc(100vh + ${buffer}px)`;
}

function updateParallax() {
    const scrollY = window.scrollY;
    bgLayer.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
}

window.addEventListener('load', sizeBgLayer);
window.addEventListener('resize', sizeBgLayer);
window.addEventListener('scroll', updateParallax);
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15 // triggers once 15% of the element is visible
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});
const typewriterText = "Systems Developer — building things across the galaxy";
const typewriterEl = document.getElementById('typewriter-text');
let charIndex = 0;

function typeWriter() {
    if (charIndex < typewriterText.length) {
        typewriterEl.textContent += typewriterText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 40); // typing speed in ms per character
    }
}

window.addEventListener('load', typeWriter);
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.screenshot-thumb, .corner-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
        lightboxImg.src = thumb.src;
        lightboxCaption.textContent = thumb.alt;
        lightbox.classList.add('open');
    });
});

function closeLightbox() {
    lightbox.classList.remove('open');
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox(); // only closes if clicking the dark backdrop, not the image itself
});
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu when a link is tapped
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});