const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let x = parseInt(userInput[0].split(' ')[1])
let y = userInput[1].split(' ')
let arr = []
let found = 0
for(i=0;i<y.length;i++)
{
    arr.push(parseInt(y[i]))
}
arr = arr.sort()
let k = 0
for(i=0;i<arr.length;i++)
{
    if(k<x)
    {
        if(arr.length > i+1)
        {
            if(arr[i] != arr[i+1])
            {
                k++
            }
        }
    }
    else if(k == x)
    {
        console.log(arr[i])
        found = 1
        break
    }
}
if(k == x-1 && arr[arr.length-1] != arr[arr.length-2])
{
    console.log(arr[arr.length-1])
    found = 1
}
if(found == 0)
{
    console.log(-1)
}
//end-here
});
