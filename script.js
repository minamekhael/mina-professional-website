const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');
const skillCards = document.querySelectorAll('.skill-card');
const skillDetail = document.getElementById('skillDetail');
const yearEl = document.getElementById('year');

const toggleNavigation = () => {
  if (!navToggle || !primaryNav) return;
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  primaryNav.classList.toggle('is-open');
};

navToggle?.addEventListener('click', toggleNavigation);

primaryNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (!primaryNav.classList.contains('is-open')) return;
    navToggle?.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
  });
});

const updateSkillDetail = (card) => {
  const detail = card.getAttribute('data-skill-detail');
  if (!detail || !skillDetail) return;
  skillDetail.textContent = detail;
  skillCards.forEach((btn) => btn.classList.toggle('active', btn === card));
};

skillCards.forEach((card) => {
  card.addEventListener('click', () => updateSkillDetail(card));
  card.addEventListener('focus', () => updateSkillDetail(card));
});

if (skillCards.length) {
  updateSkillDetail(skillCards[0]);
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
