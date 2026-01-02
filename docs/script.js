// Fecha en el pie de página
document.getElementById('year').textContent = new Date().getFullYear();

// Tema: recordar preferencia en localStorage
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const stored = localStorage.getItem('pc-theme');
if(stored) root.setAttribute('data-theme', stored);

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', current);
  localStorage.setItem('pc-theme', current);
});

// Formulario de contacto (demostración cliente-side)
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  // Aquí normalmente enviarías payload a tu backend.
  alert(`Gracias, ${payload.name}! (Este es un demo: el formulario no envía datos al servidor)`);
  form.reset();
});