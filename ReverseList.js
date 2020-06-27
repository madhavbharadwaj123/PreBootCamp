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
  x = userInput[1].split(' ')
  console.log(x.reverse().join('->'))
//end-here
});
