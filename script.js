const btn = document.getElementById('langBtn');
let lang = localStorage.getItem('siteLang') || 'ru';

function setLang(next) {
  lang = next;
  localStorage.setItem('siteLang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  if (btn) btn.textContent = lang === 'ru' ? 'EN' : 'RU';
}

if (btn) btn.addEventListener('click', () => setLang(lang === 'ru' ? 'en' : 'ru'));
setLang(lang);

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
