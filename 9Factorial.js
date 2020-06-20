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
s = 1
let n = parseInt(userInput[0].split(" "))
let i = 1;
while(i<=n)
{
  s = s*i;
  i++;
}
  
console.log(s)
//end-here
});