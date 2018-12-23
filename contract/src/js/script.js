const list = document.querySelector(".js-nav-list");
const icon = document.querySelector(".js-nav-icon");
const nav = document.querySelector(".js-nav");
const header = document.querySelector(".js-header");
const navTel = document.querySelector(".nav-tel-mobile");

icon.addEventListener("click", onIconClick);

function onIconClick(event) {
  event.preventDefault();

  list.classList.toggle("nav-list-close");
  nav.classList.toggle("nav-close");
  header.classList.toggle("header-close");
  navTel.classList.toggle("nav-tel-close");
}

//Маска для тел
const element = document.querySelector(".input-phone-number");
const element2 = document.querySelector(".js-input-phone-number");

var maskOptions = {
  mask: "+38(000)000-00-00",
  lazy: false
};

var mask = new IMask(element, maskOptions);
var mask = new IMask(element2, maskOptions);

//E-mail Ajax Send
$("form.callback-form").submit(function() {
  //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "/mail.php", //Change
    data: th.serialize()
  }).done(function() {
    $(th)
      .find(".success - класс уведомление об отправке")
      .addClass("active")
      .css("display", "flex")
      .hide()
      .fadeIn();
    setTimeout(function() {
      $(th)
        .find(".success")
        .removeClass("active")
        .fadeOut();
      th.trigger("reset");
    }, 1000);
  });
  return false;
});

//E-mail Ajax Send
$("form.calculator").submit(function() {
  //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "/mail.php", //Change
    data: th.serialize()
  }).done(function() {
    $(th)
      .find(".success - класс уведомление об отправке")
      .addClass("active")
      .css("display", "flex")
      .hide()
      .fadeIn();
    setTimeout(function() {
      $(th)
        .find(".success")
        .removeClass("active")
        .fadeOut();
      th.trigger("reset");
    }, 1000);
  });
  return false;
});

//Плавность якорей

$(document).ready(function() {
  //ID блока с ссылками #prime_nav
  $("#nav").on("click", "a", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1200 мс
    $("body,html").animate({ scrollTop: top }, 1200);
  });
});


//Logo

// const logo = document.querySelectorAll(".logo-rtk");
// console.log(screen.width);
// console.log(logo);
// logo.setAttribute("src", /images/logo-min.png);


  // if (screen.width <= 800) {
  //   console.log(screen.width);
   
    
  // } else {
  //   console.log(screen.width);
  //   logo.setAttribute("src", '/images/logo-max.png');
  // }
