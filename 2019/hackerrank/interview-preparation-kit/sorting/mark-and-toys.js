function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);

  let numberOfToys = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    k -= price;

    if (k > 0) {
      numberOfToys++;
    }
  }

  return numberOfToys;
}

console.log(maximumToys([1, 2, 3, 4], 7));
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
