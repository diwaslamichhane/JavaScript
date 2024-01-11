// *reference = [] () {}

// Example of reference 

var a = [1, 2, 3, 4];
var a = b; 
// this means that, a has its own value and b has a's value
// and if we change b, then a will change. because b has a's value
b.pop();
console.log(b);
console.log(a);
