function pairs(k, arr) {
  arr.sort((a, b) => a - b);

  let numberOfPairs = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let search = current + k;

    let founded = binarySearch(arr, search, i + 1);

    if (founded !== null) {
      numberOfPairs++;
    }
  }
  return numberOfPairs;
}

console.log(pairs(2, [1, 5, 3, 4, 2]));


function binarySearch(arr, search, left = 0, right = arr.length - 1) {
  if (left > right) {
    return null;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === search) {
    return arr[mid];
  } else if (search > arr[mid]) {
    return binarySearch(arr, search, mid + 1, right);
  } else if (search < arr[mid]) {
    return binarySearch(arr, search, left, mid);
  }
}
