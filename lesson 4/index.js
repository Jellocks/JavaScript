1.
const actors = [
    { name: 'Tom Hanks', birthYear: 1956 },
    { name: 'Meryl Streep', birthYear: 1949 },
    { name: 'Denzel Washington', birthYear: 1954 },
];


const currentYear = new Date().getFullYear();


const actorsWithAge = actors.map(actor => {
    const age = currentYear - actor.birthYear;
    return { ...actor, age };
});

console.log(actorsWithAge);