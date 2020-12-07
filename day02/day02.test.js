const lib = require('./day02.library.js');

test('day XX, part 1 exampleInput', () => {
  const exampleInput = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`.split("\n");

  expect(lib.part1(exampleInput)).toBe(2);
});

test('day XX, part 2 example input', () => {
  const exampleInput = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`.split("\n");

  expect(lib.part2(exampleInput)).toBe(1);
})
