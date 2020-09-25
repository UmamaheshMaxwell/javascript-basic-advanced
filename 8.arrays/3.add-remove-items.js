var technologies = ["Angular", "Node"]

//push - will add the elements at the end of the array
technologies.push("Express")
technologies.push("MongoDB")
technologies.push("remove")
technologies.push("XYZ")


// unshift - will add the elements at the begining of the array
technologies.unshift("JavaScript");
technologies.unshift("CSS3")
technologies.unshift("HTML")
technologies.unshift("ABC")

// pop - will remove elements at the end of the array
technologies.pop()

//shift - will remove elements at the begining
technologies.shift()

delete technologies[7]
console.log(technologies)