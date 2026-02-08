console.info("Program Started")

function calculateTotal(price, quantity) {
  console.info("calculated total:", price*quantity);  
  return price * quantity;
}

discount = 20;

function applyDiscount(total) {
  if (total > 100) {
    console.warn("discount applied")
    return total - discount
  }
  console.info("discount not applied")
  return total;
}

function processOrder(price, quantity) {
  console.info("Price:", price, "Quantity:", quantity)
  const total = calculateTotal(price, quantity);
  const discounted = applyDiscount(total);
  return discounted.toFixed(2);
}

module.exports = {
  calculateTotal,
  applyDiscount,
  processOrder
};

console.log("Final result:", processOrder(25, 5));
