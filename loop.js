/* ******* do..while ******* */
//repeats until false

// console.log('Do while loop\n**********')

// let i = 0
// do {
//     i++
//     console.log('This is #', i)
// } while (i < 10)

/* ******* while loop ******* */
//repeats until conditon is false
// console.log('While loop\n***********')
// let i=0

// while(i < 10) {
//     console.log('This is #', i)
//     i++
// }

/* ******* for loop break ******* */
// console.log('for loop with break\n**********')

// for(let i = 0; i < 10; i++) {
//     if (i === 5) {
//     console.log('This is #', i)
//         break
//     }
// }

/* ******* for in Object ******* */
// console.log("for in Object\n **********")

// const person = {
//     firstname: 'Jiho',
//     lastname: 'Sohn',
//     age: 47
// }

// console.log(person)

// for (let i in person) {
//     if (person[i] === 'Sohn') { 
//         break
//     }
//     console.log('key =>',i,'\n')
//     console.log('value=',person[i])
// }


/* ******** for Of Object ******** */
// console.log('For In Object\n***********)

const car = [
    'crosstrek',
    'subaru',
    true,
    true
]

for (let i of car) {
    console.log('value =>', i)
}

