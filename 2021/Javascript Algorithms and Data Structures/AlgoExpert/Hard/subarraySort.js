function subarraySort(array) {
  let unSortedMax = -Infinity;
  let unSortedMin = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (!isSorted(array, i)) {
      unSortedMax = Math.max(unSortedMax, array[i]);
      unSortedMin = Math.min(unSortedMin, array[i]);
    }
  }

  if (unSortedMin === Infinity) {
    return [-1, -1];
  }

  let left = 0;
  let right = array.length - 1;

  while (array[left] <= unSortedMin) {
    left++;
  }

  while (unSortedMax <= array[right]) {
    right--;
  }

  return [left, right];
}

function isSorted(array, index) {
  const left = array[index - 1];
  const current = array[index];
  const right = array[index + 1];

  if (index === 0) {
    return current <= right;
  } else if (index === array.length - 1) {
    return current >= left;
  } else {
    return current >= left && current <= right;
  }
}

console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));
