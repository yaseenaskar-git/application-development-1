function calculateTotal(price, quantity) {
  return price * quantity;
}

discount = 20;

function applyDiscount(total) {
  if (total > 100) {
    return total - discount;
// This is a ReferenceError in line 7, and the root cause is that "discount" is not defined and has no reference in the code.
  }
  return total;
}

function processOrder(price, quantity) {
  const total = calculateTotal(price, quantity);
  const discounted = applyDiscount(total);
  return discounted.toFixed(2);
}

 

module.exports = {
  calculateTotal,
  applyDiscount,
  processOrder
};
 

console.log(processOrder(25, 5));