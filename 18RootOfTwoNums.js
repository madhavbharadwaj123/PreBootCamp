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
	let a = parseFloat(userInput[0].split(" ")[0])
    let b = parseFloat(userInput[0].split(" ")[1])
  	let c = parseFloat(userInput[0].split(" ")[2])
    num = Math.sqrt(b*b - 4*a*c)
    den = a*2
  	console.log(((-b+num)/den).toFixed(2))
  	console.log(((-b-num)/den).toFixed(2))
  //end-here
});