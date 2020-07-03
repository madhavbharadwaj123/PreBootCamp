var friends = [
“Gabbar”,
“Rajinikanth”,
“Mass”,
“Spiderman”,
“Jeff”,
“ET”
];


function dataHandling(f)
{
  if(f.length == 0)
  {
    console.log('error')
    return 
  }
  let max = f[0].length
  let maxname = f[0]
  for(let i=1;i<f[i].length;i++)
  {
    if(f[i].length > max)
    {
      max = f[i].length
      maxname = f[i]
    }
  }
  return maxname
}


console.log(dataHandling(friends))
