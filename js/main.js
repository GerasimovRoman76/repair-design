/*
document.addEventListener("DOMContentLoaded", function (event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

});
*/
/*выше код js для модального окна*/

$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  //Валидация формы
  function validateForm(form) {
  $(form).validate({
    errorClass: "invalid",
    rules: {
    // Строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18
      },
      // Правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      userQuestion: {
        required: true,
        minlength: 5
      },
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно содержать больше 15 букв"
      }, 
      userPhone: {
        required: "Заполните поле",
        minlength: "Телефон не короче десяти цифр"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }, 
      userQuestion: {
        required: "Заполните поле",
        minlength: "Поле должно содержать не менее 5 символов"
      }
    }
  });

  // маска для телефона

  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});  
  }
  validateForm('.modal__form');
  validateForm('.control__form');
  validateForm('.footer__form');

});