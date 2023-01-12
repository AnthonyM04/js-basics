function sayHello (firstName = "Stranger") {
    console.log('Hey there, ' + firstName)
}


sayHello('Jiho')

function sumAdd (x=0,y=0) {
    let sum = x + y
    return sum
}
console.log(sumAdd (100,1) )