// Parent Class
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
}

// Child Class
function Student(age){
    this.age = age || 22;
    this.section = "B"
    // this.getAge = function(){
    //     return this.age;
    // }
}

// Invalid becuase student will not have access to getAge and Grade
// as its prototype is assigned to parent instance so any method extensions
// will have to be after prototype assignment.

// Student.prototype.getAge = function(){
//     return this.age;
// }

//Student.prototype.grade = "A+"

// Inheretance using prototype 
// Here we inherit properties from parent

Student.prototype = new Person('Pradeep', 'kumar');

Student.prototype.getAge = function(){
    return this.age;
}

Student.prototype.grade = "A+"


// Multiple Inheritance

function Teacher(){
    this.course = "Maths"
}

Teacher.prototype = new Student(null)

var student = new Student(37);
console.log(student.firstName)
console.log(student.lastName)
console.log(student.age);
console.log(student.getFullName())
console.log(student.getAge())

var teacher = new Teacher();
console.log(teacher.firstName)
console.log(teacher.lastName)
console.log(teacher.getFullName())
console.log(teacher.age)
console.log(teacher.getAge())
console.log(teacher.section)
console.log(teacher.grade)