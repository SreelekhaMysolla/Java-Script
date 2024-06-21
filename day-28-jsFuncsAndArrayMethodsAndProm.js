//3. Arrow Function
var sum = (a,b) =>{
    console.log(a+b);
}
sum(4,5);


//no need of{} for a single line of function
var sum = (a,b) => console.log(a+b);
sum(5,5);


//Array Methodology/Method
var array = [1, 2, 3, 4, 5];


//1.map
// call back functions
array = array.map((item, index) => {return console.log(item*2, " => ", index)});


//2.Filter
//const newArray2 = array.filter((data) => data<=3);
const newArray2 = array.filter((data) => {
    return data;
});
console.log("Filter =>",newArray2)


//3.Find
var newArray3 = array.find((data)=> data<=3);
console.log("Find =>", newArray3)


//4.Reduce
var totalsum = array.reduce((accumulation, curreValuent)=>{
    return accumation * currentValue;
},0)
console.log(totalsum);



var Flipkart = [ 
    {
        price: 200,
        quantity:2
    },

   {
      price: 400,
      quantity:1
   },
   {
    price: 600,
    quantity:4
   },
   {   
    price: 800,
    quantity:6
    },
    {
    price:1000,
    quantity:2
    },
]; 

var totalcost = Filpkart.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue.price * currentValue.quantity;
    },0);

    console.log(totalcost);


    //promises
    //it is an object that returns a value that we hope to recieve in the future but not immediatley
    // yt playlist
    // 2:20sec buffer 2:55sec
         //1.Pending state (need to watch)
         //2.fulfill (playing)
         //3.reject (not able to play)

         //syntax: var my promise = new promise(()=>{})
         //syntax: var my promise = new pomise(fuction(){})


         var mypromise = new promise(()=>{
             resolve("Success");
                setTimeout(function(){
                    resolve("Success");
                },7000)
             reject("Error occured");
         });

         mypromise
        .then((data)=>{console.log(data)})
        .catch((error)=> {console.log(error)});

        console.log("This is at the last");

        


