const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const header = document.querySelector('.site-header');
const toggleHeaderState = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 12);
};

toggleHeaderState();
window.addEventListener('scroll', toggleHeaderState);
