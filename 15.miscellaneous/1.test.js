 // Value Type
var a = 10;
var b =a;
 a = 20;
 console.log(a)
 console.log(b)

// Reference Type
var a = [1,2]
var b = a;

a.push(3)
console.log(a)
console.log(b)

// Reference Type
var a = [1,2]
var b = a;

a = [1,2,3]
console.log(a)
console.log(b)

var name1 = "Shantanu" + 1 + 2;
console.log(name1)

var name2 = "Sunitha" + (1 + 2);
console.log(name2)


var name3 = 1 + 2 + "Surekha" ;
console.log(name3)

var name4 = 1 + (2 + "Surekha") ;
console.log(name4)

var name5 = 1 + 2 + "Uma" + 2 + 1 ;
console.log(name5)


var output = (function(x){
    delete x;
    return x
})(0)

console.log(output)

var x = 1;
var result = (function(){
    delete x;
    return x;
})();

console.log(result)

var x = 1;
var result = (function(){
    var x = 2;
    return x;
})();

console.log(result)


var array = [
                null,
                undefined,
                1,
                "johngalt",
                true,
                function(name){
                    return name
                },
                {
                    name: 'Mahesh'
                },
                ["red", "green", "yellow"]
            ]

 console.log(array[5](array[6].name))
 console.log(array[5](array[3]))

 // function takes object returns the object
 // function take ths array and returns the first value of array
console.log(array[5](array[6]))
console.log(array[5](array[7])[1])
