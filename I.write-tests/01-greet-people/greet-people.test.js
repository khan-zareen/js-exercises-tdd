const greetPeople = require("./greet-people");
test("print list of names prefixed with Hello", function() {
  // Arrange
  const poeple = ["Irina", "Ashleigh", "Etza"];
  const expectation = "Hello Irina, Ashleigh, Etza";

  // Act
  const result = greetPeople(poeple);

  // Assert
  expect(result).toEqual(expectation);
});
