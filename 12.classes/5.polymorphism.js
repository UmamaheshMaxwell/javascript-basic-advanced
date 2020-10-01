function Shape(){

}

Shape.prototype.draw = function(){
    return "I am generic shape"
}

// Circle
function Circle(radius){
    console.log(radius)
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function(){
    return "I am a Circle"
}

// Square

function Square(){}


Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function(){
    return "I am a Square"
}

// 

function Triangle(){}


Triangle.prototype = Object.create(Shape.prototype)

// Triangle.prototype.draw = function(){
//     return "I am a Triangle"
// }


var shapes = [new Shape(), new Circle(30), new Square(), new Triangle()] 

shapes.forEach(function(shape){
    console.log(shape.draw())
})