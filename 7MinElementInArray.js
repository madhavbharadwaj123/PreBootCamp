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
 let b = userInput[1].split(" ");
 let i = 0
 let min = parseInt(b[i])
 for(i=1;i<a;i++)
 {
   if(min> parseInt(b[i]))
   {
     min = b[i]
   }
 }
 console.log(min)
    //end-here
});
