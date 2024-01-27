// Understanding 'this' keyword 

// Value of 'this' differs, lets check the value of 'this' 


//In global scope

/*

Understanding global scoped and local scoped 

anything you write inside { } becomes local scoped and outside becomes global scoped. Example:-

var a = 10; // this is global scoped

function abcd(){
    var a = 11; // this is local scoped of abcd
}

*/

console.log(this); //gives window

