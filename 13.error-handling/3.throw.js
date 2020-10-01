// throw error
try {
    throw "Error Occured";
}
catch (error){
    console.log(error);
}

// throw with errorinfo

try {
    throw {
        Id : 100,
        message: 'This ID is duplicated'
    }
}
catch (ex) {
    console.log(ex)
}


function getErrorTypes(){
    try{
        // if (foo) {  // SyntaxError
        //     // the closing curly brace is missing
        

        // function foo() {
        //     bar++;  // ReferenceError
        //   }

        // var foo = {};
        // foo.bar(); // TypeError

        decodeURIComponent("%"); // URIError
    }
    catch (ex){
        if (ex.name === 'ReferenceError') {
            console.log('Inside reference Error')
            console.log(ex.name)
            console.log(ex.message)
        }
        else if(ex.name === 'SyntaxError'){
            console.log('Inside syntax Error')
            console.log(ex.name)
            console.log(ex.message)
        }
        else if(ex.name === 'TypeError'){
            console.log('Inside type Error')
            console.log(ex.name)
            console.log(ex.message)
        }
        else if(ex.name ==="URIError"){
            console.log('Inside URI Error')
            console.log(ex.name)
            console.log(ex.message)
        }
        else {
            console.log(ex)
        }
    }
}

getErrorTypes();