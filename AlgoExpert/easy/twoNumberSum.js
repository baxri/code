function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === targetSum) {
      return [array[left], array[right]];
    } else if (sum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
