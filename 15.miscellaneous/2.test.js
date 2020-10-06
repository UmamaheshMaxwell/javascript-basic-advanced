function sayHello(name){
    return function(){
        return "Hello " + name;
    }
}

var message = sayHello('Uma') 
console.log(message)


var person1 = { name: 'Uma', city:'Hyederbad'}
var person2 = { name: 'Mahesh', city:'Bangalore'}
var person3 = { name: 'Umesh', city:'Boston'}

function getPerson(message1, message2){
    return message1 + this.name + ' ' +  this.city + ' ' + message2;
}

var bindGreetings = getPerson.bind(person1)
console.log(bindGreetings('Hello ', 'Our Best Wishes !!'))

var callGreetings = getPerson.call(person2, 'Hello ', 'Our Best Wishes !!' )
console.log(callGreetings)

var applyGreetings = getPerson.apply(person3, ['Hello ', 'Our Best Wishes !!'])
console.log(applyGreetings)

