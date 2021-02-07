$(function() {
	//= include/default
});

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