// slider 
(() => {
   const images = document.querySelectorAll(".slider__li")
   const buttons = document.querySelectorAll(".slider__button")
   const pages = document.querySelectorAll(".slider__pages-li")
   const sliderBlock = document.querySelector(".slider")

   const slider = new Slider(
      images,
      buttons,
      pages
   );

   slider.startSlideShow()

   sliderBlock.addEventListener("click", slider.controllerClick.bind(slider))
})();

// burger 
const burger = document.querySelector(".burger-img")
const burgerMenu = document.querySelector(".burger__menu")

burger.addEventListener("click", () => {
   burger.classList.toggle("burger-active")
   burgerMenu.classList.toggle("active")
})


// accordion 
const accordion = document.querySelectorAll('.faq__list-col')

for (item of accordion) {
   item.addEventListener('click', function () {
      if (this.classList.contains('active')) {
         this.classList.remove('active')
      } else {
         for (el of accordion) {
            el.classList.remove('active')
         }
         this.classList.add('active')
      }
   })
}


// select 
const select = document.querySelectorAll('.modal__list-col')

for (item of select) {
   item.addEventListener('click', function () {
      if (this.classList.contains('active')) {
         this.classList.remove('active')
      } else {
         for (el of accordion) {
            el.classList.remove('active')
         }
         this.classList.add('active')
      }
   })
}

// modal 
const modal = document.querySelector('.modal')
const btn = document.querySelector('.header__top-btn')
const btn2 = document.querySelector('.footer__top-col-btn')
const close = document.querySelector('.modal-close')

btn.addEventListener('click', (e) => {
   e.preventDefault()
   modal.classList.toggle('active')
})
btn2.addEventListener('click', (e) => {
   e.preventDefault()
   modal.classList.toggle('active')
})
close.addEventListener('click', () => {
   modal.classList.remove('active')
})