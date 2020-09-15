const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback) {
  if (arr.length === 0) {
    return false;
  }

  if (callback(arr[0])) {
    return true;
  }

  return someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 8], isOdd));

// console.log([1, 2, 3, 4].slice(1))
