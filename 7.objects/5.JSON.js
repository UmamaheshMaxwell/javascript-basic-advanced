// JSON

var jsonObj = {   
    "firstname": "uma",
    "lastName": "Mahesh"
}

// Object

var obj = {   
    firstname: "uma",
    lastName: "Mahesh"
}

var person = {firstname: 'Scott', lastName: 'Desatnick'}
console.log(person)
console.log(typeof person)
var output = JSON.stringify(person);
console.log(typeof output)


var obj1 = {
    x: 5, 
    y: 6
}

var result1 = JSON.stringify(obj1);
console.log(result1)
console.log(typeof result1)

var obj2 = {
    x: 10, 
    y: 20
}

var result2 = JSON.stringify(obj2, null, ' ')
console.log(result2)
console.log(typeof result2)

var output = JSON.parse(result2)
console.log(output)
console.log(typeof output)