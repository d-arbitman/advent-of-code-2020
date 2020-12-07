module.exports = function() {
  let module = {};

  module.part1 = (input, lookingFor) => {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        const first = parseInt(input[i]);
        const second = parseInt(input[j]);

        if (first + second === lookingFor) {
          return(first * second);
        }
      }
    }

    return 0;
  };

  module.part2 = (input, lookingFor) => {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        for (let k = 0; k < input.length; k++) {
          const [first, second, third] = [parseInt(input[i]), parseInt(input[j]), parseInt(input[k])];

          if (first + second + third === lookingFor) {
            return first * second * third;
          }
        }
      }
    }

    return 0;
  };

  return module;
}();
