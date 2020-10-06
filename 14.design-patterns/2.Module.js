//private method
var Module = (function(){

    var privateMethod = function(){

    }

    var  publicMethod = function(){
        return "This is a public method"
    }
    
    return {
        Uma : publicMethod
    }

})();

console.log(Module.Uma())

// Anonymous Object Literal

var Module = (function(){

    var privateMethod = function(){

    }
    
    return {
        punlicMethod1 : function(){

        },

        punlicMethod2 : function(){
            
        },

        punlicMethod3 : function(){
            
        }
    }

})();

console.log(Module)

// Locally Scoped Object Literal
var Module = (function(){

    var privateMethod = function(){

    }

    var myObject = {};

    myObject.punlicMethod1 = function(){

    }

    myObject.punlicMethod2 = function(){
        
    }

    myObject.punlicMethod3 = function(){
        
    }
    
    return myObject;

})();

console.log(Module)

//Stacked Locally Scoped Object Literal

var Module = (function(){

    var privateMethod = function(){

    }

    var myObject = {

       punlicMethod1:function(){

        },
    
       punlicMethod2:function(){
            
        },
    
       punlicMethod3:function(){
            
        }
    };

    return myObject;

})();

console.log(Module)