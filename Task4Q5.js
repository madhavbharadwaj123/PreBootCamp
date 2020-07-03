var friends = [
“Gabbar”,
“Rajinikanth”,
“Mass”,
“Spiderman”,
“Jeff”,
“ET”
];



function contains(s,c)
{
  for(let i=0;i<s.length;i++)
  {
    if(s[i] == c)
    {
      return true
    }
  }
  return false
}


function dataHandling(friends)
{
  t = []
  for(let i=0;i<friends.length;i++)
  {
    if(contains(friends[i],'a'))
    {
      t.push(friends[i])
    }
  }
  return t
}

console.log(dataHandling(friends).join(','))
