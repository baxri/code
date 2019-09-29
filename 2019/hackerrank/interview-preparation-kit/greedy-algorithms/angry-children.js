function maxMin(k, arr) {
  arr.sort((a, b) => a - b);

  let minValue = null;

  for (let i = 0; i <= arr.length - k; i++) {
    let min = arr[i];
    let max = arr[i + k - 1];

    let diference = Math.abs(max - min);

    if (diference < minValue || minValue === null) {
      minValue = diference;
    }
  }

  return minValue;
}

console.log(maxMin(2, [1, 4, 7, 2]));
