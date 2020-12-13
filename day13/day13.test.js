const lib = require('./day13.library.js');

test('day 13, part 1 exampleInput', () => {
  const exampleInput = `939
7,13,x,x,59,x,31,19`.split("\n");

  expect(lib.part1(exampleInput)).toBe(295);
});

test('day 13, part 2 example input', () => {
  const exampleInput = `939
7,13,x,x,59,x,31,19`.split("\n");

  expect(lib.part2(exampleInput)).toBe(1068781n);
});
