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
 console.log(a+b)

//end-here
});