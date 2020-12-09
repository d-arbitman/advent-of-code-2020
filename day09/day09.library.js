module.exports = function() {
  let module = {};

  module.part1 = (input, preambleLength) => {
    for (let i = preambleLength; i < input.length; i++) {
      if (!module.isNumberSumFromPreamble(input, preambleLength, i)) {
        return input[i];
      }
    }
  };

  module.part2 = (input, index) => {
    for (let i = 0; i < input.length; i++) {
      for (let j = 1; j < input.length; j++) {
        if (input.slice(i, j).reduce((a, b) => a + b, 0) === input[index]) {
          let nums = input.slice(i, j);
          nums.sort();
          return nums[0] + nums[nums.length - 1];
        }
      }
    }
    return 0;
  };

  module.isNumberSumFromPreamble = (input, preambleLength, index) => {
    for (let i = index - preambleLength; i < index; i++) {
      for (let j = index - preambleLength; j < index; j++) {
        if (i === j) {
          continue;
        } else if (input[i] + input[j] === input[index]) {
          return true;
        }
      }
    }

    return false;
  }

  return module;
}();
