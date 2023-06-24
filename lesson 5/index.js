const closeButton = document.querySelector('.sign-in_close');
openButton = document.querySelector('.header__button');
signIn = document.querySelector('.sign-up');
slider = document.querySelector('.slider');
logo = document.querySelector('.hero-img');
burger = document.querySelector('.burger');
menu = document.querySelector('.content-menu');
button = document.querySelector('.content-menu_button');
// line = document.querySelectorAll('.item-text');
// subline = document.querySelector('.faq-subtitle');

openButton.addEventListener('click', () => {
    signIn.classList.remove('disabled');
});

closeButton.addEventListener('click', () => {
    signIn.classList.add('disabled');
})

function rotateSlider() {
    let timePassed = 0;

    setInterval(() => {
        console.log(timePassed);

        if (timePassed < 4000) {
            slider.style.backgroundImage = "url('./assets/img/logo-2.png')";
            logo.src = './assets/img/euphoria.svg';
        } else if (timePassed < 8000) {
            slider.style.backgroundImage = "url('./assets/img/logo-3.png')";
            logo.src = './assets/img/house.svg';

        } else {
            slider.style.backgroundImage = "url('./assets/img/fon.png')";
            logo.src = './assets/img/last-logo.svg';

            timePassed = 0; // сбрасываем время прошедшее с момента запуска
        }
        timePassed += 4000; // прибавляем 4000 миллисекунд к времени прошедшему с момента запуска
    }, 4000);
}

rotateSlider();


// setInterval(() => {
//     slider.style.backgroundImage = "url('./assets/img/logo-2.png')";
//     logo.src = './assets/img/euphoria.svg';

// }, 4000);
// setInterval(() => {
//     slider.style.backgroundImage = "url('./assets/img/logo-3.png')";
//     logo.src = './assets/img/house.svg';



// }, 8000);

// setInterval(() => {
//     slider.style.backgroundImage = "url('./assets/img/fon.png')";
//     logo.src = './assets/img/last-logo.svg';
// }, 12000);




burger.addEventListener('click', () => {
    menu.classList.toggle('no');
});

button.addEventListener('click', () => {
    signIn.remove.classList('disabled');

});






const titles = document.querySelectorAll(".item-text");
const plus = document.querySelectorAll('.faq-img');


titles.forEach((title, index) => {
    title.addEventListener("click", function () {
        const parent = this.closest(".faq-item");
        const subtext = parent.querySelector(".item-subtext");



        subtext.style.height = (subtext.style.height !== "72px") ? "72px" : 0;

        subtext.style.opacity = (subtext.style.opacity === "1") ? "0" : "1";


        if (plus[index].src.includes('minus.svg')) {
            plus[index].src = './assets/img/plus.svg';
        } else {
            plus[index].src = './assets/img/minus.svg';
        }
    });
});



