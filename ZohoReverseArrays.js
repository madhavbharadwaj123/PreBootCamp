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


 let a = userInput[0].split(" ");
 n = parseInt(a[0])
 x = userInput[1].split(" ");
 console.log(x.reverse().join(' '))
//end-here
});