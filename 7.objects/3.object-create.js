var objWithNull = Object.create(null)
var objWithPrototype = Object.create({})

console.log(objWithNull)
console.log(objWithPrototype)

var person = Object.create(null);

person.firstName = "Uma"
person.lastName = 'Mahesh'
person.isAdmin = true,
person.address = Object.create(null)

// person.address = {
//     street= "1st Main",
//     city= 'Hyderbad',
//     state= 'Telangana'
// },
person.array= ["red,", "blue", "yellow", 1, 2, true, {},[], function(){}],
person.getDetails= function(){
    return this.firstName;
}

console.log(person)
