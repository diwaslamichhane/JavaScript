// Understanding Impure Function 

// It is a kind of function which gives different output for same input
// Example

function abcd(value){
    return Math.random()*value;
}
var ans1 = abcd(2);
var ans2 = abcd(3);
