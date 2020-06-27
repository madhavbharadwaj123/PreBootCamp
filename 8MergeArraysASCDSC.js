const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


 let n = parseInt(userInput[0].split(" ")[0]);
 let m = parseInt(userInput[0].split(" ")[1]);
 let a1 = userInput[1].split(" ");
 let a2 = userInput[2].split(" ");
 let a3 = []
  let i = 0
function sortASC(a)
  {
    let i,j
    let t
    for(i=0;i<a.length-1;i++)
    {
      for(j=0;j<a.length-i-1;j++)
      {
        if(parseInt(a[j])>parseInt(a[j+1]))
        {
          t = a[j]
          a[j] = a[j+1]
          a[j+1] = t
        }
      }
    }
    return a
  }
  
  a1 = sortASC(a1)
  a2 = sortASC(a2)
  
 for(i=0;i<n;i++)
 {
    a3.push(a1[i])
 }
 for(i=0;i<m;i++)
 {
   a3.push(a2[m-i-1])
 }
  console.log(a3.join(' '))
    //end-here
});
