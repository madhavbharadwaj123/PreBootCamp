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
let n = parseInt(userInput[0].split(" "))
console.log(n+" "+n*2+" "+n*3)
  //end-here
});