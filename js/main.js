$(document).ready(function () {
  /* Слайдер Swiperjs */

  const reviewsSliderDesk = new Swiper(".reviews-slider--desktop", {
    // Optional parameters
    // loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

    // Мои параметры
    speed: 800,
    autoHeight: true,
    spaceBetween: 26,
    watchOverflow: true,
    slidesPerView: 4,
  });

  const reviewsSliderMob = new Swiper(".reviews-slider--mobile", {
    // Optional parameters
    // loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

    // Мои параметры
    speed: 800,
    autoHeight: true,
    spaceBetween: 26,
    watchOverflow: true,
    slidesPerView: 4,
  });

  /* Слайдер Swiperjs. Делаем кнопки выходящими за пределы контейнера */
  const swiperPrev = document.getElementById("reviews-slider__button--prev");
  const swiperNext = document.getElementById("reviews-slider__button--next");

  swiperPrev.addEventListener("click", () => {
    Swiper.slidePrev();
  });
  swiperNext.addEventListener("click", () => {
    Swiper.slideNext();
  });
  /* /Слайдер Swiperjs. Делаем кнопки выходящими за пределы контейнера */

  /* Слайдер Swiperjs. Делаем кнопки исчезающими при достижении конца слайдера */
  // reachEnd - событие достижения конца слайдера
  // reachBeginning - событие достижения начала слайдера
  // fromEdge - событие после достижения начала или конца слайдера

  // swiperNext.addEventListener("Swiper.reachEnd()", () => {
  //   console.log("Конец слайдера!");
  // });

  // Swiper.reachEnd(function () {
  //   $(".reviews-slider__button--next").addClass("reviews-slider__button--next--hidden");
  // });

  /* /Слайдер Swiperjs. Делаем кнопки исчезающими при достижении конца слайдера */

  /* Слайдер Swiperjs. Делаем мобильный вариант слайдера рабочим */
  // function ReviewsSliderDesktop() {
  //   $(".reviews-slider").removeClass("reviews-slider--desktop");
  // }
  // function ReviewsSliderMobile() {
  //   $(".reviews-slider").addClass("reviews-slider--mobile");
  // }

  // if (window.matchMedia("(max-width: 1060px)").matches) {
  //   ReviewsSliderDesktop();
  //   ReviewsSliderMobile();
  // }
  /* /Слайдер Swiperjs. Делаем мобильный вариант слайдера рабочим */
  /* /Слайдер Swiperjs */

  /* Мобильное меню на JS */
  /*
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке меню!");
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
  });
  */
  /* /Мобильное меню на JS */

  /* Мобильное меню на JQuery */
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    // console.log("Клик по кнопке меню!");
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });
  /* /Мобильное меню на JQuery */

  /* Модальные окна */
  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  $(".modal__overlay").on("click", closeModal);

  /* Одно модальное окно */
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  /* /Модальные окна */

  /* Обработка форм */
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Укажите своё имя",
          minlength: "Имя должно быть не короче 2 букв",
        },
        email: {
          required: "Email обязателен",
          email: "Email в формате name@domain.com",
        },
        emailOnly: {
          required: "Email обязателен",
          email: "Email в формате name@domain.com",
        },
        phone: {
          required: "Телефон обязателен",
          minlength: "Введите не менее 10 цифр",
        },
      },
    });
  });

  /* jQuery Mask Plugin */
  $(".phone-rus").mask("+7(999)999-99-99", { translation: { 9: { pattern: /[0-9*]/ } } });
  // $(".clear-if-not-match").mask("+7(999)999-99-99", { clearIfNotMatch: true });
  // $(".selectonfocus").mask("+7(999)999-99-99", { selectOnFocus: true });

  /* Aos plugin */
  AOS.init();

  /* Убираем анимацию на мобильных устройствах */
  if (window.matchMedia("(max-width: 992px)").matches) {
    animOff();
  }

  function animOff() {
    // document.querySelector(".footer__logo").removeAttribute("data-aos");
    document.querySelector(".recommendations__card-1").removeAttribute("data-aos");
    document.querySelector(".recommendations__card-2").removeAttribute("data-aos");
    document.querySelector(".recommendations__card-3").removeAttribute("data-aos");
    document.querySelector(".recommendations__card-4").removeAttribute("data-aos");
    document.querySelector(".recommendations__card-5").removeAttribute("data-aos");
    document.querySelector(".recommendations__card-6").removeAttribute("data-aos");
  }

  /* Лайк (любо) */
  /* 1ый вариант */
  $(".card__like").click(function () {
    $(this).attr("src", "img/heart-active.svg").fadeIn(500);
  });

  /* 2ой вариант */
  // $('[src="img/heart.svg"]').click(function () {
  //   $(this).attr("src", "img/heart-active.svg").fadeIn(500);
  // });
  /* /Лайк (любо) */
});
