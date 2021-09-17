//==========================================
// Imports
//==========================================

//==========================================
// Variables
//==========================================
const navbarList = document.querySelector(".navbar__list"),
  navbarItems = document.querySelectorAll(".navbar__item"),
  navbarToggle = document.querySelector(".navbar__toggle");

//==========================================
// Code
//==========================================
navbarToggle.addEventListener("click", () => {
  navbarList.classList.toggle("navbar__toggle--open");
});
Array.from(navbarItems).forEach((navbarItem) => {
  navbarItem.addEventListener("click", () => {
    navbarList.classList.toggle("navbar__toggle--open");
  });
});

//==========================================
// Exports
//==========================================
