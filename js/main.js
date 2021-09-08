$(document).ready(function () {
  /* Слайдер Swiperjs */

  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    // loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews__button--next",
      prevEl: ".reviews__button--prev",
    },

    // Мои параметры
    // effect: "fade",
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    watchOverflow: true,
    on: {
      init: function () {
        console.log("swiper initialized");
        $(".reviews__button--prev").addClass("reviews__button--prev--hidden");
      },
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      // when window width is >= 1060px
      1060: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  const unpublishedSlider = new Swiper(".unpublished-slider", {
    // Optional parameters
    // loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".unpublished__button--next",
      prevEl: ".unpublished__button--prev",
    },

    // Мои параметры
    // effect: "fade",
    speed: 800,
    slidesPerView: 5,
    spaceBetween: 30,
    autoHeight: true,
    watchOverflow: true,
    on: {
      init: function () {
        console.log("swiper initialized");
        $(".unpublished__button--prev").addClass("unpublished__button--prev--hidden");
      },
    },

    breakpoints: {
      // when window width is >= 320px
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      // when window width is >= 1060px
      1060: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 1240px
      1240: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  /* Слайдер Swiperjs. Делаем кнопки выходящими за пределы контейнера */
  const swiperPrev = document.getElementById("reviews__button--prev");
  const swiperNext = document.getElementById("reviews__button--next");

  swiperPrev.addEventListener("click", () => {
    reviewsSlider.slidePrev();
  });
  swiperNext.addEventListener("click", () => {
    reviewsSlider.slideNext();
  });

  const swiperPrevTwo = document.getElementById("unpublished__button--prev");
  const swiperNextTwo = document.getElementById("unpublished__button--next");

  swiperPrevTwo.addEventListener("click", () => {
    unpublishedSlider.slidePrev();
  });
  swiperNextTwo.addEventListener("click", () => {
    unpublishedSlider.slideNext();
  });
  /* /Слайдер Swiperjs. Делаем кнопки выходящими за пределы контейнера */

  /* Слайдер Swiperjs. Делаем кнопки исчезающими при достижении конца слайдера */
  // reachEnd - событие достижения конца слайдера
  // reachBeginning - событие достижения начала слайдера
  // fromEdge - событие после достижения начала или конца слайдера

  reviewsSlider.on("reachEnd", function () {
    // console.log("Конец слайдера");
    $(".reviews__button--next").addClass("reviews__button--next--hidden");
  });
  reviewsSlider.on("reachBeginning", function () {
    // console.log("Начало слайдера");
    $(".reviews__button--prev").addClass("reviews__button--prev--hidden");
  });
  reviewsSlider.on("fromEdge", function () {
    // console.log("Возврат из конечного положения слайдера");
    $(".reviews__button--next").removeClass("reviews__button--next--hidden");
    $(".reviews__button--prev").removeClass("reviews__button--prev--hidden");
  });

  unpublishedSlider.on("reachEnd", function () {
    // console.log("Конец слайдера");
    $(".unpublished__button--next").addClass("unpublished__button--next--hidden");
  });
  unpublishedSlider.on("reachBeginning", function () {
    // console.log("Начало слайдера");
    $(".unpublished__button--prev").addClass("unpublished__button--prev--hidden");
  });
  unpublishedSlider.on("fromEdge", function () {
    // console.log("Возврат из конечного положения слайдера");
    $(".unpublished__button--next").removeClass("unpublished__button--next--hidden");
    $(".unpublished__button--prev").removeClass("unpublished__button--prev--hidden");
  });
  /* /Слайдер Swiperjs. Делаем кнопки исчезающими при достижении конца слайдера */
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
