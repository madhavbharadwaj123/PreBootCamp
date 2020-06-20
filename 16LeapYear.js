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
if(n%4 == 0)
{
  if(n%100 != 0)
  {
    console.log("Y")
  }
  else
  {
    console.log("N")
  }
}
else
{
  console.log("N")
}
  //end-here
});