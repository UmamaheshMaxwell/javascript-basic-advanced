console.log(this) // this points to global Object

function a(){
    console.log(this)  // this keyword is tsill going to point to global object
}

a()

var b = function(){
    console.log(this) // This still ponints to global object
}

b()

function sample(){
    console.log(this)
    this.newVariable = 'Johngalt'
}

sample()

console.log(newVariable)
newVariable ="Dagnay Traggart"
console.log(this)

 // When writing method on the object `this` becomes that object
var person = {
    name: 'Ravi',
    log : function(){   
        var self = this;

          self.name = "Kumar"                 
          console.log(self)     
          
          var setName = function(newName){
              self.name = newName
              console.log(self)
          }
          setName('Jagrav');

          
    }
}

person.log();