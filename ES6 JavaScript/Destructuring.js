//suppose euta array xa, ra tyo array ko elements lai variable ma store garnu xa vane hami destructuring garxau:

var arr = [1, 2, 3, 4];
var [a, b, c, d] = arr; //aaba yesle var a=1, b=2, c=3, d=4 variables banauxa

//suppose euta object xa, ra tyo object ko property lai variable ma store garnu xa vane hami destructuring garxau:

var obj = {
    name: "Diwas",
    age: 21
}

var {name, age} = obj; //aaba yesle var name="Diwas" banauxa, var age = 21 banauxa.
