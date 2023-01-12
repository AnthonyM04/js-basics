//lesson by jiho
   
   //const person = {
    //    firstName: 'Jiho',
    //    lastName: 'Sohn',
    //    age: 18
    //}

const personarray = [
    'Jiho', //0
    'Sohn', //1
     18 //2
];

//mutate a value
personarray[0]='Tony';
personarray[3]='Attoinette';

const fullName = personarray[0] + ' ' + personarray [1];

const totalLength = personarray.length;



console.log(personarray);
console.log('fullName', firstName);
console.log('Total:', totalLength);