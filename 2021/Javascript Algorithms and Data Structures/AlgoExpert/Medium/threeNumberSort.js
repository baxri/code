function threeNumberSort(array, order) {
  const charCounts = {};

  for (const char of array) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  let cursor = 0;
  for (let char of order) {
    for (let i = 0; i < charCounts[char]; i++) {
      array[cursor] = char;
      cursor++;
    }
  }

  return array;
}

console.log(threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]));
