module.exports = function() {
  let module = {};

  module.part1 = (input) => {
    return input.filter((line) => {
      const matches = line.match(/^(\d+)-(\d+) ([a-z]): ([a-z]+)$/i);
      const policy = {
        minChar: matches[1],
        maxChar: matches[2],
        char: matches[3],
      };
      const password = matches[4];
      return module.part1ValidPassword(password, policy);
    }).length;
  }

  module.part1ValidPassword = (password, policy) => {
    const characterInstances = module.countCharacterInstances(password, policy.char);
    return characterInstances >= policy.minChar && characterInstances <= policy.maxChar
  };

  module.countCharacterInstances = (str, c) => {
    let instances = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === c) {
        instances++;
      }
    }

    return instances;
  };

  module.part2 = (input) => {
    return input.filter((line) => {
      const matches = line.match(/^(\d+)-(\d+) ([a-z]): ([a-z]+)$/i);
      const policy = {
        pos1: matches[1],
        pos2: matches[2],
        char: matches[3],
      };
      const password = matches[4];
      return module.part2ValidPassword(password, policy);
    }).length;
  };

  module.part2ValidPassword = (password, policy) => {
    return password.charAt(policy.pos1 - 1) === policy.char ^ password.charAt(policy.pos2 - 1) === policy.char;
  }

  return module;
}();
