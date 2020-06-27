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
 m = (a[1])
 
 x = userInput[1].split(" ")
  let ind = 0
 for(let i =0 ;i<x.length;i++)
 {
   if(m === x[i])
   {
     ind = 1
     console.log(i)
   }
     
 }
  if(ind == 0)
  {
    console.log(-1)
  }
//end-here
});