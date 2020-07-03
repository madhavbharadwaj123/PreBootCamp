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
  let t = []
  for(let i=0;i<f.length;i++)
  {
    if(f[i][0] == 'M')
    {
      t.push(f[i])
    }
  }
  return t
}


console.log(dataHandling(friends).join(' '))
