// Object Literal

// var person = {};
// console.log(person)

// Primitive Types inside an object are called properties
// function is inside an object then that is called method

var person = {
    Id : 1,
    firstName: 'Uma',
    lastName: 'Mahesh',
    isAdmin: true,
    address: {
        street: "1st Main",
        city: 'Hyderbad',
        state: 'Telangana'
    },
    array: ["red,", "blue", "yellow", 1, 2, true, {},[], function(){}],
    getDetails: function(){
        return this.firstName;
    }
}

person.grade = "A++"
person.sample = function(){
    return "this is sample method"
}

console.log(person.Id)
console.log(person.firstName)
console.log(person.lastName)
console.log(person.isAdmin)
console.log(person.address.street)
console.log(person.address.city)
console.log(person.address.state)
console.log(person.array)
console.log(person.getDetails())
console.log(person.grade)
console.log(person.sample())

function sample(){

    return person;
}

console.log(sample())
