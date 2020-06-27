//A Simple Hello World


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  s1 = ''
  shouldCheckLast = true
  for(let i=0;i<data.length-1;)
  {
    let k = 0;
    if(data[i] ==data[i+1])
    {
      for(k=1;k<data.length && data[i] == data[i+k];)
          {
            k++
          }
      i = i+k
      if(i == data.length-1 && data[data.length-1] != data[data.length-2])
      {
        shouldCheckLast = false
        s1 = s1+ data[data.length-1]
      }
    }  
    else 
    {
      s1 = s1+ data[i]
      i++
    }
  }
  if(shouldCheckLast)
    s1 = s1+ data[data.length-1]
  console.log(s1)
});