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
let n = parseFloat(userInput[0].split(" "))
if(n<0)
{
  console.log('Error')
}
else{  
console.log(((2*22*n)/7).toFixed(2))
}
  //end-here
});