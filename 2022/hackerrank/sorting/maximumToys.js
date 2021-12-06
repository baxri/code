function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);

  let count = 0;

  for (const price of prices) {
    if (k >= price) {
      k -= price;
      count++;
    } else {
      break;
    }
  }

  return count;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
