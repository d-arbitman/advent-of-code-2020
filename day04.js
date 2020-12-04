const readline = require('readline');
const fs = require('fs');
let input = "";

const readInterface = readline.createInterface({
  input: fs.createReadStream('./day04.input'),
  /*output: process.stdout,*/
  console: false,
});


readInterface.on('line', (line) => {
  input += line + "\n";
}).on('close', () => {
  const passports = input.split("\n\n");
  let validPassports = 0;

  for (let i = 0; i < passports.length; i++) {
    const passport = stringToPassport(passports[i]);

    if (validatePassport(passport)) {
      validPassports++;
    }
  }

  console.log("validPassports: " + validPassports);
});

const validatePassport = (passport) => {
  return validateFields(passport, ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']);
};

const validateFields = (passport, fields) => {

  for (let i = 0; i < fields.length; i++) {
    if (!passport[fields[i]]) {
      return false;
    }
  }

  return true;
};

const stringToPassport = (str) => {
  let passport = {};
  const fields = str.split("\n").join(" ").split(" ");
  for (let i = 0; i < fields.length; i++) {
    const [name, value] = fields[i].split(":");
    passport[name] = value;
  }

  return passport;
};
