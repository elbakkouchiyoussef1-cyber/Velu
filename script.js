// ── OVERLAY ──
function openOverlay(id) {
  document.getElementById('overlayBackdrop').classList.add('active');
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOverlay() {
  document.querySelectorAll('.overlay, .overlay-backdrop')
    .forEach(el => el.classList.remove('active'));
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOverlay();
});

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-visible');
    } else {
      // Re-animate when scrolling back
      entry.target.classList.remove('scroll-visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.scroll-hidden').forEach(el => observer.observe(el));

// ── MOBILE NAV ──
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('active');
    document.querySelector('.hamburger').classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// ── REVIEWS CAROUSEL ── (responsive card width)
function scrollReviews(direction) {
  const grid = document.querySelector('.bewertungen-grid');
  const cardWidth = Math.min(360, window.innerWidth * 0.9) + 3;
  grid.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}

