const largerThenTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  const numbers = [4, 10, 32, 9, 21];
  const expection = [32, 21];
  const result = largerThenTen(numbers);
  expect(result).toEqual(expection);
});
// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
