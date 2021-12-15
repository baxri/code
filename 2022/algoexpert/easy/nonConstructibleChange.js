function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);

  let change = 0;

  for (let coin of coins) {
    if (change + 1 < coin) return change + 1;
    change += coin;
  }

  return change + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
console.log(nonConstructibleChange([1, 1, 1, 1, 1]));
