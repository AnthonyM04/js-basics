/*
create your own person object with
    first name
    last name
    fav color
    hobby

create an array with your favorite movie
creative a function that generates the following:
console log f1 hi my full name is: $firstName $lastName. My Favorite color is $favColor and i love #hobby
console log f2 I like these following 5 movies. movie0, movie1, movie2, movie3, movie4
console log f3 create a math function that takes 3 parameters

default parameter bonus
*/


const person = { //person object
    firstName: 'Anthony', 
    lastName: 'Murphy', 
    favColor: 'Black', 
    favHobby: 'Reading'
}



const movieArray = [ //movie array
    'Blade Runner', //0
    'Pulp Fiction', //1
    'Mad Max: Fury Road', //2
    'No Country For Old Men', //3
    'The Grand Budapest Hotel' //4
]


function numAdd(a=0,b=0,c=0) {
    let num = a + b + c
    return num
}

function fullNameAdd (x=person.firstName,y=person.lastName) {
    let fullName = x + ' ' + y
    return fullName
}

console.log(numAdd(277,34,24))

console.log('Hello! My name is', fullNameAdd(person.firstName,person.lastName), 'My favorite color is', person.favColor,'and my favorite hobby is', person.favHobby )
console.log('\n These 5 movies are my favorite of all time:')
console.log(' #1:', movieArray[0], '\n' ,'#2:', movieArray[1], '\n' ,'#3:', movieArray[2], '\n' ,'#4:',movieArray[3], '\n' ,'#5:',movieArray[4])
