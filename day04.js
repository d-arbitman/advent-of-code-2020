const readline = require('readline');
const fs = require('fs')
let input = "";

const readInterface = readline.createInterface({
    input: fs.createReadStream('./day04.input'),
    /*output: process.stdout,*/
    console: false
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
  if (!validateYear(passport.byr, 1920, 2002)) {
    return false;
  }

  if (!validateYear(passport.iyr, 2010, 2020)) {
    return false;
  }

  if (!validateYear(passport.eyr, 2020, 2030)) {
    return false;
  }

  if (!validateHeight(passport.hgt)) {
    return false;
  }

  if (!passport.hcl || !passport.hcl.match(/^\#[0-9a-f]{6}$/i)) {
    return false;
  }

  if (!validateEyeColor(passport.ecl)) {
    return false;
  }

  if (!passport.pid || !passport.pid.match(/^\d{9}$/)) {
    return false;
  }

  return true;
}

const validateEyeColor = (color) => {
  const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

  return eyeColors.includes(color);
}

const validateHeight = (height) => {
  const matches = (height || '').match(/(\d+)([a-z]{2})/i);
  if (!matches || matches.length !== 3 || (matches[2] === 'in' && !validateRange(matches[1], 59, 76)) || (matches[2] === 'cm' && !validateRange(matches[1], 150, 193))) {
    return false;
  }

  return true;
}

const validateRange = (num, min, max) => {
  if (parseInt(num) < min || parseInt(num) > max) {
    return false;
  }

  return true;
}

const validateYear = (year, min, max) => {
  if (!year || year.length !== 4 || !validateRange(year, min, max)) {
    return false;
  }

  return true;
}

const stringToPassport = (str) => {
  let passport = {};
  const fields = str.split("\n").join(" ").split(" ");
  for (let i = 0; i < fields.length; i++) {
    const [name, value] = fields[i].split(":");
    passport[name] = value;
  }

  return passport;
}
