evenOrOdd(3)
//for Odd should return true

function evenOrOdd(value){
    return value %2 ==0;
}

console.log(evenOrOdd(3))

extnExtractor("resume.docx") // docx
extnExtractor("bangalore.txt") // txt
extnExtractor("notepad") // false

function extnExtractor(fileName){
    // if(fileName.split('.').length>1){
    //     return fileName.split('.')[1];
    // }
    // else {
    //     return false
    // }


    // ternary operator syntax
    // condition ? true : false
    return fileName.split('.').length>1 ? fileName.split('.')[1] : false
}
console.log("sample.html".split('.'))
console.log(extnExtractor("resume.docx"));
console.log(extnExtractor("bangalore.txt"));
console.log(extnExtractor("notepad"))

arraySum([1,2,3,4,5])// 15


// function arraySum(data){
//     var sum =0;
//     for(var i=0; i<data.length; i++){
//         if(typeof data[i] == 'number'){
//             sum = sum + data[i] 
//         }
//         if(Array.isArray(data[i])){
//             for(var j=0; j < data[i].length; j++){
//                 if(typeof data[i][j]== 'number'){
//                     sum = sum + data[i][j]
//                 }
//             }
//         }
//     }
//     return sum;
// }

//Method1 - Sunitha
function arraySum(data){
    var sum =0;
    for(var i=0; i<data.length; i++){
        if(typeof data[i] == 'number'){
            sum = sum + data[i] 
        }
        if(Array.isArray(data[i])){
            sum = sum + arraySum(data[i])
        }

        if(typeof data[i] == 'object'){
            for(var prop in data[i])
               sum=sum+arraySum(data[i][prop])    
        }

    }
    return sum;
}

// Method2 - Surekha
function arraySum(data){
    var sum =0;
    for(var i=0; i<data.length; i++){
        if(typeof data[i] === "object"){
            if(Array.isArray(data[i])){
                sum = sum + arraySum(data[i])
            }
            else {     
                sum = sum + arraySum(Object.values(data[i]))
            }
        }
        if(typeof data[i] == 'number'){
            sum = sum + data[i] 
        }
    }
    return sum;
}

console.log(arraySum([1,2,3,4,5])) //15
console.log(arraySum([1,2,3,4,5,6,7,8,9,10])) //55
console.log(arraySum([1,2,3,'uma',4,5])) //15
console.log(arraySum([1,2,3,'uma',[4, 'uma',5]])) //15
console.log(arraySum([1,2,3,'uma',{'a': 'uma'},4,5])) //15
console.log(arraySum([1,2,3,'uma',{'a': 'uma', values: [1,2,[3,4],5, 'uma']},[4,5]])) //18

//fix this logic so that sum becomes 18
console.log(arraySum([1,2,[[3],4],5])) // 15


/*
    Console methods
    %s - String
    %i - Number
    %o - Object
    %f - float
*/

console.table([
    {name:'Uma', age:38},
    {name:'Swathi', age:38},
    {name:'Jagrav', age:7}
])

console.log("Hello %o your ID is %s", {name: "Uma"}, 12345)
console.log("Hello %o your ID is %o", 12345, {name: "Uma"})

function reverserStr(string){  // uoy era woh amU olleH
    return string
            .split('')
            .reverse()
            .join('')
  }
console.log(reverserStr('Hello Uma how are you'));

var message = "Hello Uma how are you" // olleH amU woh era uoy

console.log(

    message.split('')
           .reverse()
           .join('')
           .split(' ')
           .reverse()
           .join(' ')
)





