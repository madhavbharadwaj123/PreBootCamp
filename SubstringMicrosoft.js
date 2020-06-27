const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
function checkSubstring(x,y,i)
{
    for(let k=0;k<y.length;k++)
    {
        if(x[i+k] != y[k])
        {
            return false;
        }
    }
    return true;
}
//start-here
let result = false
x = userInput[0]
y = userInput[1]
for(let i = 0;i<x.length-y.length;i++)
{
    if(x[i] == y[0])
    {
       result = checkSubstring(x,y,i)
       if(result)
       {
           console.log(i)
           break;
       }
    }
}
if(result == false)
{
    console.log(-1)
}
});
