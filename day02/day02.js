const readline = require('readline');
const fs = require('fs');
let input = [];

const readInterface = readline.createInterface({
  input: fs.createReadStream('./day02.input'),
  /*output: process.stdout,*/
  console: false,
});


readInterface.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const validPasswords = input.filter((line) => {
    const matches = line.match(/^(\d+)-(\d+) ([a-z]): ([a-z]+)$/i);
    const policy = {
      minChar: matches[1],
      maxChar: matches[2],
      char: matches[3],
    };
    const password = matches[4];
    return isPasswordValid(password, policy);
  });

  console.log("validPasswords: " + validPasswords.length);
});

const isPasswordValid = (password, policy) => {
  const characterInstances = countCharacterInstances(password, policy.char);
  return characterInstances >= policy.minChar && characterInstances <= policy.maxChar;
};

const countCharacterInstances = (str, c) => {
  let instances = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === c) {
      instances++;
    }
  }

  return instances;
};
