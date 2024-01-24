// Understanding New Keyword

// basically new keyword creates a blank object for constructor function which is getting called just after new key word 

function abcd(){
    this.age = 20;
}

new abcd()

// new creates a blank object 
{

}

// now we call function abcd after new 
// inside function, in place of this suppose that blank object
{
    age: 20;
}
