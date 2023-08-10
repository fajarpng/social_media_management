// script.js

const navbarToggle = document.getElementById('navbarToggle');
const navList = document.getElementById('navList');
const sections = document.querySelectorAll('section');
const nav = document.querySelector('nav');

navbarToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if (activeLink) {
        navList.querySelectorAll('li').forEach(li => {
          li.classList.remove('active');
        });
        activeLink.parentElement.classList.add('active');
      }
    }
  });

  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const splashScreen = document.querySelector('.splash-screen');
  setTimeout(() => {
    splashScreen.classList.add('hidden');
  }, 1000); // Adjust the delay as needed
});