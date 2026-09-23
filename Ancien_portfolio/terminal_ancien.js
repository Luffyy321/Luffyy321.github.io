// si vous voulez invalider le flag plus tard, changez la clé (ex: terminalPlayed_v2)
const STORAGE_KEY = 'terminalPlayed_v1';

const lines = [
  "> booting portfolio.core",
  "> loading visual assets...",
  "> initializing layout engine",
  "> injecting styles: minimal, clean, modern",
  "> loading project showcase",
  "> running final quality checks...",
  "> system stable ✓",
  "> portfolio.ready()",
  "> welcome — explore freely"
];

const terminal = document.getElementById('terminal');
let index = 0, charIndex = 0;
let cursorInterval;

// cursor blink implementation (appended as a separate span for better control)
const cursor = document.createElement('span');
cursor.textContent = ''; // affichage du curseur
cursor.style.display = 'inline-block';
cursor.style.marginLeft = '6px';
cursor.style.opacity = '0.9';
cursor.style.transition = 'opacity 200ms';

function startCursor() {
  let cursorVisible = true;
  cursorInterval = setInterval(() => {
    cursor.style.opacity = (cursorVisible = !cursorVisible) ? '0.9' : '0';
  }, 530);
}

function stopCursor() {
  if (cursorInterval) clearInterval(cursorInterval);
  cursor.style.opacity = '0';
}

function appendText(text) {
  terminal.textContent += text;
  if (!terminal.contains(cursor)) terminal.appendChild(cursor);
  terminal.scrollTop = terminal.scrollHeight;
}

function typeEffect() {
  if (index < lines.length) {
    if (charIndex < lines[index].length) {
      appendText(lines[index].charAt(charIndex));
      charIndex++;
      setTimeout(typeEffect, 5 + Math.random() * 18);
    } else {
      appendText('\n');
      charIndex = 0;
      // si la ligne se termine par "..." on ajoute une pause plus longue
      const finishedLine = lines[index];
      index++;
      const isEllipsis = /\.{3}$/.test(finishedLine);
      const lineDelay = isEllipsis ? (600 + Math.random() * 700) : (80 + Math.random() * 120);
      setTimeout(typeEffect, lineDelay);
    }
  } else {
    // typing finished
    stopCursor();
    onTerminalComplete();
  }
}

function onTerminalComplete() {
  // marque comme joué pour les visites suivantes
  try { localStorage.setItem(STORAGE_KEY, 'true'); } catch (e) { /* ignore if storage bloqué */ }

  // petite pause puis révélation de la page
  setTimeout(() => {
    document.body.classList.add('loaded');
    // après la transition CSS, cache le terminal pour restaurer l'ordre au clavier
    setTimeout(() => {
      const hero = document.querySelector('.hero-terminal');
      if (hero) hero.style.display = 'none';
    }, 520);
  }, 650);
}

// Contrôle: ne jouer l'animation que si jamais jouée auparavant
const alreadyPlayed = (() => {
  try { return localStorage.getItem(STORAGE_KEY) === 'true'; }
  catch (e) { return false; }
})();

// DEV visibility: bouton visible sur localhost ou si ?dev=1 dans l'URL
const isDev = (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.search.includes('dev=1'));
const devResetBtn = document.getElementById('dev-reset');
if (isDev) {
  devResetBtn.style.display = 'inline-block';
  devResetBtn.addEventListener('click', () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    // force reload pour rejouer l'animation
    location.reload();
  });
}

if (alreadyPlayed) {
  // révéler le contenu tout de suite et masquer le terminal
  document.body.classList.add('loaded');
  const hero = document.querySelector('.hero-terminal');
  if (hero) hero.style.display = 'none';
} else {
  // lancer l'animation normalement
  startCursor();
  setTimeout(typeEffect, 160);
}