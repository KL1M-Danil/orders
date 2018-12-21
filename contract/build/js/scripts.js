"use strict";

var list = document.querySelector(".js-nav-list");
var icon = document.querySelector(".js-nav-icon");
var nav = document.querySelector(".js-nav");
var header = document.querySelector(".js-header");
icon.addEventListener("click", onIconClick);

function onIconClick(event) {
  event.preventDefault();
  list.classList.toggle("nav-list-close");
  nav.classList.toggle("nav-close");
  header.classList.toggle("header-close");
} //E-mail Ajax Send


$("form.класс-формы").submit(function () {
  //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "/mail.php",
    //Change
    data: th.serialize()
  }).done(function () {
    $(th).find(".success - класс уведомление об отправке").addClass("active").css("display", "flex").hide().fadeIn();
    setTimeout(function () {
      $(th).find(".success").removeClass("active").fadeOut();
      th.trigger("reset");
    }, 1000);
  });
  return false;
}); //Плавность якорей

$(document).ready(function () {
  //ID блока с ссылками #prime_nav
  $("#nav").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault(); //забираем идентификатор бока с атрибута href

    var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top; //анимируем переход на расстояние - top за 1500 мс

    $('body,html').animate({
      scrollTop: top
    }, 1200);
  });
});