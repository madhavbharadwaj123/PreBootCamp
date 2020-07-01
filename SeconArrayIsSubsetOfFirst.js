const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let A = []
let B = []
let x = userInput[1].split(' ')
let y = userInput[2].split(' ')
let found = 0
for(let i=0;i<x.length;i++)
{
    B.push(parseInt(x[i]))
}
for(let i=0;i<y.length;i++)
{
    A.push(parseInt(y[i]))
}
if(A.length > B.length)
{
    found = 1
    console.log('first case')
    console.log('no')
}
else
{
    let hash = {}
    for(let i=0;i<B.length;i++)
    {
        if(hash[B[i]] === undefined)
        {
            hash[B[i]] = 1
        }
        else
        {
            hash[B[i]]++
        }
    }

    for(let i=0;i<A.length;i++)
    {
        if(hash[A[i]] === undefined)
        {
            console.log('no')
            found = 1
            break;
        }
        else if(hash[A[i]] == 0)
        {
            console.log('no')
            found = 1
            break;
        }
        else
        {
            hash[A[i]]--
        }
        
    }
    if(found == 0)
    {
        console.log('yes')
    }
    
}

//end-here
});
