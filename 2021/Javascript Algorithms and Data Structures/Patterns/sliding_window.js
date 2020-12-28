function maxSubarraySum(arr, n) {
  if (n > arr.length) {
    n = arr.length;
  }

  let left = 0;
  let right = left + n - 1;

  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i <= right; i++) {
    sum += arr[i];
    maxSum += arr[i];
  }

  left++;
  right++;

  while (right < arr.length) {
    sum = sum + arr[right] - arr[left - 1];

    if (sum > maxSum) {
      maxSum = sum;
    }

    left++;
    right++;
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
