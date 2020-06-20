const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here


 let a = parseInt(userInput[0].split(" "));
 let b = parseInt(userInput[1].split(" "));
 let c = parseInt(userInput[2].split(" "));
 if(a>b && a>c)
 {
   	console.log(a)
 }
 else if(b>c)
 {
   	console.log(b)
 }
 else
 {
   	console.log(c)
 }
//end-here
});
