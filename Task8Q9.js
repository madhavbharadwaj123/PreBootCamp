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
  let min = f[0].length
  let minname = f[0]
  for(let i=1;i<f[i].length;i++)
  {
    if(f[i].length < min)
    {
      min = f[i].length
      minname = f[i]
    }
  }
  return minname
}


console.log(dataHandling(friends))
