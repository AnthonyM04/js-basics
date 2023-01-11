//lesson by jiho 

//const firstName = 'Jiho'
//const lastName = 'Sohn'

const person = {
    firstName: 'Anthony',
    lastName: 'Murphy',
    age: 18
}

// dot notation
person.firstName;

//bracket notation
person['lastName'];

//mutate a value in an object
person.firstName ='Tony';

//add new property to an object
person.height = 178

//deleting a property
delete person.height;

console.log('Hello' + ' ' + person.firstName + ' ' + person.lastName);
console.log('age:', person.age)
console.log('person object', person)
console.log('Height:', person['height'])