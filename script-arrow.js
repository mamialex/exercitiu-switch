hello = function() {
    return "Hello world!";
}

console.log(hello())

newHello = (var1, var2) => {
    return "Hello again " + var1 + " and " + var2;
}

console.log(newHello("Ale", "Mia"))


var myArray = [1,2,3]

myForEachFunction = function(item,index){
    console.log(item)
}

myArray.forEach(myForEachFunction);

myArray.forEach((item,index) => {
    console.log(item);
});