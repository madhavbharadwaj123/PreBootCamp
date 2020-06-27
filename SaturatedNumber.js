const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

  
 let a = (userInput[0].split(" "));
 let b = {}
 for(let i=0;i<a.length;a++)
 {
     if(b[a[i]] === undefined)
     {
         b[a[i]] == 1
     }
 }
 if(b.length > 2 )
 {
     console.log("Unsaturated")
 }
 else
 {
     console.log("Saturated")
 }
//end-here
});
