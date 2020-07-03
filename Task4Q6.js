var friends = [
“Gabbar”,
“Rajinikanth”,
“Mass”,
“Spiderman”,
“Jeff”,
“ET”
];


function dataHandling(friends)
{
  let sum = 0
  for(let i=0;i< friends.length;i++)
  {
    sum = sum+friends[i].length
  }
  return sum/friends.length
}


console.log(dataHandling(friends))
