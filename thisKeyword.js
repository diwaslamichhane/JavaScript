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

// In function scope 

function abcd(){
    console.log(this); //gives window
}
abcd()

// In method scope 
// Function which is inside a object is called method

var obj = {
    name: "Diwas",
    thisIsMethod: function(){
        console.log(this); //gives object
    }
}
obj.thisIsMethod(); 

// NOTE: In any method 'this' keyword always refers to parent Object.   i.e. in upper method case this gave object which refers to its parent object, that is var obj 

// In event listner 

var button = document.querySelector("button");
button.addEventListener("click", function (){
    console.log(this);  //gives whatever infront of .addEventListner. In this case it is button.
});

/*
Conclusion

In global scope: gives window
In function scope: gives window
In method scope: gives object
In event listner: gives whatever infront of .addEventListner
*/
