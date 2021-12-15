function sortedSquaredArray(array) {
  let left = 0;
  let right = array.length - 1;

  const result = [];

  while (right >= left) {
    if (Math.abs(array[right]) >= Math.abs(array[left])) {
      result.unshift(Math.pow(array[right], 2));
      right--;
    } else {
      result.unshift(Math.pow(array[left], 2));
      left++;
    }
  }

  return result;
}

console.log(sortedSquaredArray([-7, -5, -4, 3, 6, 8, 9]));
