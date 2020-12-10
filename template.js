const lib = require('./dayXX.library.js');
const readline = require('readline');
const fs = require('fs');
let input = [];

const readInterface = readline.createInterface({
  input: fs.createReadStream('./dayvXX/dayXX.input'),
  /*output: process.stdout,*/
  console: false,
});


readInterface.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  console.log("part 1: " + lib.part2(input));
  console.log("part 2: ", lib.part2(input));
});
