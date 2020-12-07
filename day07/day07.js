const lib = require('./day07.library.js');
const readline = require('readline');
const fs = require('fs');
let input = [];

const readInterface = readline.createInterface({
  input: fs.createReadStream('./day07/day07.input'),
  /*output: process.stdout,*/
  console: false,
});


readInterface.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  console.log(lib.shinyGoldBagCount(input));
  //console.log('canContainShinyGoldBag: ' + lib.shinyGoldBagCount(input));
});
