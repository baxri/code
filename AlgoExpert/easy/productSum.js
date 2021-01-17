function productSum(array) {
  return productSumHelper(array, 1);
}

function productSumHelper(array, depth) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const newDepth = depth + 1;
      sum += newDepth * productSumHelper(array[i], newDepth);
    } else {
      sum += array[i];
    }
  }

  return sum;
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
