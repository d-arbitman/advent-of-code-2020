const readline = require('readline');
const fs = require('fs');
let input = [];

const readInterface = readline.createInterface({
  input: fs.createReadStream('./dayXX.input'),
  /*output: process.stdout,*/
  console: false,
});


readInterface.on('line', (line) => {
  input.push(line);
}).on('close', () => {

});
