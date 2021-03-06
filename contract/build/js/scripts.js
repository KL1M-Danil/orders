"use strict";

var list = document.querySelector(".js-nav-list");
var icon = document.querySelector(".js-nav-icon");
var nav = document.querySelector(".js-nav");
var header = document.querySelector(".js-header");
var navTel = document.querySelector(".nav-tel-mobile");
icon.addEventListener("click", onIconClick);

function onIconClick(event) {
  event.preventDefault();
  list.classList.toggle("nav-list-close");
  nav.classList.toggle("nav-close");
  header.classList.toggle("header-close");
  navTel.classList.toggle("nav-tel-close");
} //Маска для тел (рабочий вариант)


var element = document.querySelector(".input-phone-number");
var element2 = document.querySelector(".js-input-phone-number");
var maskOptions = {
  mask: "+38(000)000-00-00",
  lazy: false
};
var mask = new IMask(element, maskOptions);
var mask = new IMask(element2, maskOptions);
$("body form.callback-form").submit(function () {
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: th.serialize()
  }).done(function () {
    $('body').find('.success').addClass('active').hide().fadeIn();
    setTimeout(function () {
      $('body').find('.success').removeClass('active').fadeOut();
      th.trigger("reset");
    }, 8000);
  });
  return false;
});
$("body form.calculator").submit(function () {
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: th.serialize()
  }).done(function () {
    $('body').find('.success').addClass('active').hide().fadeIn();
    setTimeout(function () {
      $('body').find('.success').removeClass('active').fadeOut();
      th.trigger("reset");
    }, 8000);
  });
  return false;
}); // Закрыть попап «спасибо»

$('.js-close-thank-you').click(function () {
  // по клику на крестик
  $('.js-overlay-thank-you').fadeOut();
});
$(document).mouseup(function (e) {
  // по клику вне попапа
  var popup = $('.popup');

  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.js-overlay-thank-you').fadeOut();
  }
}); //Плавность якорей

$(document).ready(function () {
  //ID блока с ссылками #prime_nav
  $("#nav, #service").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault(); //забираем идентификатор бока с атрибута href

    var id = $(this).attr("href"),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top; //анимируем переход на расстояние - top за 1200 мс

    $("body,html").animate({
      scrollTop: top
    }, 1200);
  });
}); //При обновление страници наверх

window.scrollTo(0, 0); //Фокус при клике

$('#nav-btn').click(function () {
  $('#input-phone-number').focus();
});
$('#footer-btn').click(function () {
  $('#input-phone-number').focus();
});