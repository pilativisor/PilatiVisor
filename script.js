// =========================
// STELLE
// =========================
const starsContainer = document.getElementById('stars');
for(let i=0;i<100;i++){
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${Math.random()*100}%`;
  star.style.top = `${Math.random()*100}%`;
  star.style.animationDuration = `${5 + Math.random()*10}s`;
  starsContainer.appendChild(star);
}

// =========================
// FADE ON SCROLL
// =========================
const faders = document.querySelectorAll('.fade-on-scroll');
const options = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, options);
faders.forEach(fader => appearOnScroll.observe(fader));

// =========================
// TOGGLE NOTTE / GIORNO
// =========================
const toggleBtn = document.getElementById('theme-toggle');
// Leggi preferenza utente
const currentTheme = localStorage.getItem('theme') || 'dark';
document.body.dataset.theme = currentTheme;
toggleBtn.textContent = currentTheme === 'dark' ? '🌙' : '☀️';

toggleBtn.addEventListener('click', () => {
  const newTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
  toggleBtn.textContent = newTheme === 'dark' ? '🌙' : '☀️';
});

// =========================
// HAMBURGER MOBILE
// =========================
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// =========================
// LINGUA
// =========================
const langDropdown = document.querySelector(".lang-dropdown");
const langBtn = langDropdown.querySelector(".lang-btn");
langBtn.addEventListener("click", () => {
  langDropdown.classList.toggle("active");
});
const elements = document.querySelectorAll('[data-lang-it]');
const langOptions = document.querySelectorAll(".lang-menu li");
langOptions.forEach(option => {
  option.addEventListener("click", () => {
    const lang = option.dataset.lang;
    elements.forEach(el => {
      const text = el.getAttribute('data-lang-' + lang);
      if(text) el.textContent = text;
    });
    langBtn.textContent = option.textContent + " ▼";
    langDropdown.classList.remove("active");
  });
});