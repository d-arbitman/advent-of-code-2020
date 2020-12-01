const readline = require('readline');
const fs = require('fs')
let input = [];

const readInterface = readline.createInterface({
    input: fs.createReadStream('./day1.input'),
    /*output: process.stdout,*/
    console: false
});


readInterface.on('line', (line) => {
  input.push(parseInt(line));
}).on('close', () => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i] + input[j] === 2020) {
        console.log(input[i] * input[j]);
        process.exit(0);
      }
      /*console.log("nums: " + input[i] + ", " + input[j] + ", " + ());*/
    }
  }
});
