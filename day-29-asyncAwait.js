// promises

var myPromise = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve("Success");
    }, 9000);

    setTimeout(function(){
        reject("Error occured");
    }, 7000)
});

         myPromise
         .then((data)=>{
             data = "hey "+ data;
             return data;
         })
        .then((data)=>{
            console.log(data)})
        .catch((error)=> {
            console.log("catch block ", error)
        });

        console.log("This is at the last");

        //Async and Await In JS
       
        setTimeout(function(){
            console.log("1");
        } ,3000);
        //a->b $1000.00
        //validating pwd => 3sec
        console.log("2");
        //transfer $1000.00

        var mypromise = new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve("done with promise")
            } ,3000);
            setTimeout(function () {
                reject("err");
            }, 3000);
        });

         var getOurPromise = async() => {
            try{
            let getOurPromiseResult = await myPromise;
            console.log(getOurPromiseResult);
            }catch(error){
                console.log(error);
            }
        };
          //return getOurPromiseResult

          getOurPromise();
            



        



