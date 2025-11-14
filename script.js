const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const header = document.querySelector('.site-header');
const toggleHeaderState = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 8);
};
window.addEventListener('scroll', toggleHeaderState);
toggleHeaderState();

const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.site-nav a, .mobile-nav a');

const closeMobileNav = () => {
  if (!mobileNav || !navToggle) return;
  mobileNav.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
};

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  window.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      closeMobileNav();
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileNav();
  });
});

const sectionIds = Array.from(navLinks)
  .map((link) => link.getAttribute('href'))
  .filter((href) => href && href.startsWith('#'))
  .map((href) => href.slice(1));

const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const highlightNav = (id) => {
  navLinks.forEach((link) => {
    const target = link.getAttribute('href');
    link.classList.toggle('is-active', target === `#${id}`);
  });
};

if (sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          highlightNav(entry.target.id);
        }
      });
    },
    {
      threshold: 0.45,
    }
  );

  sections.forEach((section) => observer.observe(section));
}
