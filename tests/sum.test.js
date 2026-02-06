const sumItUpIncorrectly = require("../src/sum.js");

test('adds two numbers', () => {
	expect(sumItUpIncorrectly(2, 3)).toBe(5);
});