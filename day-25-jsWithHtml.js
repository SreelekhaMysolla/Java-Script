// Strings Operations
var data = "hey everyone Hope you all Are DOING Gud";
console.log("data: ",data);

console.log("lower case: ",data.toLowerCase());
console.log("upper case: ",data.toUpperCase());

//slice
//data = data.slice(2,6);
var newData = "Sreelekha"
console.log("slice: ",newData.slice(1,3));//(index,index-1)&& index always starts from 0

//length
console.log("length: ",data.length);

//replace
updatedData=data.replace("hey", "hi")//(what string should be replaced", "what is the value which u want over there")
console.log("replace: ",updatedData);
console.log("originalData:",data);

//includes

console.log("includes: ",data.includes("you"))//if present in data shows true
console.log("includes: ",data.includes("you1"))//if you1 is not in data it shows false

//string to int
var var1 = "2345";
console.log(var1);
console.log(parseInt(var1));

 var varInvalidNum = "2345qwe";
 console.log(parseInt(varInvalidNum));

//int to string
//var var2 = 242216;
//console.log(var2);
//console.log(var2.toString());
//console.log(var2.toLocaleString());

//split Operation
var demo = "hey good morning all";
console.log(demo.split(" "));



//objects
var obj1 = {
    name: "Sreelekha",
    age: 19
};
//console.log(obj1.name);
//console.log(object.values(obj1));
//console.log(obj1);


//obj1.newkey = "designation";
//obj1.value = SE;
//console.log(obj1);

//update the obj1
obj1.name = "sree";
obj1.age =20
console.log(obj1);

//arrays(map, find, filter, reduce)
//promises
// async & await
//Try $ catch
//obj with multiple concepts
//function (normal/named func, anonymous fuc, arrow fuc)
//classes
//conditional stmts $ loops







