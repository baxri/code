function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let left = num;
  let sum = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }

  let max = sum;

  while (left < arr.length) {
    sum = sum - arr[left - num] + arr[left];

    if (sum > max) {
      max = sum;
    }

    left++;
  }

  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([-2, 3], 3));
