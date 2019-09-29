function maxMin(k, arr) {
  arr.sort((a, b) => a - b);

  let minValue = null;

  for (let i = 0; i <= arr.length - k; i++) {
    let subarr = arr.slice(i, i + k);

    let min = subarr[0];
    let max = subarr[subarr.length - 1];

    let diference = Math.abs(max - min);

    if (diference < minValue || minValue === null) {
      minValue = diference;
    }
  }

  return minValue;
}

console.log(maxMin(2, [1, 4, 7, 2]));
