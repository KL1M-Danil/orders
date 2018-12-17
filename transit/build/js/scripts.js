"use strict";

var list = document.querySelector(".js-nav-list");
var icon = document.querySelector(".js-nav-icon");
var nav = document.querySelector(".js-nav");
icon.addEventListener("click", onIconClick);

function onIconClick(event) {
  event.preventDefault();
  list.classList.toggle("nav-list-close");
  nav.classList.toggle("nav-close");
}