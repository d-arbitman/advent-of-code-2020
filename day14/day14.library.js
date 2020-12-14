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

    let sum = 0;
    Object.keys(memory).forEach(key => {
      let mem = memory[key].join('');
      sum += parseInt(mem, 2);
    });

    return sum;
  };

  module.part2 = (input) => {
    const instructions = module.parse(input);
    let mask = '';
    let memory = {};
    let sum = 0;

    for (let i = 0; i < instructions.length; i++) {
      if (instructions[i].instr === 'setMask') {
        mask = instructions[i].mask.split('');
      } else if (instructions[i].instr === 'setMem') {
        memory = module.applyBitmaskPart2(instructions[i].location, mask, instructions[i].value, memory);
      }
    }

    Object.keys(memory).forEach(key => {
      sum += parseInt(memory[key]);
    });

    return sum;
  };

  module.applyBitmask = (num, mask) => {
    let binary = parseInt(num).toString(2).padStart(36, '0').split('');

    for (let j = 0; j < 36; j++) {
      if (mask[j] !== 'X') {
        binary[j] = mask[j];
      }
    }

    return binary;
  };

  module.applyBitmaskPart2 = (num, mask, val, memory) => {
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

    memoryLocations.forEach(key => {
      let decimal = parseInt(key.join(''), 2);
      memory[decimal] = val;
    });

    return memory;
  };

  module.parse = (input) => {
    let parsed = [];

    for (let i = 0; i < input.length; i++) {
      let matches;
      if (matches = input[i].match(/^mem\[(\d+)\] = (\d+)$/)) {
        parsed.push({
          instr: 'setMem',
          location: matches[1],
          value: matches[2],
        });
      } else if (matches = input[i].match(/^mask = ([X01]+)$/i)) {
        parsed.push({
          instr: 'setMask',
          mask: matches[1],
        });
      }
    }

    return parsed;
  };

  return module;
})();
