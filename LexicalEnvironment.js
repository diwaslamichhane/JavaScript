// Understanding Lexical Environment

/*
    Lexical environment is kind of a chart which tells us what we can access inside a execution context.

    example:-

    function abcd(){
        var i=10;
        function efgh(){
        var j=5;
    }

    Here, execution context abcd() can get access to i and efgh() but cannot get ascess to j because var is function scoped.

    In conclusion lexical environment tells what can we ascess inside a execution context.
}
*/
