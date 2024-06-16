// Arrow Function

// 1) Basic fat arrow function
var a = ()=>{
    console.log("Hello World");
};

// 2)fat arrow function with one parameter

// for one parameter
var b = para1=>{
    console.log("The value of para1 is", para1);
};
b(10);

//for more than 1 parameter

var c = (para2, para3)=>{
    console.log("The value of para2 is", para2);
    console.log("The value of para3 is", para3);
};
c(10, 11);