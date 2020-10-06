var message = function(){
    return "Hello World"
}

message = () => {
    return "From Fat Arrow Function"
}

nullMessage = () => null
undefinedMessage = () => undefined
numMessage = () => 1
stringMessage = () => "uma"
boolMessage = () => true
arrayMessage = () => ["Uma", 1, true, {name:'Johngalt'}]
funcMessage= () => function(){return "Hey"}

console.log(nullMessage())

console.log(undefinedMessage())

console.log(stringMessage())

console.log(numMessage())

console.log(boolMessage())

console.log(arrayMessage())

console.log(funcMessage())

// Passing parameters
message = (name) => {
    return "Hello " + name;
}

console.log(message('Mahesh'))


// Passing parameters without flower brackets

message= (name) => "Hello " + name;

console.log(message('Umesh'))

// if we have a singe parameter we can take out 
// paranthesis as shown below

message= name => "Hello " + name;

console.log(message('Uma Mahesh'))

// if we have a multiple parameters then we must use 
// paranthesis as shown below

message= (name, city) => "Hello " + name + ' ' + city;

console.log(message('Uma Mahesh', 'Hyd'))


message = name => name;

console.log(message({name: 'Mahesh'}))

{
    var getFullName = (firstName, lastName) => {
        return firstName + ' ' + lastName;
    }
}


var getFullName = ((firstName, lastName) => {
    return firstName + ' ' + lastName;
})('Uma', 'Mahesh')


console.log(getFullName)