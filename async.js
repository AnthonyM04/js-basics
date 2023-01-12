function needsName() {

}


function doSomething() {
    console.log('SOMETHING')
}

console.log('START')
console.log('END')

setTimeout(doSomething, 2) //milliseconds, 1000 = 1 sec

//this is a function with no name: an Anonymous function
setTimeout(function ()  {
    console.log("OTHER THING")
}, 0)


function sayHey(i) {
    console.log(i,'Ho')
}

sayHey(1)
