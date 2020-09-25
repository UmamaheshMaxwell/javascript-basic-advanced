var person = new Object();

console.log(person)

person["firstName"] = "Uma";
person["lastName"] = "Mahesh";

console.log(person);

var firstNameProperty= "firstName";

console.log(person[firstNameProperty])
console.log(person["lastName"])

// using dot notation

console.log(person.firstName)
console.log(person.lastName)


person.city ="Hyderabad"
console.log(person.city)

person.address = new Object();


person.address.street = "1st main"
person.address.state ="Telangana"

console.log(person["address"]["state"])
console.log(person.address.state)

person.count = 1
person.fullname = "uma"
person.isAdmin = true
person.getFullname = function(){

}
person.hobbies = ["cricket", "basketball", "Netflix"]


console.log(person)