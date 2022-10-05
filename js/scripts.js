$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
});

//Инициализация
new Swiper('.image-slider', {

breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 45
    },
    // when window width is >= 480px
    540: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    980: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  },
  //Выравнивание высоты
  autoHeight: true,
  //Кол-во для показа
  slidesPerView: 3,
  //Сколько пролистывать
  slidesPerGroup: 1,
  //Слайд в центре
  centeredSlides: true,
  spaceBetween:0,


});
//////////