const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


 let a = parseInt(userInput[0].split(" "));
 let prev = 1000
 let next = 1000
 let i = 0
 let t;
  let sum=0;
  if(a == 1)
  {
    console.log(next)
  }
  else{
    sum = 1000
 for(i=0;i<a-1;i++)
 {
    t = next
 	next = next + prev
    prev = t
   sum = sum+next
 }
  }
  console.log(sum)
    //end-here
});
