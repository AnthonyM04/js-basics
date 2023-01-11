//lesson by todd

const gender = 'female'

// ? - then
// : - else
const greeting = (gender === 'male') ? 'Hello sir' : 'Hello ma\'am'

console.log(greeting)

//lets do another example

const age = 21
const message = (age >= 21)
                    ?'Drink up!'
                    :'Have some water.'

console.log(message)


if (age < 21) {
    if (age < 18) {
        console.log('Take a hike!')
    }
} console.log('Here\'s your stamp!')

//yes, we can next ternaries...

const message2 = (age >= 21)
                    ? console.log('Drink all you want!')
                    : (age2 >= 18)
                            ? 'Have some more water.' //18 - 20
                            : 'Please leave now.' //under 18

console.log(message2)
