const items = [
  { name: "Rice", price: 2.07, quantity: 3 },
  { name: "Meat", price: 4.07, quantity: 2 },
];

// 1.
function calculateSubtotal(arrOfItems) {
  return arrOfItems.reduce((accum, curr) => {
    return curr.price * curr.quantity + accum;
  }, 0);
}

// 2.
function applyDiscount(subTotal, discount) {
  return subTotal - (discount / 100) * subTotal;
}

// 3.
function calculateTax(discountedTotal, taxRate) {
  return discountedTotal + (taxRate / 100) * discountedTotal;
}

// 4.
function calculateTotal(items, discount, tax) {
  let total = calculateSubtotal(items);
  let discountedTotal = applyDiscount(total, discount);
  let taxedTotal = calculateTax(discountedTotal, tax);
  return taxedTotal;
}

// 5.
console.log(calculateTotal(items, 5, 0.5));
console.log(calculateTotal(items, 2, 0.5));
