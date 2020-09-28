var person1 = {firstName: 'Adam', lastName:'Colson'}
var person2 = {firstName: 'Tuan', lastName: 'Bui'}
var person3 = {firstName: 'Scott', lastName:'Desatnick'}
var person4 = {firstName: 'Daniel', lastName: 'Chen'}

function getName(message, city){

    return  message + ' from ' + 
           city  + ' to ' + 
           this.firstName + ' ' + 
           this.lastName 
}


var bindMessage = getName.bind(person1)
console.log(bindMessage('Hello', 'Boston'))


var bindMessage = getName.bind(person2)
console.log(bindMessage('Hello', 'Boston'))

var callMessage = getName.call(person3, 'Hello', 'Boston')
console.log(callMessage)

var applyMessage = getName.apply(person4, ['Hello', 'Boston'])
console.log(applyMessage)


// code Reusability
var network = {message:''}
var data = {message:''}
var save = function(){}
// network data
var netwrokLogs = {essage: network.message}

// database  / JSON

var dataLogs = {message: data.message}


function logData(){
    this.message
    save(this.message)
}

logData.call(netwrokLogs)
logData.call(dataLogs)