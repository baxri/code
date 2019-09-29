function getMinimumCost(k, c) {
  c = c.sort((a, b) => b - a);

  let customerHistory = {};

  let currentCutomer = 1;
  let sum = 0;

  for (let i = 0; i < c.length; i++) {
    let price = c[i];
    let totalPrice = ((customerHistory[currentCutomer] || 0) + 1) * price;

    sum += totalPrice;

    customerHistory[currentCutomer] =
      (customerHistory[currentCutomer] || 0) + 1;

    if (currentCutomer % k == 0) {
      currentCutomer = 1;
    } else {
      currentCutomer++;
    }
  }

  return sum;
}

console.log(getMinimumCost(3, [1, 2, 3, 4]));
