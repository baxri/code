function isValidSubsequence(array, sequence) {
  let cursor = 0;

  for (let i = 0; i < array.length; i++) {
    if (sequence[cursor] === array[i]) {
      cursor++;
    }
  }

  return cursor === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
