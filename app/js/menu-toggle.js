let btn = document.querySelector('#btnHamburger');
let header = document.querySelector('.header');
// add and toggle 'open' class
btn.addEventListener('click',() => header.classList.toggle('open'));