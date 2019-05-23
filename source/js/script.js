var mainHeader = document.querySelector('.main-header');
var menuButton = document.querySelector('.main-nav__toggle');

menuButton.addEventListener('click', function() {
  if (mainHeader.classList.contains('main-header--opened')) {
    mainHeader.classList.remove('main-header--opened');
  } else {
    mainHeader.classList.add('main-header--opened');
  }
})
