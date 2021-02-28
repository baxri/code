function twoSum(nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const arr = hash[nums[i]] || [];
    arr.push(i);
    hash[nums[i]] = arr;
  }

  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [hash[nums[left]].pop(), hash[nums[right]].pop()];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
