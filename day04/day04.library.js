module.exports = function() {
  let module = {};

  module.part1 = (input) => {
    const passports = input.split("\n\n");
    let validPassports = 0;

    for (let i = 0; i < passports.length; i++) {
      const passport = module.stringToPassport(passports[i]);

      if (module.validatePassportPart1(passport)) {
        validPassports++;
      }
    }

    return validPassports;
  };

  module.validatePassportPart1 = (passport) => {
    return module.validateFields(passport, ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']);
  };

  module.validatePassportPart2 = (passport = {
    byr: '',
    iyr: '',
    eyr: '',
    hgt: '',
    hcl: '',
    ecl: '',
    pid: ''
  }) => {
    if (!module.validateYear(passport.byr, 1920, 2002)) {
      return false;
    }

    if (!module.validateYear(passport.iyr, 2010, 2020)) {
      return false;
    }

    if (!module.validateYear(passport.eyr, 2020, 2030)) {
      return false;
    }

    if (!module.validateHeight(passport.hgt)) {
      return false;
    }

    if (!passport.hcl || !passport.hcl.match(/^#[0-9a-f]{6}$/i)) {
      return false;
    }

    if (!module.validateEyeColor(passport.ecl)) {
      return false;
    }

    return (passport.pid && passport.pid.match(/^\d{9}$/));
  };

  module.validateEyeColor = (color) => {
    const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

    return eyeColors.includes(color);
  };

  module.validateHeight = (height) => {
    const matches = (height || '').match(/(\d+)([a-z]{2})/i);

    if (matches && matches.length === 3) {
      const numericHeight = matches[1];
      const units = matches[2];

      return (numericHeight && units &&
        ((units === 'in' && module.validateRange(numericHeight, 59, 76)) ||
          (units === 'cm' && module.validateRange(numericHeight, 150, 193))));
    }

    return false;
  };

  module.validateRange = (num, min, max) => {
    return !(parseInt(num) < min || parseInt(num) > max);
  };

  module.validateYear = (year, min, max) => {
    return (year && year.length === 4 && module.validateRange(year, min, max));
  };

  module.stringToPassport = (str) => {
    let passport = {};
    const fields = str.split(/\s+/);

    for (let i = 0; i < fields.length; i++) {
      const [name, value] = fields[i].split(":");
      passport[name] = value;
    }

    return passport;
  };

  module.validateFields = (passport, fields) => {
    for (let i = 0; i < fields.length; i++) {
      if (!passport[fields[i]]) {
        return false;
      }
    }

    return true;
  };

  module.stringToPassport = (str) => {
    let passport = {};
    const fields = str.split("\n").join(" ").split(" ");

    for (let i = 0; i < fields.length; i++) {
      const [name, value] = fields[i].split(":");
      passport[name] = value;
    }

    return passport;
  };

  module.part2 = (input) => {
    const passports = input.split("\n\n");
    let validPassports = 0;

    for (let i = 0; i < passports.length; i++) {
      const passport = module.stringToPassport(passports[i]);

      if (module.validatePassportPart2(passport)) {
        validPassports++;
      }
    }

    return validPassports;
  };

  return module;
}();
