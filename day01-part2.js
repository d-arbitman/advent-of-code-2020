const readline = require('readline');
const fs = require('fs')
let input = [];

const readInterface = readline.createInterface({
    input: fs.createReadStream('./day01.input'),
    /*output: process.stdout,*/
    console: false
});


readInterface.on('line', (line) => {
  input.push(parseInt(line));
}).on('close', () => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
        if (input[i] + input[j] + input[k] === 2020) {
          console.log(input[i] * input[j] * input[k]);
          process.exit(0);
        }
      }
    }
  }
});
