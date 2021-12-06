function minimumAbsoluteDifference(arr) {
  arr.sort((a, b) => a - b);
  let min = null;
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];
    if (min === null || min > diff) {
      min = diff;
    }
  }
  return min;
}

console.log(minimumAbsoluteDifference([3, -7, 0]));
console.log(minimumAbsoluteDifference([-2, 4, 2]));
