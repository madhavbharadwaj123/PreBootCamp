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
let len =0 ;
let i = 0;
 for (i =0 ; i<userInput[0].length;i++)
 {
   if(userInput[0][i] != " ")
   {
     len++;
   }
 }
  console.log(len)
  //end-here
});