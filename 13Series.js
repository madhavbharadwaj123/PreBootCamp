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
if(n<0)
{
  console.log('Error')
}
else{  
console.log(n*n)
}
  //end-here
});