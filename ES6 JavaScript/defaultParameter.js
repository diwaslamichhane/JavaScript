// parameter ma value dinu lai default parameter vanxa. eg:-

function abcd(para){
    console.log(para);
}
abcd("hello"); //maile arguments deko xu so, hello display hunxa



//what if maile abcd(); matrai lekhey vaney: undefined display hunxa

//so, default parameter lai use garney:-
function abcd(para="hello"){
    console.log(para);
    }
    abcd(); //hello display hunxa
