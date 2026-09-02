// Sticky nav state
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('solid', window.scrollY > 40);
  const bg = document.querySelector('.hero-bg');
  if (bg && window.scrollY < window.innerHeight) {
    bg.style.transform = `scale(1.06) translateY(${window.scrollY * 0.28}px)`;
  }
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
document.getElementById('burger').addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('#mobile a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

// Scroll reveal
const targets = document.querySelectorAll('.section .card, .section .mode, .zone, .post, .h2, .lede, .eyebrow');
targets.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = `${Math.min(i * 70, 280)}ms`;
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
targets.forEach(el => io.observe(el));

// Signup form
const form = document.getElementById('form');
const note = document.getElementById('note');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  note.textContent = "You're on the list — welcome to Landtale.";
  form.reset();
});
