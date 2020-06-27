const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 let x = userInput[1].split(' ')
 let count = 0
 for(let i=0;i<x.length;i++)
 {
     if(x[i] == 'P')
     count++
 }
 if(count/x.length*100 <= 25)
 {  
     console.log('Blacklisted')
 }
 else
 {
     console.log('Not Blacklisted')
 }
});
