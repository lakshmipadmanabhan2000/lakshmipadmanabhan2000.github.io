// Theme toggle (persisted)
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function applyStoredTheme(){
  try{
    const stored = localStorage.getItem('theme');
    if(stored) root.setAttribute('data-theme', stored);
  }catch(e){ /* storage unavailable, fall back to system preference */ }
}
applyStoredTheme();

themeToggle?.addEventListener('click', () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const current = root.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try{ localStorage.setItem('theme', next); }catch(e){}
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Footer year
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = `© ${new Date().getFullYear()}`;
