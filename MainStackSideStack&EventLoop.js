// Understanding about What is main stack?, What is side stack?, What is event loop?

// when we write sync code it goes to main stack and when we write async code it goes to side stack, Example:

console.log(1); //Sync code
console.log(2); //Sync code
setTimeout(function(){
    console.log(3); //Async code
}, 2000);
console.log(4); //Sync code
setTimeout(function(){
    console.log(5); //Async code
}, 0); //Even it is 0 sec, it runs after sync code. 

//First Sync code runs which are at main stack, then Async code runs which are at side stack.

//Event loop brings/call Async codes from side stack to main stack, after main stack gets clear.
