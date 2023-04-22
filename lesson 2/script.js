

const movies = [
    {
        id: 1,
        title: 'Matrix',
        year: 1999,
        actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        description: 'When computer programmer Thomas Anderson, under the hacker alias "Neo", uncovers the truth, he joins a rebellion against the machines along with other people who have been freed from the Matrix.',
        details: {
            genre: 'Fantastic',
            reviews: [{
                username: 'Bumblebeesha', content:
                    `Over the past 20 years, the film "Matrix" has become so overgrown with moss that somehow it does not give the impression that it is still relatively young. Actually, the main characters of The Matrix in conjunction with the theme are very unambiguous, so it was a mystery to me - where is the ecstasy from this rather ordinary world. Yes, there, the matrix controls everything in our life, Kafka's castle is much more uncertain, therefore more intimidating.`,
                score: 10
            }]
        }
    },
    {
        id: 2,
        title: 'Fight Club',
        year: 1998,
        actors: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
        description: `Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club" with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a mysterious[5][6] woman, Marla Singer.`,
        details: {
            genre: 'Triller',
            reviews: [{
                username: 'Lanocka123', content:
                    `What is this movie about? The bored protagonist is already completely desperate. Nothing interesting happens in his life... And so, one day he meets a man who suddenly becomes interesting to him. He turns everything upside down. And what exactly is going on, I advise you to see for yourself.`,
                score: 9
            }]
        }
    },
    {
        id: 3,
        title: 'Birdman',
        year: 2014,
        actors: ['Michael Keaton', 'Zach Galifianakis', 'Edward Norton'],
        description: `The film stars Michael Keaton as Riggan Thomson, a faded Hollywood actor best known for playing the superhero "Birdman", as he struggles to mount a Broadway adaptation of Raymond Carver's short story, "What We Talk About When We Talk About Love". The film also features a supporting cast of Zach Galifianakis, Edward Norton, Andrea Riseborough, Amy Ryan, Emma Stone, and Naomi Watts.`,
        details: {
            genre: 'Comedy-drama',
            reviews: [{
                username: 'peonylion', content:
                    `If it is a comedy, it is not a black one, but a drama combined with a tragicomedy. She was in the program of the first channel. I read the brief description. I started watching, forcing myself to watch to the end every now and then.`,
                score: 6
            }]
        }
    },

];

const maxScore = 10;
let count = 0;
let total = 0;
movies.forEach((movie) => {
    const reviews = movie.details.reviews;
    count += reviews.length;

    reviews.forEach((rewiew) => {
        total += rewiew.score;
    })
})
const averageNubmer = (total / count).toFixed(2);
movies.forEach(movie => {
    console.log(`The ${movie.year} film ${movie.title}, which tells the story of ${movie.description}
This movie starred ${movie.actors.join(', ')}. It was rated by ${movie.details.reviews.length} users, with a total rating of ${averageNubmer}. Register to watch this ${movie.details.genre}.`);
});

function getByYear(movie, year) {
    return movie.filter((item) => item.year >= year);
}

function getByTitle(movie, title) {
    return movie.filter((item) => item.title >= title);
}