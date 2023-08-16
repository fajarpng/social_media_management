// navbar
const haderNav = document.querySelector('header')
const navList = document.querySelector('#navList');
const navListItem = document.querySelectorAll('#navList li');
const navbarToggle = document.querySelector('#navbarToggle')
const navbarToggleBars = document.querySelectorAll('#navbarToggle .bar')
const sections = document.querySelectorAll('section');
// Function to add and remove 'active' class on menu items
function setActiveMenuItem() {
  sections.forEach((s, i) => {
      const rect = s.getBoundingClientRect();
      console.log(i, rect, window.innerHeight);
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        navListItem.forEach((item) => {
          item.classList.remove('active');
        });
        navListItem[i].classList.add('active');
      }
  });
}



let isNabarOpen = false

const handleNavbarVisibilityChange = () => {
  navList.classList.toggle("open")
  if (isNabarOpen) {
    navbarToggleBars[0].style.transform = "rotate(0) translateY(0)";
    navbarToggleBars[2].style.transform = "rotate(0) translateY(0)";
    navbarToggleBars[1].style.opacity = "1";
  } else {
    navbarToggleBars[0].style.transform = "rotate(45deg) translateY(12px)";
    navbarToggleBars[2].style.transform = "rotate(-45deg) translateY(-12.5px)";
    navbarToggleBars[1].style.opacity = "0";
  }
  isNabarOpen = !isNabarOpen
}

navListItem.forEach(e => e.addEventListener('click', handleNavbarVisibilityChange))
navbarToggle.addEventListener('click', handleNavbarVisibilityChange)

const setBlurredBgNavbar = () => {
  if (window.scrollY > 0) {
    haderNav.classList.add("blurred");
  } else {
    haderNav.classList.remove("blurred");
  }
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      var splashScreen = document.getElementById("splash-screen");
      splashScreen.classList.add('none');
  }, 100); // 2000 milliseconds (2 seconds) delay
});

// Initial call to set active menu item on page load
// setActiveMenuItem();

// Add event listener to update active menu item on scroll
window.addEventListener('scroll', () => {
  setBlurredBgNavbar()
  // setActiveMenuItem()
});
