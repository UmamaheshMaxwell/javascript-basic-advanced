var Module = (function(){

    var privateMethod = function(name){
        return name
    }

    var  addMethod = function(){
        return "This is a public method"
    }

    var  subtractMethod = function(){
        return "This is a public method"
    }

    var  multiplyMethod = function(){
        return "This is a public method"
    }
    var  divideMethod = function(){
        return "This is a public method"
    }

    var displayName = function(name){
        return privateMethod(name)
    }
    
    return {
        Add: addMethod,
        subtract: subtractMethod,
        Multiply : multiplyMethod,
        Divide: divideMethod,
        Display: displayName
    }

})();

console.log(Module.Display('Uma'))