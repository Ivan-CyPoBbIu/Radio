// поиск

let Search = document.querySelector('.header__search');
let searchForm = document.querySelector('.header__search-form');

Search.addEventListener('click', function () {
  searchForm.classList.toggle('search__input-open');
});

// еще подкасты

const morePodcast = document.querySelector('.podcast__btn');
const show = document.querySelectorAll('.hide');
let podcastShow = document.querySelectorAll('.hide-visibl');

morePodcast.addEventListener('click', () => {
  show.forEach(el => { el.classList.add('podcast-show')});
  podcastShow.forEach(el => {el.classList.add('podcast-show')});
});


const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ""
});


// акардион

new Accordion('.accordion-container', {
  openOnInit: [0],
});


// табы

let tabsBtn = document.querySelectorAll('.guests__name-btn');
let tabsItem = document.querySelectorAll('.guests__info');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('guests__name-btn--active') });
    e.currentTarget.classList.add('guests__name-btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('guests__info--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__info--active');
  });
});


// слайдер

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },

    670: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1025: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }


});


// валидция


let validation = new JustValidate('.aboutus__form');

validation.addField('#name', [
  {
    rule: 'required',
    errorMessage: 'ошибка'
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'минимум 2 символа'
  }
])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'ошибка'
    },
    {
      rule: 'email',
      errorMessage: 'некорректный емаил'
    },


  ]).onSuccess((event) => {

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  })


// burger


let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__nav-link');
let bottomMenu = document.querySelector('.header__bottom-nav');
let bottomMenuLinks = bottomMenu.querySelectorAll('.bottom__nav-link');


burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    bottomMenu.classList.toggle('bottom__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    bottomMenu.classList.remove('bottom__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

bottomMenuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    bottomMenu.classList.remove('bottom__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})


// что в эфире

let efir = document.querySelector('.header__bottom');
let btnEfir = document.querySelector('.btn-wrapper');


efir.addEventListener('click', function () {
  btnEfir.classList.toggle('btn-wrapper--open');
});


// вход

let enter1 = document.querySelector('.enter-btn')
let enter = document.querySelector('.header__enter')
let enterForm = document.querySelector('.header__enter-container')
let enterClose = document.querySelector('.header__enter-close')

enter.addEventListener('click', function () {
  enterForm.classList.add('enter__container-open')
  document.body.classList.toggle('stop-scroll');
})

enter1.addEventListener('click', function () {
  enterForm.classList.add('enter__container-open')
  document.body.classList.toggle('stop-scroll');
})

enterClose.addEventListener('click', function () {
  enterForm.classList.remove('enter__container-open')
  document.body.classList.remove('stop-scroll');
})


// скрол к гостю

if (window.innerWidth > 570) {
  var hiddenElement = document.querySelector(".guests__info");
  var btn = document.querySelector('.guests__name-btn');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);
}

