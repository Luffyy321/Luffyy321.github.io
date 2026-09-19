// Même mécanisme technique que le terminal d'origine :
// un flag localStorage ne joue l'intro qu'une seule fois par visiteur.
const STORAGE_KEY = 'mangaIntroPlayed_v1';

const intro = document.querySelector('.hero-manga');
const panel = document.querySelector('.manga-panel');
const title = document.querySelector('.hero-manga h1');

function setIntroVisible() {
  if (!intro) return;
  intro.style.opacity = '1';
  intro.style.transform = 'translateY(0) scale(1)';
}

function hideIntro() {
  if (!intro) return;
  document.body.classList.add('loaded');
  intro.style.opacity = '0';
  intro.style.transform = 'translateY(-8%) scale(1.04)';
  setTimeout(() => {
    if (intro) intro.style.display = 'none';
  }, 700);
}

function startMangaIntro() {
  if (!intro || !panel || !title) {
    hideIntro();
    return;
  }

  panel.classList.add('is-ready');

  setTimeout(() => {
    try { localStorage.setItem(STORAGE_KEY, 'true'); } catch (e) { /* ignore */ }
    hideIntro();
  }, 2500);
}

const alreadyPlayed = (() => {
  try { return localStorage.getItem(STORAGE_KEY) === 'true'; }
  catch (e) { return false; }
})();

const isDev = (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.search.includes('dev=1'));
const devResetBtn = document.getElementById('dev-reset');

if (isDev && devResetBtn) {
  devResetBtn.style.display = 'inline-block';
  devResetBtn.addEventListener('click', () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    location.reload();
  });
}

if (alreadyPlayed) {
  document.body.classList.add('loaded');
  if (intro) intro.style.display = 'none';
} else {
  setIntroVisible();
  startMangaIntro();
}
