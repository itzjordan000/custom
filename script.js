// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { 
      e.preventDefault(); 
      target.scrollIntoView({ behavior: 'smooth' }); 
      menu?.classList.remove('open'); 
    }
  });
});

// Mobile menu toggle
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
btn?.addEventListener('click', () => { menu.classList.toggle('open'); });

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Typing effect
const typingEl = document.getElementById('typing');
const text = "Hey I'm Jordan";
let index = 0;
function type() {
  if (index < text.length) { 
    typingEl.textContent = text.slice(0, index+1); 
    index++; 
    setTimeout(type,120); 
  }
}
type();
