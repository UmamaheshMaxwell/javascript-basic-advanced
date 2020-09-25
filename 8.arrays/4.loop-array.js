var students = ["Surekha", "Shantanu", "Sunitha", "Pradeep", "XYZ"];

for(var i =0; i < students.length; i++){
    console.log(i, students[i])
}

students.forEach(function(item){
    console.log(item)
})

students.forEach(function(item, index){
    console.log(index, item)
})


for(var i =0; i < students.length; i++){
    if(students[i] ==="XYZ"){
        delete students[i]
    } else {
       console.log(i, students[i])
    }
}

students.forEach(function(item, index){
    if(item ==="XYZ"){
        delete item
    } else {
        console.log(index, item)
    }
})

Map


