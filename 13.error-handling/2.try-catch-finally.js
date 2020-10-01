// With exception
try {
    var output = getMessage('Hello', 'Uma');
}
 catch(error) {
     console.log(error)
 }
 finally {
     // dbconnection.close()
     // Network connections
     // filestream
     console.log('This will execute always');
 }

 // Without any error
 try {
    var output = "Hello"
    console.log(output)
}
 catch(error) {
     console.log(error)
 }
 finally {
     // dbconnection.close()
     // Network connections
     // filestream
     console.log('This will execute always');
 }