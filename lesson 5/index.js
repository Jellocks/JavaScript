const closeButton = document.querySelector('.sign-in_close');
openButton = document.querySelector('.header__button');
signIn = document.querySelector('.sign-up');
slider = document.querySelector('.slider');
logo = document.querySelector('.hero-img');
burger = document.querySelector('.burger');
menu = document.querySelector('.content-menu');
button = document.querySelector('.content-menu_button');

openButton.addEventListener('click', () => {
    signIn.classList.remove('disabled');
});

closeButton.addEventListener('click', () => {
    signIn.classList.add('disabled');
})



setInterval(() => {
    slider.style.backgroundImage = "url('./assets/img/logo-2.png')";
    logo.src = './assets/img/euphoria.svg';

}, 4000);
setInterval(() => {
    slider.style.backgroundImage = "url('./assets/img/logo-3.png')";
    logo.src = './assets/img/house.svg';



}, 8000);

setInterval(() => {
    slider.style.backgroundImage = "url('./assets/img/fon.png')";
    logo.src = './assets/img/last-logo.svg';
}, 12000);

burger.addEventListener('click', () => {
    menu.classList.toggle('no');
});

button.addEventListener('click', () => {
    signIn.remove.classList('disabled');
    button.style.color = 'red';
    console.log('hello');
});
