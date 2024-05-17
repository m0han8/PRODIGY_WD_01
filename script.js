const nav = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('hovered');
  });

  link.addEventListener('mouseout', () => {
    link.classList.remove('hovered');
  });
});
