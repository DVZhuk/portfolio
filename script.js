;(function() {
const upButton = document.querySelector('.up-button');
const menuButton = document.querySelector('.navigation__toggle');
const navigationBar = document.querySelector('.navigation-list');
const extraButtons = document.querySelectorAll('.button--extra');
const popup = document.querySelector('.popup-wrapper');
const contentPopup = document.querySelector('.popup-content');
const buttonClosePopup = document.querySelector('.button--close-pop-up');

menuButton.addEventListener('click', function() {
  navigationBar.classList.toggle('navigation-list--opened');
  menuButton.classList.toggle('navigation__toggle--opened');
});

buttonClosePopup.addEventListener('click', function() {
  popup.classList.toggle('popup-wrapper--open');
});

popup.addEventListener('click', function() {
  popup.classList.toggle('popup-wrapper--open');
});

contentPopup.addEventListener('click', function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (evt) {
        evt.preventDefault();
        const id = smoothLink.getAttribute('href');
        if (id.length > 1) {
          document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        }
    });
};


window.addEventListener('scroll', function () {
  if (window.pageYOffset > 1300) {
    upButton.classList.add('up-button--shown');
  } else {
    upButton.classList.remove('up-button--shown')
  };
});

upButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}) 
})();



