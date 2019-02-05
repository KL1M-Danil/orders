//адаптивное меню

const nav = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav-link");
const navLinkA = document.querySelectorAll(".nav-link a");

nav.addEventListener("click", onNavClick);

function onNavClick(event) {
  event.preventDefault();

  nav.classList.toggle("open");
  navList.classList.toggle("nav-open");

  for (let i = 0; i < navLink.length; i += 1) {
    navLink[i].classList.toggle("nav-link-open");
  }
}

// закрытие адаптивного меню по нажатию на анкор

$(".nav-link").click(function() {
  $(".nav-link").removeClass("nav-link-open");
});
$(".nav-link").click(function() {
  $(".nav").removeClass("nav-open");
});
$(".nav-link").click(function() {
  $(".nav-toggle").removeClass("open");
});
