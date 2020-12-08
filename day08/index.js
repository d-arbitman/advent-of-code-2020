const lib = require('./day08.library.js');
const readline = require('readline');
const fs = require('fs');
let input = "";

const readInterface = readline.createInterface({
  input: fs.createReadStream('./day08/day08.input'),
  /*output: process.stdout,*/
  console: false,
});


readInterface.on('line', (line) => {
  input += line + "\n";
}).on('close', () => {
  console.log("part 1: " + lib.part1(input));
  console.log("part 2: " + lib.part2(input));
});
