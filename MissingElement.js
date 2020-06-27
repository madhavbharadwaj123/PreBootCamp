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
let n = parseInt(userInput[0].split(' '))
let x = userInput[1].split(' ')
let sum = 0
for(let i=0;i<n-1;i++)
{
    sum = sum + parseInt(x[i])
}
let missingElement = (n*(n+1))/2 - sum
console.log(missingElement)
});
