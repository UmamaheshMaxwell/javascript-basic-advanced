// var is function scoped
function Sample(){
    if(true){
        var message = "This is true";
    }
    if(10==10){
        console.log(message)
    }
    
    return function(){
        return message + ' Inner function';
    }
}

console.log(Sample()())

// let is block scoped
if(true)
{
    let letMessage ="Thi is let true"
    console.log(letMessage)
}

// const

if(true)
{
    const constMessage ="Thi is const true"
    console.log(constMessage)
}


var a =10;
var a =5;

console.log(a)
let b =10;
 b =5;

console.log(b)



// Both let and connst are same, except the 'const' will not 
// allow us to redeclare the variable

/* Let Declaration 

    1. You may or may not initialize during declaration
    2. You can reassign the value

*/
let name = "Surekha"

name= "Sunitha";

console.log(name)

// let 

let state;

state="telangana";

console.log(state)

/* Const Declaration 

    1. You need to initialize during declaration
    2. You can't reassign the value

*/
const fullName= "Surekha"

//fullName="Sunitha";

console.log(fullName)

// const 

const city= "Hyderbad";

console.log(city)


const person = {name: 'Uma'}

//Object.freeze(person)

person.name = 'Mahesh'

console.log(person)