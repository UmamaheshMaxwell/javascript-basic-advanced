var error = new Error();
console.log(error)

var error = new Error("This is new Error");
console.log(error)

try {
    throw new Error("This is an error from try block");
}
catch (ex) {
    console.log(ex)
}