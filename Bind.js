//Understanding bind

function efgh(){
    console.log(this);
}
let object = {
    level: "Bachelors"
}

let bindedFnc = abcd.bind(object);
bindedFnc();

// It is also same as call and apply but in bind we have to call bind function then it will print
