// Understanding IIFE in JS

// IIFE - Immediate Invoked Function Expression 

// It is created to create a private variable.
// Any kind of variable inside iife automatically becomes private variable.

// syntax of iife 

(function(){

})
()

// Example of iife 

var private = (function(){
    var privateValue = 10; // This becomes private variable
})
() //calling iife

//How to access iife ?

var private = (function(){
    var privateValue = 10; // This becomes private variable
    
    return{
        getter:function(){ //getter to access private variable
            console.log(privateValue); 
            //write private.getter(); in console to access
        },

        setter: function(value){ //setter to modify private variable
            privateValue = value; 
            //write private.setter(15); in console to set 15 in place of 10 (modify).
        }
    }
})
()
