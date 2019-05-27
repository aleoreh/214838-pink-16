var mainHeader = document.querySelector('.main-header');
var openButton = document.querySelector('.main-nav__open');
var closeButton = document.querySelector('.main-nav__close');

openButton.addEventListener('click', function() {
  mainHeader.classList.add('main-header--opened');
  mainHeader.classList.remove('main-header--closed');
});

closeButton.addEventListener('click', function() {
  mainHeader.classList.add('main-header--closed');
  mainHeader.classList.remove('main-header--opened');
});
