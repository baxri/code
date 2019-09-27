function minimumSwaps(arr) {
  let swapCount = 0;

  for (let i = 0; i < arr.length; i++) {
    swapCount += swapChain(arr, i);
  }

  return swapCount;
}

function swapChain(arr, i) {
  let swapCount = 0;

  let current = arr[i];
  let target = arr[current - 1];

  while (current != target) {
    arr[i] = target;
    arr[current - 1] = current;

    swapCount++;

    current = arr[i];
    tatget = arr[current - 1];
  }

  return swapCount;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
console.log(minimumSwaps([4, 3, 1, 2]));
console.log(minimumSwaps([2, 3, 4, 1, 5]));
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));

function minimumSwapsBruthForce(arr) {
  let minSwapCount = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let minimum = arr[i];
    let minimumIndex = null;

    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] < minimum) {
        minimum = arr[j];
        minimumIndex = j;
      }
    }

    if (minimumIndex !== null) {
      minSwapCount++;
      swap(arr, i, minimumIndex);
    }
  }

  return minSwapCount;
}
