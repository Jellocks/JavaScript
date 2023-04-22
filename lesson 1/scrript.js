const input = document.querySelector('.input');

const person = {
    fullName: 'Vladislav',
    age: 24,
    anyInfoAboutYourPlace: {
        country: 'Gonduras',
        city: 'Tagangor',
        adress: 'Pushkina',
    },
    hasCats: true,
    hobbies: ['Youtube', 'Frontend', 'Gaming'],
    greeting: ()  {
        return `Hey, my name is ${this.fullName}`
    },
};

const myPerson = {
    ...obj,
    occupation: {
        kindOfWork: 'Remote',
        typeOf: 'Operator',
    },
};
console.log(myPerson.occupation['typeOf'])

Input.innerHTML = `Hello,i'm - ${myPerson.occupation['typeOf']}`;