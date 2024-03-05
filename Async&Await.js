// Understanding async And await 

// When we write async code we don't know when the result will come so we use promise and to get result we use then, to avoid then, we use async and await. It will make code simple and easy to understand.

async function abcd(){
    let rawData = await fetch(`https://randomuser.me/api/`);
    let ans = await rawData.json();
    console.log(ans);
}
abcd();
