function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const sum = array[i] + array[left] + array[right];

      if (sum === targetSum) {
        result.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (sum > targetSum) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 12));
