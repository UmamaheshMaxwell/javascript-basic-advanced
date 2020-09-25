function sayHello(){
    console.log('Hello')
}

sayHello();

// with parameters

function getFullName(firstName, lastName){
    return firstName + ' ' + lastName
}

var fullName = getFullName('Uma','mahesh');
console.log(fullName)

function test(){
   // return undefined
   // return null
   // return 1
   // return "uma"
   //  return true
   //  return {}
   // return []
    return function(){}
}
var output = test();
console.log(output)