//lesson by todd

//first lets set up some variables

//const age = 18; constant numbers cannot change
let age = 18; //let numbers can change when prompted

//Lets start with the most basic if statement:

if (age >= 18) {
    console.log('Welcome, come on in!')
}

//What about people that aren't yet 18?
//Lets use an if...else


if (age >= 21) {
    console.log('Drink up!')
} else {
    console.log('Here\'s some water!') //we escaped the apostrophe
}

//what if we have more than 2 possibilites
// then we can use an elseif

const hour = 18;

if (hour < 11) { //pros in the industry tend to not never use else/elseif, switch is much more common
    console.log('Good morning.')
}   else if (hour < 17) {
    console.log('Good afternoon.')
}   else if (hour < 22) {
    console.log('Good night')
}   else {
    console.log('Go to bed.')
}

//when dealing with many different conditions, we often use a switch

const yourPet = 'fox'

switch(yourPet) {
    case 'dog':
        console.log('woof woof')
        break
    case 'cat':
        console.log('meow meow')
        break
    case 'bird':
        console.log('chirp chirp')
        break
    case 'fox':
        console.log('What does the fox say?')
        break
    case 'racoon':
    case 'lizard':
    case 'snake':
        console.log('That\'s a crazy pet, yo!')
        break
    case 'turtle':
        console.log('i love turtles')
        break
    case 'chupacabra': //this line does not add anything to the code
    case 'ferret': 
    default:
        console.log('Wow! I\'ve never even heard of that!')
        break
}

//different ways to add
age = age + 1
age =+ 1
age++

console.log('I have had 3 birthdays! I am now', age ,'years old.')

//for more on ternaries, look at ternary.js