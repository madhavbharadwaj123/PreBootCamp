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
function getNextMin(arr,i)
{
    let index
    let currmin = parseInt(arr[i])
    
    for(index = i+1;index < arr.length; index++)
    {
         if(currmin > parseInt(arr[index]))
         {
             return arr[index]
         }
    }
    return -1
}
n = parseInt(userInput[0].split(' '))
arr = userInput[1].split(' ')
let res = []
for(let i=0;i<arr.length;i++)
{
    res.push(getNextMin(arr,i))
}
console.log(res.join(' '))
//end-here
});
