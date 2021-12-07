function getMinimumCost(k, c) {
  c.sort((a, b) => b - a);

  let cost = 0;
  let prev = 0;

  for (let i = 0; i < c.length; i++) {
    cost += (prev + 1) * c[i];

    if ((i + 1) % k === 0) {
      prev++;
    }
  }

  return cost;
}

console.log(getMinimumCost(3, [1, 2, 3, 4]));
console.log(getMinimumCost(3, [2, 5, 6]));
console.log(getMinimumCost(2, [2, 5, 6]));
console.log(getMinimumCost(3, [1, 3, 5, 7, 9]));
