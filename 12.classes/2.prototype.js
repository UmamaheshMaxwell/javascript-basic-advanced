function Student(name, gender){
    this.name = name
    this.gender = gender
}

Student.prototype.age = 25;
Student.prototype.getStudent = function(){
    return this.name + ' is a ' + this.gender
}

var stuObj1 = new Student('Sunitha', 'female');
var stuObj2 = new Student('Surekha', 'female');

console.log(stuObj1.age)
console.log(stuObj2.age)
console.log(stuObj1.getStudent())
console.log(stuObj2.getStudent())