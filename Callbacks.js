// - It is a function.
// - It works after async code completion

// Example:

setTimeout(function(){},10000); //code runs after 10 seconds

// Another Example:

function sum(a, b){
  console.log(a+b);
}
function calculator(a, b, sum){
  sum(a, b)
}
calculator(1,2,sum) //sum is a callback function which is inside a parameter 
