const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = document.querySelector('.theme-toggle__icon i');
const backArrowIcon = document.getElementById('back-arrow-icon');
const themedIcons = document.querySelectorAll('.card-icon');
const topBarLogos = document.querySelectorAll('.top-bar__logo--theme');

const THEME_KEY = 'manga-theme';

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('theme-dark', isDark);

  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('aria-label', isDark ? 'Passer en mode clair' : 'Passer en mode sombre');
  }

  if (themeIcon) {
    themeIcon.classList.toggle('bi-moon-fill', !isDark);
    themeIcon.classList.toggle('bi-sun-fill', isDark);
  }

  if (backArrowIcon) {
    backArrowIcon.src = isDark ? './img/back_arrow_white.png' : './img/back_arrow_black.png';
  }

  topBarLogos.forEach((logo) => {
    logo.src = isDark ? './img/logo_white.png' : './img/logo.png';
  });

  themedIcons.forEach((icon) => {
    const nextSrc = isDark ? icon.dataset.darkSrc : icon.dataset.lightSrc;
    if (nextSrc) {
      icon.src = nextSrc;
    }
  });

  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.warn('Impossible de sauvegarder le thème:', error);
  }
}

function getPreferredTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || 'light';
  } catch (error) {
    return 'light';
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

applyTheme(getPreferredTheme());
