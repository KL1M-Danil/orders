//адаптивное меню

const nav = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav-link");
const navLinkA = document.querySelectorAll(".nav-link a");
const linkTel = document.querySelectorAll(".link-tel-icon");

nav.addEventListener("click", onNavClick);

function onNavClick(event) {
  event.preventDefault();

  nav.classList.toggle("open");
  navList.classList.toggle("nav-open");
  console.log(linkTel);

  for (let i = 0; i < navLink.length; i += 1) {
    navLink[i].classList.toggle("nav-link-open");
  }

  linkTel.classList.toggle("link-tel-icon-open");
  
}

// $(".sale-btn").click(function() {
//   $(".select-ml").setAttribute("selected");
// });

// закрытие адаптивного меню по нажатию на якорь

$(".nav-link").click(function() {
  $(".nav-link").removeClass("nav-link-open");
});
$(".nav-link").click(function() {
  $(".nav").removeClass("nav-open");
});
$(".nav-link").click(function() {
  $(".nav-toggle").removeClass("open");
});

//Слайдер
$(document).ready(function() {
  $(".partners-slider").slick({
    infinite: true,
    arrows: null,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
    ]
  });
});

//Плавность якорей

$(document).ready(function() {
  //ID блока с ссылками #prime_nav
  $("#nav, #promo-wrap").on("click", "a", function(event) {
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


// Закрыть попап 
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$('.sale-btn').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

// $(document).mouseup(function (e) { // по клику вне попапа
// 	var popup = $('.popup');
// 	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
// 		$('.js-overlay-thank-you').fadeOut();
// 	}
// });