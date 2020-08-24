function averagePair(arr, a) {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    const average = (arr[left] + arr[right]) / 2;

    if (average > a) {
      right--;
    } else if (average < a) {
      left++;
    } else {
      return true;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
