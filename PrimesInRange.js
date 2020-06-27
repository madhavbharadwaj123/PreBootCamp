const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

function isPrime(number)
{
    let i = 0;
    for(i=2;i<=parseInt(number/2);i++)
    {
        if(number%i == 0)
        {
            return false
        }
    }
    return true
}
let n = parseInt(userInput[0].split(' '))
z = []
for(i = 2;i<n;i++)
{
    if(isPrime(i))
    {
        z.push(i)
    }
}
console.log(z.join(' '))
//end-here
});
