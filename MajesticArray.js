const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

    n = parseInt(userInput[0])
    x = userInput[1].split(' ')
    if(parseInt(x[0])+parseInt(x[1])+parseInt(x[2]) == parseInt(x[x.length-1])+parseInt(x[x.length-2])+parseInt(x[x.length-3]))
    {
        console.log('1')
    }
    else
    {
        console.log('0')
    }
//end-here
});
