//A Simple Hello World



// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  data = data.split(" ")
  console.log(parseFloat(data[0])* parseFloat(data[2]) + parseFloat(data[1]))
});