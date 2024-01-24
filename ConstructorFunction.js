// Understanding Constructor Function 

// A function where 'this' is added and when we call the function 'new' keyword is added on the function, such type of function is constructor function

// EXAMPLE

function biscuitMaker(){
    this.height = 14;
    this.width = 8;
    this.color = "Brown";
    this.taste = "Sweet";
}

var Biscuit1 = new biscuitMaker();

// such type of function is used when we need to create multiple elements having same feature 
