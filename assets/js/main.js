// Mobile menu toggle
function toggleMenu() {
  const btn = document.getElementById('hamBtn');
  const ov  = document.getElementById('menuOverlay');
  btn.classList.toggle('open');
  ov.classList.toggle('open');
  document.body.style.overflow = ov.classList.contains('open') ? 'hidden' : '';
}

// Scroll reveal
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.07, rootMargin: '0px 0px -20px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Navbar: transparent over hero, frosted glass after
const nav   = document.getElementById('mainNav');
const hero  = document.getElementById('heroSection');
const links = nav.querySelectorAll('.nav-link');
const hLines= nav.querySelectorAll('.ham-line');
const logoName = nav.querySelector('.nav-logo-name');
const logoSub  = nav.querySelector('.nav-logo-sub');

function applyNav(scrolled) {
  nav.classList.toggle('nav-scrolled', scrolled);
  nav.classList.toggle('nav-transparent', !scrolled);
  const lc = scrolled ? '#673b15' : 'rgba(240,226,207,.85)';
  const nc = scrolled ? '#673b15' : '#f0e2cf';
  const sc = scrolled ? '#4A5C3A' : 'rgba(240,226,207,.65)';
  const hc = scrolled ? '#673b15' : '#f0e2cf';
  links.forEach(l => l.style.color = lc);
  logoName.style.color = nc;
  logoSub.style.color  = sc;
  hLines.forEach(l => l.style.background = hc);
}

new IntersectionObserver(entries => {
  applyNav(!entries[0].isIntersecting);
}, { rootMargin: '-62px 0px 0px 0px', threshold: 0 }).observe(hero);

// Subtle parallax on hero image
const heroBg = document.getElementById('heroBg');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y < window.innerHeight * 1.2) {
    heroBg.style.transform = `translateY(${y * 0.28}px)`;
  }
}, { passive: true });
