function isValidSubsequence(array, sequence) {
  for (number of array) {
    if (number === sequence[0]) {
      sequence.shift();
    }
  }

  return sequence?.length === 0;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
