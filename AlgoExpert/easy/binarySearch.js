function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  if (right < left) return -1;

  const middle = Math.floor((left + right) / 2);
  const possiblematch = array[middle];

  if (possiblematch === target) {
    return middle;
  } else if (possiblematch < target) {
    return binarySearchHelper(array, target, middle + 1, right);
  } else {
    return binarySearchHelper(array, target, left, middle - 1);
  }
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
