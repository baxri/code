function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[right] === toMove) {
      right--;
      continue;
    }

    if (array[left] === toMove) {
      swap(array, left, right);
    }

    left++;
  }

  return array;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
