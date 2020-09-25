var os= ["windows", "Mac", "Linux"]

var output1 = os.forEach(function(item){
                return item;
            });

console.log(output1)

var output2 = os.map(function(item){
    return "Item : " + item
});

console.log(output2)