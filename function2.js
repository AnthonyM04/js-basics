// There is 4 types of fucntions -
// 1. do something / NO PARAMS
// 2. do something / WITH PARAMS
// 3, RETURN SOMETHING / NO PARAMS
// 4. RETURN SOMeTHING / WITH PARAMS

// I. Example
function sayHelloWorld () {
    console.log('Hello, world.')
}

sayHelloWorld () //calls the function

//II. Example

function greetFriend(name) {
    console.log('Hello, ' + name)
}

greetFriend('Susan')

//III. Example

function addTwoPlusTen () {
    const result = 2 + 10
    return result
}

//this works aswell
//  function addTwoPlusTen () {
//      return 2+10
//  }

const answer = addTwoPlusTen() // answer = 2+10 (12)

console.log(answer)

//IV. Example

function addTwoNumbers (a,b) {
    const result = a + b
    return result
}

const mySum = addTwoNumbers(23, 17)

console.log(mySum)

// real world example

function calculateSalesTax(subTotal,taxRate) {
    const salesTax = (subTotal * taxRate).toFixed(2)
    return salesTax
}
