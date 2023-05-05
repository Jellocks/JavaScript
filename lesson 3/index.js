// function prompt(number) {
//     if (number <= 40) {
//         alert('You failed the exam,try again');
//     } else if (number >= 41 && number <= 70) {
//         alert('You passed the exam, but you have to attend additional classes')
//     } else if (number >= 71 && number <= 100) {
//         alert('You passed the exam, get some rest before the next one')
//     } else if (number > 100) {
//         alert('The number must be from 0 to 100');
//     } else if (number != Number) {
//         alert('It must be a number');
//     }

// };
// prompt('hello');

// const movies = [
//     {
//         id: 1,
//         title: 'Matrix',
//         year: 1999,
//         actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
//         description: 'When computer programmer Thomas Anderson, under the hacker alias "Neo", uncovers the truth, he joins a rebellion against the machines along with other people who have been freed from the Matrix.',
//         details: {
//             genre: 'Fantastic',
//             reviews: [{
//                 username: 'Bumblebeesha', content:
//                     `Over the past 20 years, the film "Matrix" has become so overgrown with moss that somehow it does not give the impression that it is still relatively young. Actually, the main characters of The Matrix in conjunction with the theme are very unambiguous, so it was a mystery to me - where is the ecstasy from this rather ordinary world. Yes, there, the matrix controls everything in our life, Kafka's castle is much more uncertain, therefore more intimidating.`,
//                 score: 10
//             }]
//         }
//     },
//     {
//         id: 2,
//         title: 'Fight Club',
//         year: 1998,
//         actors: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
//         description: `Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club" with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a mysterious[5][6] woman, Marla Singer.`,
//         details: {
//             genre: 'Triller',
//             reviews: [{
//                 username: 'Lanocka123', content:
//                     `What is this movie about? The bored protagonist is already completely desperate. Nothing interesting happens in his life... And so, one day he meets a man who suddenly becomes interesting to him. He turns everything upside down. And what exactly is going on, I advise you to see for yourself.`,
//                 score: 9
//             }]
//         }
//     },
//     {
//         id: 3,
//         title: 'Birdman',
//         year: 2014,
//         actors: ['Michael Keaton', 'Zach Galifianakis', 'Edward Norton'],
//         description: `The film stars Michael Keaton as Riggan Thomson, a faded Hollywood actor best known for playing the superhero "Birdman", as he struggles to mount a Broadway adaptation of Raymond Carver's short story, "What We Talk About When We Talk About Love". The film also features a supporting cast of Zach Galifianakis, Edward Norton, Andrea Riseborough, Amy Ryan, Emma Stone, and Naomi Watts.`,
//         details: {
//             genre: 'Comedy-drama',
//             reviews: [{
//                 username: 'peonylion', content:
//                     `If it is a comedy, it is not a black one, but a drama combined with a tragicomedy. She was in the program of the first channel. I read the brief description. I started watching, forcing myself to watch to the end every now and then.`,
//                 score: 6
//             }]
//         }
//     },
// ];

// function filterShow(movie, year, rating) {
//     movies.forEach((el) => {
//         if (el.title == movie && el.year == year && el.details.reviews[0].score == rating) {
//             let banner = el.title;
//             console.log([el.title, el.year, el.details.reviews[0].score])
//         }
//     });

// };
// filterShow('Birdman', 2014, 6);

// function getWord(number, array) {
//     if (number == 12 || number == 13 || number == 14 || number % 10 == 5 || number % 10 == 6 || number % 10 == 7 || number % 10 == 8 || number % 10 == 9 || number % 10 == 0) {
//         console.log(number += array[2]);
//     }
//     else if (number % 10 == 2 && number % 10 != 12 || number % 10 == 3 && number % 10 != 13 || number % 10 == 4 && number % 10 != 14) {
//         console.log(number += array[1]);
//     } else if (number % 10 === 1) {
//         console.log(number += array[0]);
//     }
// };

// getWord(12, ['фильм', 'фильма', 'фильмов'])
