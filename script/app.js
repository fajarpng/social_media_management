const header = document.querySelector('header')
const navToggle = document.querySelector('#navToggle')
const navToggleBars = document.querySelectorAll('#navToggle .bar')
const navMenus = document.querySelectorAll('#navMenu ul li')

let isNabarOpen = false


const handleNavbarVisibilityChange = () => {
  header.classList.toggle("open")
  if (isNabarOpen) {
    navToggleBars[0].style.transform = "rotate(0) translateY(0)";
    navToggleBars[2].style.transform = "rotate(0) translateY(0)";
    navToggleBars[1].style.opacity = "1";
  } else {
    navToggleBars[0].style.transform = "rotate(45deg) translateY(15px)";
    navToggleBars[2].style.transform = "rotate(-45deg) translateY(-15px)";
    navToggleBars[1].style.opacity = "0";
  }
  isNabarOpen = !isNabarOpen
}

navToggle.addEventListener('click', handleNavbarVisibilityChange)
navMenus.forEach(e => e.addEventListener('click', handleNavbarVisibilityChange))

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    header.style.backgroundColor = '#fcee4f';
  } else {
    header.style.backgroundColor = 'transparent'; // Reset to transparent
  }
});