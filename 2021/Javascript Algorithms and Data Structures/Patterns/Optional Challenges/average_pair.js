function averagePair(arr, targetAverage) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const average = (arr[left] + arr[right]) / 2;

    if (average > targetAverage) {
      right--;
    } else if (average < targetAverage) {
      left++;
    } else {
      return true;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([], 4));
