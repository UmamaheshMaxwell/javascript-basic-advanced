// var person = {
//     firstName: 'Uma',
//     lastName: 'Mahesh',
//     City: 'Hyderabad'
// }

// person.age =38;
// console.log(person)
// person.firstName ='Swathi'

// delete person.age;
// console.log(person)

/* 

Object.preventExtensions()
-----------------------------

We can edit and delete the properties 
but can't add new properties 

*/

var preventObject = {
    name:'Scott',
    city: 'Boston',
    age: 40
}

Object.preventExtensions(preventObject);

preventObject.email="scott@desatnick.com"
preventObject.name ="Uma"
delete preventObject.age;

console.log(preventObject);

/* 

Object.seal()
-----------------------------
We can edit the properties but we can't add 
new properties or can't delete existing properties

*/

var sealObject = {
    name:'Adam',
    city: 'Germany',
    age: 40
}

Object.seal(sealObject);

sealObject.email="Adam@colson.com"
sealObject.name ="Mahesh"
delete sealObject.age;

console.log(sealObject);

/* 

Object.freeze()
-----------------------------
    We can't add, edit and delete the properties
*/

var freezeObject = {
    name:'Tuan',
    city: 'Germany',
    age: 40,
    address : {
        State:'MA'
    }
}

Object.freeze(freezeObject);

freezeObject.email="Tuan@Bui.com"
freezeObject.name ="Umesh"
delete freezeObject.age;

Object.freeze(freezeObject.address)
freezeObject.address.State = 'LA'

console.log(freezeObject);