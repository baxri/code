function countSwaps(arr) {
  const n = arr.length;
  let numSwaps = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        numSwaps++;
        swap(arr, j, j + 1);
      }
    }
  }

  console.log(`Array is sorted in ${numSwaps} swaps.`);
  console.log(`First Element: ${arr[0]}`);
  console.log(`Last Element: ${arr[arr.length - 1]}`);
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

countSwaps([2, 5, 1, 3]);
