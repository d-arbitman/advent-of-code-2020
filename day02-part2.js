const readline = require('readline');
const fs = require('fs')
let input = [];

const readInterface = readline.createInterface({
    input: fs.createReadStream('./day02.input'),
    /*output: process.stdout,*/
    console: false
});


readInterface.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const validPasswords = input.filter((line) => {
    const matches = line.match(/^(\d+)-(\d+) ([a-z]): ([a-z]+)$/i);
    const policy = {
      pos1: matches[1],
      pos2: matches[2],
      char: matches[3]
    };
    const password = matches[4];
    return isPasswordValid(password, policy);
  });

  console.log("validPasswords: " + validPasswords.length);
});

const isPasswordValid = (password, policy) => {
  console.log("password: " + password + ", char: " + policy.char + ", pos1: " + policy.pos1 + " " + password.charAt(policy.pos1 - 1) + ", pos2: " + policy.pos2 + " " + password.charAt(policy.pos2 - 1));
  return password.charAt(policy.pos1 - 1) === policy.char ^ password.charAt(policy.pos2 - 1) === policy.char;
}
