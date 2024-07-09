// ... 
//yo 3dots lai nai spread or rest vaninxa but yesle different different kaam garxa different context ma. 

//spread (...) 
//spread le chai kunai elements lai copy garera rakhne kaam garxa. eg:

var a = [1,2,3,4,5];
// aaba maile b vanne variable ma a ko elements lai copy garnu paryo vane ma ... spread use garxu:
var b = [...a];

//rest (...)
// rest le chai kunai extra elements or use navako or uvreko elements lai collect garxa. eg:

function abcd(a, b, c, d, ...e){ // ...e chai rest ho, yesle arguments ma uvreko 6,7,8 lai array ma collect garxa. yedi ...e narakheko vaye a,b,c,d ko matrai value aauthyo ani baki sabai ignore hunthyo.
    console.log(a, b, c, d, e);
}
abcd(1,2,3,4,6,7,8);
