let scores = [40,50,60,70]
function returnScores(scores)
{
  let t = []
  for(let i=0;i<scores.length;i++)
  {
    if(scores[i] > 50 && scores[i] <60)
    {
      t.push(8)
     }
     else if(scores[i] >60)
     {
      t.push(10)
     }
     else
     {
     t.push(0)
     }
  }
  let sum = 0
  for(let i=0;i<t.length;i++)
  {
  sum = sum+t[i]
  }
  let avg = sum/t.length
  return avg
}
console.log(returnScores(scores))
