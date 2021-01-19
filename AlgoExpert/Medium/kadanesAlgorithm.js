function kadanesAlgorithm(array) {
  let sums = [];
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const prev = sums[i - 1] || 0;
    const current = array[i];

    sums[i] = Math.max(current, current + prev);
    max = Math.max(max, sums[i]);
  }

  return max;
}

console.log(
  kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
);
