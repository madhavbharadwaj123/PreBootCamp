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
function sort(arr,d)
{
  let i =0;
  let j =0;
  let t;
  for(i=0;i<arr.length;i++)
  {
    for(j = 0;j<arr.length-i-1;j++)
    {
      if(d[arr[j]]>d[arr[j+1]] || d[arr[j]] == d[arr[j+1]] && arr[j] > arr[j+1])
      {
        t = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = t
      }
    }
  }
  return arr
}

 let a = parseInt(userInput[0].split(" "));
 let b = userInput[1].split(" ");
 let x = []
 let currsum = 0
 for(let i=0;i<a;i++)
 {
   currsum = currsum + parseInt(b[i])
   if(currsum%2 == 0)
   {
   	x.push(currsum)
   }
   else
   {
     x.push(parseInt(b[i]))
   }
 }
  console.log(x.join(' '))
//end-here
});
