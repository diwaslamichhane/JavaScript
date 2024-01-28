// Understanding apply

// It is same as call but use apply while calling function and if there is parameter the we make a array to pass arguments

// Example

function efgh(a, b, c){
    console.log(this);
}
let object = {
    level: "Bachelors"
}

abcd.apply(object, [1, 2, 3]); 
