const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

 function getOpposite(brace)
  {
    if(brace == '}')
      return '{'
    if(brace == ')')
      return '('
    if(brace == ']')
      return '['
  }
  function checkForClosingBrace(brace)
  {
    if(brace == ']' || brace == ')' || brace == '}')
    {
      return true
    }
    return false
  }
  stack = []
  let ind = 0
  for(let i=0;i<userInput[0].length;i++)
  {
    if(checkForClosingBrace(userInput[0][i]))
    {
      if(stack.length == 0)
      {
        ind = 1
        console.log('no')
        break
      }
      else
      {
        if(stack[stack.length-1] == getOpposite(userInput[0][i]))
        {
          stack.pop()
        }
      }
    }
    else
      {
        stack.push(userInput[0][i])
      }
  }
  if(stack.length == 0)
  {
    console.log('yes')
  }
  else if(ind == 0)
  {
    console.log('no')
  }
//end-here
});
