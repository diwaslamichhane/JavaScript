// Understanding Call 

// As we know when we use 'this' keyword in function it gives window, if we need an object in place of window, then we call our function using .call()

// For Example:

function abcd(){
    console.log(this);
}
let obj = {
    age: 20
}

abcd.call(obj) //we call our function using .call() and write obj so that obj comes in place of this.

// If we have to use arguments and parameters

function efgh(a, b, c){
    console.log(this);
}
let object = {
    level: "Bachelors"
}

abcd.call(object, 1, 2, 3); //we write arguments just after object
