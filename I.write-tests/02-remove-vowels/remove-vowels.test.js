var removeVowel = require("./remove-vowels");
test("remove vowels from word", function() {
  // Arrange
  const name = "samuel";
  const expectation = "sml";
  // Act
  const result = removeVowel(name);
  // Assert
  expect(result).toEqual(expectation);
});
