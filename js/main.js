/* -------------------------------------------- */
/*                HAMBURGER MENU                */
/* -------------------------------------------- */


const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.navMenu')


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})


document.querySelectorAll('.navLink').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))


/* -------------------------------------------- */
/*                PROJECTS SLIDER               */
/* -------------------------------------------- */
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


/* -------------------------------------------- */
/*                    navMenu                    */
/* -------------------------------------------- */

let scrollpos = window.scrollY
const navmenu = document.querySelector(".navMenu")
const navheader = document.querySelector(".navbar")

const add_class_on_scroll = () => navmenu.classList.add("navbar-fade-in")
const remove_class_on_scroll = () => navmenu.classList.remove("navbar-fade-in")
const add_header_class = () => navheader.classList.add("header-scroll")
const remove_header_class = () => navheader.classList.remove("header-scroll")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos > 100){ 
    add_class_on_scroll()
    add_header_class()
    }
  else { 
    remove_class_on_scroll() 
    remove_header_class()
}
})


/* -------------------------------------------- */
/*              ANIMATION ON SCROLL             */
/* -------------------------------------------- */

const fader = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('.slide-in')

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px"

}

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {

  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return 
    } else {
      entry.target.classList.add('appear')
      appearOnScroll.unobserve(entry.target)
    }
  })
}, appearOptions)

fader.forEach(fader => {
  appearOnScroll.observe(fader)
})

sliders.forEach(slider => {
  appearOnScroll.observe(slider)
})