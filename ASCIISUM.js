//A Simple Hello World


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	let currsum = 0
    for(let i=0;i<data.length;i++)
    {
      currsum = currsum+data.charCodeAt(i)
    }
  console.log(currsum)
});