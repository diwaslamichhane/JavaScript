// How to copy reference value ?

// ans:- using spread operator 
var a = [1, 2, 3, 4, 5, 6, 7, 8];
var b = [...a]; // [...] 3dots

// Now when we change the value of b, the value of a will remain same 

// we can do it in object also:
var obj = {
    name: "Diwas",
    age: 20
};

var cpyObj = {...obj};
