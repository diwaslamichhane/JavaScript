// Understanding Pure Functions

// Pure functions are the kind of function which always gives the same output for the multiple same inputs
// Example

function abcd(a, b){
    return a+b;
}
var ans1 = abcd(1, 2);
var ans2 = abcd(1, 2);
var ans3 = abcd(1, 2);
