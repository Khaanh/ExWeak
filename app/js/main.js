$(function() {
	//= include/default
});

const body = document.querySelector('body');
let header = document.querySelector('#js-header');
let offsetDefalt = 200;
let lastScroll = 0;
let containClassFixed = () => header.classList.contains('is-hidden');
let scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;


window.addEventListener('scroll', () => {
  // let scroll = window.pageYOffset;

  if (scrollPosition() > lastScroll && !containClassFixed()) {
    console.log('down')
    header.classList.add('is-hidden')
  } else if (scrollPosition() < lastScroll && containClassFixed()) {
    header.classList.remove('is-hidden')
    console.log('up')
  }

  lastScroll = scrollPosition();
})

let btnMenu = document.querySelector('#js-burger');
let menuNav = document.querySelector('#js-menuNav');

btnMenu.addEventListener('click', function() {
  this.classList.toggle('is-rotate');
  menuNav.classList.toggle('is-open');
  body.classList.toggle('js-no-scroll');
})