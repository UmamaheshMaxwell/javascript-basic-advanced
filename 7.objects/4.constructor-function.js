function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName
    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName
    }
}

var stuObjWithOutNew = Student('Uma', 'Mahesh');
console.log(stuObjWithOutNew)

var stuObj = new Student('Uma', 'Mahesh');

console.log(stuObj)

console.log(stuObj.firstName)

console.log(stuObj.lastName)

console.log(stuObj.getFullName())