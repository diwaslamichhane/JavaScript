// Understanding Callback Hell 

// Stack of nested callback function one after another in callback forming a pyramid structure is called callback hell.

// Example:

function getData(dataID, getNextData){
    setTimeout(function(){
        console.log("Data", dataID);
        if (getNextData){
            getNextData();
        }
    },2000);
}

//Callback Hell
getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4)});
        });
    });

    // This is difficult to understand and manage, this is called callback hell
