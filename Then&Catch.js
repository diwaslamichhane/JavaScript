// Then and Catch are the methos to handle the result of promises

// .then -> resolved (This function will pass when the Promise is fulfilled)

// .catch -> reject (This function will pass when Promise is not fulfilled)

let promise = new Promise((resolve, reject) =>{
    console.log("This is a promise.");
    // resolve("Sucess");
    // reject("Error Occured");
});

promise.then(()=>{
    console.log("This function will pass if the promise is fulfilled!");
})
promise.catch(()=>{
    console.log("This function will pass if the promise is not fulfilled!");
})
