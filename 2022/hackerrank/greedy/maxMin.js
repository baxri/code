function maxMin(k, arr) {
  let min = null;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - k + 1; i++) {
    const left = arr[i];
    const right = arr[i + k - 1];

    const abs = right - left;

    if (abs < min || min === null) {
      min = abs;
    }
  }

  return min;
}

console.log(maxMin(2, [1, 4, 7, 2]));
console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30]));
