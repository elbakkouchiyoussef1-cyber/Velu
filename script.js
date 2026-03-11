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