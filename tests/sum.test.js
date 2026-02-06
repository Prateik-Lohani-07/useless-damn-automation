const sumItUp = require("../src/sum.js");

test('adds two numbers', () => {
	expect(sumItUp(2, 3)).toBe(5);
});