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
s = ""
let n = parseInt(userInput[0].split(""))
if (n == 0)
{
  console.log("Null")
}
  
 else
 {
	for(let i=0;i<n;i++)
	{
  s = s+(9*(i+1));
      if(i!= n-1)
      {
        s = s+" ";
      }
	}
   console.log(s)
 }
//end-here
});