//Class (29/09/2020)


function Student(){

}

//instance


function Person(){

}

var person1 = new Person();
var person2 = new Person();

//constructor


function Order(){
    console.log('Order is placed')
}

var order = new Order(); // Order() is called constructor

//Properties

function Customer(gender){
    this.gender = gender
}


var customer1 = new Customer('Female')
var customer2 = new Customer('Male')