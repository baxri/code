function binarySearch(arr, search, left = 0, right = arr.length - 1) {
  arr.sort((a, b) => a - b);

  if (left > right) {
    return null;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === search) {
    return mid;
  } else if (search > arr[mid]) {
    return binarySearch(arr, search, mid + 1, right);
  } else if (search < arr[mid]) {
    return binarySearch(arr, search, left, mid);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
