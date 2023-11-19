
const burger = document.querySelector('.burger');
const bntClose = document.querySelector('.close-btn')
const navMobile = document.querySelector('.header__menu-mobile')

burger.addEventListener('click', () => {
  burger.style.display = 'none';
  bntClose.style.display = 'block';
  navMobile.style.display = 'block'
})

bntClose.addEventListener('click', () => {
  burger.style.display = 'block';
  bntClose.style.display = 'none';
  navMobile.style.display = 'none';
})

