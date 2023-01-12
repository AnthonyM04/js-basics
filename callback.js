function sayHello() {
    console.log('Hello there')
}

function goSlow() {
    setTimeout(() => console.log('Slow...') ,500)
} 

function sayGoodbye () {
    console.log('Say goodbye')
}


sayHello()
sayGoodbye()

//what if i want to guarentee that hello comes before goodbye?

function sayHelloThen(next) {
    console.log('Hello there!')
    next()
}

sayHelloThen(() => console.log ('Goodbye!') )