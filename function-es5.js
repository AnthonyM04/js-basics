//lesson by jiho

const person = {
    firstName: 'Jiho',
    lastName: 'Sohn'
}

function studentName (propFirstName, propLastName) {
    const firstName = propFirstName
    const lastName = propLastName
    const fullName = propFirstName + ' ' + propLastName
    return fullName;
}

console.log( studentName('Tony', 'Stark'))
console.log( studentName('St.', 'Mary'))
console.log( studentName(person.firstName, person.lastName))

