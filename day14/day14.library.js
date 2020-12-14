module.exports = (() => {
  let module = {};

  module.part1 = (input) => {
    const instructions = module.parse(input);
    let mask = '';
    let memory = {};

    for (let i = 0; i < instructions.length; i++) {
      if (instructions[i].instr === 'setMask') {
        mask = instructions[i].mask.split('');
      } else if (instructions[i].instr === 'setMem') {
        memory[instructions[i].location] = module.applyBitmask(instructions[i].value, mask);
      }
    }

    return module.calculateSum(memory, 2);
  };

  module.calculateSum = (memory, radix) => {
    let sum = 0;

    Object.keys(memory).forEach(key => {
      sum += parseInt(memory[key], radix);
    });

    return sum;
  }

  module.part2 = (input) => {
    const instructions = module.parse(input);
    let mask = '';
    let memory = {};

    for (let i = 0; i < instructions.length; i++) {
      if (instructions[i].instr === 'setMask') {
        mask = instructions[i].mask.split('');
      } else if (instructions[i].instr === 'setMem') {
        module.applyBitmaskPart2(instructions[i].location, mask)
            .forEach(key => {
              let decimal = parseInt(key.join(''), 2);
              memory[decimal] = instructions[i].value;
            });
      }
    }

    return module.calculateSum(memory, 10);
  };

  module.applyBitmask = (num, mask) => {
    let binary = parseInt(num).toString(2).padStart(36, '0').split('');

    for (let j = 0; j < 36; j++) {
      if (mask[j] !== 'X') {
        binary[j] = mask[j];
      }
    }

    return binary.join('');
  };

  module.applyBitmaskPart2 = (num, mask) => {
    let keyInBinary = parseInt(num).toString(2).padStart(36, '0').split('');

    for (let i = 0; i < 36; i++) {
      if (mask[i] === 'X' || mask[i] === '1') {
        keyInBinary[i] = mask[i];
      }
    }

    let check = 1;
    let memoryLocations = [keyInBinary.map(d => d)];

    while (check !== 0) {
      check = 0;
      memoryLocations.forEach((key, index) => {
        let pos = key.indexOf('X');
        if (pos !== -1) {
          check++;

          key[pos] = '0';
          memoryLocations.push(key.map(e => e));
          key[pos] = '1';
          memoryLocations.push(key.map(e => e));

          memoryLocations.splice(index, 1);
        }
      });
    }

    return memoryLocations;
  };

  module.parse = (input) => {
    let parsed = [];

    for (let i = 0; i < input.length; i++) {
      let matches = input[i].match(/^\s*mem\[(\d+)\]\s*=\s*(\d+)\s*$/i);

      if (matches) {
        parsed.push({
          instr: 'setMem',
          location: matches[1],
          value: matches[2],
        });
      } else {
        matches = input[i].match(/^\s*mask\s*=\s*([X01]+)\s*$/i);

        if (matches) {
          parsed.push({
            instr: 'setMask',
            mask: matches[1],
          });
        }
      }
    }

    return parsed;
  };

  return module;
})();
