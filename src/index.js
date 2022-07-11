import './styles/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper';
const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu');
const links = document.querySelectorAll('.burger-menu .nav__item a');
console.log(links)
function burgerToggle() {
    document.body.classList.toggle('stop-scroll');
    burgerMenu.classList.toggle('burger-active');
    
}
burgerButton.addEventListener('click', ()=> {
    burgerToggle();
    
});
links.forEach(element => {
   element.addEventListener('click', (e) => {
    e.preventDefault();
    burgerToggle();
    setLocation(e.target.hash)
    
}); 
});

function setLocation(curLoc){
    const link = document.createElement('a');
    link.href= curLoc;
    link.click();
}




const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView: 1,
  breakpoints: {
    400: {
        slidesPerView: 1,
    },
    500: {
        slidesPerView: 2,
    },
    750: {
        slidesPerView: 3,
    },
    1000: {
        slidesPerView: 4,
    }
  }
});
