function countInversions(arr) {
  let inversions = 0;

  return mergeSort(arr, arr.length / 2, inversions);
}

function mergeSort(array, half = array.length / 2, inversions) {
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half); //left part of array

  return merger(mergeSort(left), mergeSort(array), inversions);
}

function merger(left, right, inversions) {
  const arr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else {
      inversions += left.length;
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

// console.log(countInversions([2,1,3,1,2]));
console.log(countInversions([2, 1, 3, 1, 2]));
