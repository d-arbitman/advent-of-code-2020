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
  let answerCount = 0;

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < 26; j++) {
      if (answers[i].indexOf(String.fromCharCode('a'.charCodeAt(0) + j)) !== -1) {
        answerCount++;
      }
    }
  }

  console.log('answerCount: ' + answerCount);
});
