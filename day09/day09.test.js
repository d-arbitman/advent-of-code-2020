const lib = require('./day09.library.js');

test('day 09, part 1 exampleInput', () => {
  const exampleInput = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576
`.split("\n").map(x => parseInt(x));

  expect(lib.part1(exampleInput, 5)).toBe(127);
});

test('day 09, part 2 example input', () => {
  const exampleInput = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576
`.split("\n").map(x => parseInt(x));
  let part1 = lib.part1(exampleInput, 5);
  let index = exampleInput.indexOf(part1);

  expect(lib.part2(exampleInput, index)).toBe(62);
});

test('day 09, default return', () => {
  const exampleInput = `1
3
5
`.split("\n").map(x => parseInt(x));

  expect(lib.part1(exampleInput, 150)).toBe(null);
  expect(lib.part2(exampleInput, 0)).toBe(null);
});
