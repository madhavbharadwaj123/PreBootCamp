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
s = ""
let n = parseFloat(userInput[0].split(" "))
x = Math.round(n)
  
if(n%2 == 0)
{
  console.log("Even")
}
 else
 {
   console.log("Odd")
 }
//end-here
});