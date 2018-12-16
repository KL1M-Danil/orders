const list = document.querySelector(".js-nav-list");
const icon = document.querySelector(".js-nav-icon");
const nav = document.querySelector(".js-nav");

icon.addEventListener("click", onIconClick);

function onIconClick(event) {
  event.preventDefault();

  list.classList.toggle("nav-list-close");
  nav.classList.toggle("nav-close");
}
