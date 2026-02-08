const { processOrder } = require("./order");

test("applies discount when total is greater than 100", () => {
  // Arrange
  const price = 25;
  const quantity = 5;
  const expected = (105).toFixed(2);

  // Act
  const result = processOrder(price, quantity);

  // Assert
  expect(result).toBe(expected);
});

test("does not apply discount when total is less than 100", () => {
  // Arrange
  const price = 10;
  const quantity = 5;
  const expected = (50).toFixed(2);

  // Act
  const result = processOrder(price, quantity);

  // Assert
  expect(result).toBe(expected);
});

test("edge case when total equal exactly 100", () => {
  // Arrange
  const price = 25;
  const quantity = 4;
  const expected = (100).toFixed(2);

  // Act
  const result = processOrder(price, quantity);

  // Assert
  expect(result).toBe(expected);
});