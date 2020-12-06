const readline = require('readline');
const fs = require('fs');
let input = "";

const readInterface = readline.createInterface({
  input: fs.createReadStream('./day06.input'),
  /*output: process.stdout,*/
  console: false,
});


readInterface.on('line', (line) => {
  input += line + "\n";
}).on('close', () => {
  const answers = input.split("\n\n");
  let total = 0;
  let allAnsweredYes = 0;

  for (const group of answers) {
    const uniques = new Set([...group.replace(/\n/g, '')]);
    total += uniques.size;

    allAnsweredYes += [...uniques].filter(char => group.split('\n').filter(x => x).every(form => form.includes(char))).length
  }

  console.log("allAnsweredYes: " + allAnsweredYes);
});
