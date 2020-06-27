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
 let i = 0
 let dict = {}
 let newarr = []
 for(i=0;i<a;i++)
 {
   if(typeof dict[b[i]] === "undefined")
   {
     dict[b[i]] = 1;
     newarr.push(parseInt([b[i]]))
   }
   else
   {
     dict[parseInt(b[i])]++;
   }
 }
 let l = []
 for(var key in dict)
 {
   if(dict[key]>1)
   {
   	l.push(parseInt(key))
   }
 }
  if(l.length == 0)
  {
    console.log(-1)
  }
  else{
  console.log(l.join(' '))
  }
    //end-here
});
