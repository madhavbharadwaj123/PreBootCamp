const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

  function getParent(child)
  {
    return Math.floor(child/2)
  }
//start-here
 function ClassifyHeaps(a)
  {
    if(CheckMinHeap(a) == true)
    {
      return 'MIN'
    }
    else if(CheckMaxHeap(a) == true)
    {
      return 'MAX'
    }
    else
    {
      return 'NONE'
    }
  }
  function CheckMinHeap(a)
  {
    for(let i=a.length-1;i>0;i--)
    {
      if(a[getParent(i)] > a[i])
      {
        return false
      }
    }
    return true
  }
  function CheckMaxHeap(a)
  {
    for(let i=a.length-1;i>=0;i--)
    {
      if(a[getParent(i)] < a[i])
      {
        return false
      }
    }
    return true
  }
 let a = parseInt(userInput[0].split(" "));
 let b = userInput[1].split(" ");
 let z = []
 let i
 for(i=0;i<a;i++)
 {
   z.push(parseInt(b[i]))
 }
 console.log(ClassifyHeaps(z))
//end-here
});
