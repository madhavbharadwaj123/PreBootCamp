const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

x = userInput[0].split(' ')
n = parseInt(x[0])
k = (x[1])
arr = userInput[1].split(' ')
z = []
for(let i = 0;i<arr.length;i++)
{
    if(arr[i] != k)
    {
        z.push(arr[i])
    }
}

if(z.length == 0)
{
    console.log('empty')
}
else
{
console.log(z.join(' '))
}
//end-here
});
