// assinging function to a variable
var sample = function(){

}

var output = sample()
console.log(output)

var getFullName = function(firstName, lastName){
    console.log(firstName + '  ' + lastName)
    return firstName + ' ' + lastName
}

var fullName = getFullName('Uma', 'Mahesh');
console.log(fullName)



var timeoutfunction = function(){
    console.log('This will be printed after three seconds')
}
// Passing function as a parameter to another function ( callback)
setTimeout(timeoutfunction, 3000)