function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let total = 0;

  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  let currentTotal = total;

  for (let i = num; i < arr.length; i++) {
    currentTotal = currentTotal + arr[i] - arr[i - num];

    if (currentTotal > total) {
      total = currentTotal;
    }
  }

  return total;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([2, 3], 3));
