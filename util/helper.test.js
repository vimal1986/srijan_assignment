const { getFizzBuzzPattern } = require("./helper");

describe('getFizzBuzzPattern Test', () => {
    it('getFizzBuzzPattern', () => {
        expect(getFizzBuzzPattern(5)).toBe([1,
            2,
            "Fizz",
            4,
            "Buzz"]);
      })
});