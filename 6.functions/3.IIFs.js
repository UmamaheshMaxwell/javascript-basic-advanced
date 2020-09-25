// var sample = (function (){
//     console.log('this is a sample function')
//     return 1;
// })()

// console.log(sample)


var output = (function(){
    var  lastName ="Mahesh";
    var getName = function(){
        return lastName;
    }
    return getName()
})()

console.log(output)

//var value ="mahesh"
var getName = function (){
    console.log('This is getname function outside IIF' + ' ' + lastName)
}

getName()