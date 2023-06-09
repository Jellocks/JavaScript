const movies = [
  {
    id: 1,
    title: "Guardians of the Galaxy Vol. 3",
    genre: ["drama", "comedy", "adventure"],
    description:
      "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.",
    actors: [
      {
        name: "Chris Pratt",
        birthyear: 1979,
        country: "USA",
      },
      {
        name: "Bradley Cooper",
        birthyear: 1975,
        country: "USA",
      },
      {
        name: "Zoe Saldana",
        birthyear: 1978,
        country: "Mexico",
      },
    ],
    similar: ["Plane", "Sharper"],
    rating: 8.4,
  },
  {
    id: 2,
    title: "Plane",
    genre: ["thriller", "crime", "adventure"],
    description:
      "Pilot Brodie Torrance saves passengers from a lightning strike by making a risky landing on a war-torn island -- only to find that surviving the landing was just the beginning. When dangerous rebels take most of the passengers hostage, the only person Torrance can count on for help is Louis Gaspare, an accused murderer who was being transported by the FBI.",
    actors: [
      {
        name: "Gerard Butler",
        birthyear: 1969,
        country: "Scotland",
      },
      {
        name: "Mike Colter",
        birthyear: 1976,
        country: "USA",
      },
      {
        name: "Lilly Krug",
        birthyear: 2001,
        country: "Germany",
      },
    ],
    similar: ["Guardians of the Galaxy Vol. 3", "Sharper"],
    rating: 6.1,
  },
  {
    id: 3,
    title: "Sharper",
    genre: ["drama", "thriller", "crime"],
    description:
      "Motivations are suspect, and expectations are turned upside down, as a con artist takes on Manhattan billionaires.",
    actors: [
      {
        name: "Julianne Moore",
        birthyear: 1960,
        country: "United Kingdom",
      },
      {
        name: "Sebastian Stan",
        birthyear: 1982,
        country: "Romania",
      },
      {
        name: "Briana Middleton",
        birthyear: null,
        country: "USA",
      },
    ],
    similar: ["Guardians of the Galaxy Vol. 3", "Plane"],
    rating: 3.3,
  },
];


1.
const currentYear = new Date().getFullYear();

const moviesWithAge = movies.map((movie) => {
  const actorsWithAge = movie.actors.map((actor) => {

    let age = currentYear - actor.birthyear;
    if (actor.birthyear === null) {
      actor.birthyear = "не указан год рождения актера";
      age = "возраст аткера отсутсвует, так как не указан год рождения"
    }
    return {
      ...actor,
      age: age,
    };
  });
  return {
    ...movie,
    actors: actorsWithAge,
  }
});

console.log(moviesWithAge);
2.
const genres = movies.reduce((accumulator, currentMovie) => {
  currentMovie.genre.forEach((genre) => {
    const foundGenre = accumulator.find((g) => g.name === genre);
    if (foundGenre) {
      foundGenre.movies.push(currentMovie.title);
    } else {
      accumulator.push({ name: genre, movies: [currentMovie.title] });
    }
  });
  return accumulator;
}, []);

console.log(genres);

3.
// Функция для получения фильма по ID и отображения его на странице
const getMovie = (id) => {
  // Получаем фильм из массива объектов по его ID
  let movie = movies.find(movie => movie.id === id);

  // Если фильм найден, то отображаем его на странице
  if (movie) {
    let rating = document.querySelector('.hero-rating');
    const titleEl = document.querySelector('.title-text');
    descriptionEl = document.querySelector('.subtitle');
    imgFirst = document.querySelector('.card-img__title');
    imgSecond = document.querySelector('.card-img__first');
    imgThird = document.querySelector('.card-img__second');
    infoFirst = document.querySelector('.card-info__first');
    infoSecond = document.querySelector('.card-info__second');
    infoThird = document.querySelector('.card-info__third');
    iconFirst = document.querySelector('.icon-first');
    iconSecond = document.querySelector('.icon-second');
    iconThird = document.querySelector('.icon-third');
    buttonFirst = document.querySelector('.button-first');
    buttonSecond = document.querySelector('.button-second');
    buttonThird = document.querySelector('.button-third');
    formTitle = document.querySelector('.form-subtitle');

    titleEl.innerHTML = movie.title;
    descriptionEl.innerHTML = movie.description;
    if (movie.rating < 5) {
      rating.innerHTML = `<span class="text">Rating:</span> <span class="red">${movie.rating}</span> / 10`;
    } else if (movie.rating > 5 && movie.rating < 8) {
      rating.innerHTML = `<span class="text">Rating:</span> <span class="yellow">${movie.rating}</span> / 10`;
    } else {
      rating.innerHTML = `<span class="text">Rating:</span> <span class="green">${movie.rating}</span> / 10`;
    }

    if (id == 1) {
      imgFirst.setAttribute('src', './img/card-1.png');
      imgSecond.setAttribute('src', './img/card-2.jpg');

    } else if (id == 2) {
      imgFirst.setAttribute('src', './img/card-2.jpg');
      imgSecond.setAttribute('src', './img/card-1.png');
      infoFirst.innerHTML = movies[1].actors[0].name;
      infoSecond.innerHTML = movies[1].actors[1].name;
      infoThird.innerHTML = movies[1].actors[2].name;
      iconFirst.setAttribute('src', './img/img-4.png');
      iconSecond.setAttribute('src', './img/img-5.png');
      iconThird.setAttribute('src', './img/img-6.png');
      buttonFirst.textContent = 'Thriller';
      buttonSecond.textContent = "Crime";
      buttonThird.classList.remove('disabled');
      formTitle.innerHTML = 'Plane';
    } else if (id == 3) {
      imgFirst.setAttribute('src', './img/card-3.jpg');
      imgThird.setAttribute('src', './img/card-1.png');
      iconFirst.setAttribute('src', './img/img-7.png');
      iconSecond.setAttribute('src', './img/img-8.png');
      iconThird.setAttribute('src', './img/img-9.png');
      infoFirst.innerHTML = movies[2].actors[0].name;
      infoSecond.innerHTML = movies[2].actors[1].name;
      infoThird.innerHTML = movies[2].actors[2].name;
      buttonFirst.textContent = 'Thriller';
      buttonSecond.textContent = "Crime";
      buttonThird.classList.remove('disabled');
      buttonThird.textContent = 'Drama';
      formTitle.innerHTML = 'Sharper';
    }
    if (!movie) {
      // если фильм не найден, выводим сообщение об ошибке
      console.error(`Movie with id ${id} not found!`);
      return;
    }
  }

}
getMovie(2);

4.
const rating = document.querySelector('.hero-rating');
ratingForm = document.querySelector('.active-form');
ratingInput = document.querySelector('.rating-input');
ratingButton = document.querySelector('rating-button');

rating.addEventListener('mouseenter', () => {
  ratingForm.classList.remove('disabled');

});
// Добавляем обработчик события submit на форму оценки
ratingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Получаем текущее значение рейтинга из элемента .movie-rating
  const currentRating = rating.textContent.split(':')[1].split('/')[0].trim();
  console.log(currentRating);
  // Получаем значение, которое ввел пользователь в input
  const newRating = ratingInput.value;
  console.log(newRating);
  // Вычисляем новый средний рейтинг
  const averageRating = ((currentRating * 1 + newRating * 1) / 2).toFixed(0);
  // Убираем класс скрыт
  rating.classList.remove('hidden');
  // Обновляем текст элемента  с новым средним рейтингом
  if (averageRating < 5) {
    rating.innerHTML = `<span class="text">Rating:</span> <span class="red">${averageRating}</span>`;
  } else if (averageRating > 5 && averageRating < 8) {
    rating.innerHTML = `<span class="text">Rating:</span> <span class="yellow">${averageRating}</span>`;
  } else {
    rating.innerHTML = `<span class="text">Rating:</span> <span class="green">${averageRating}</span>`;
  }

  // Скрываем форму оценки
  ratingForm.classList.add('hidden');

  // Очищаем значение input
  ratingInput.value = '';
});




