function maxSumIncreasingSubsequence(array) {
  const sums = [...array];
  const sequences = new Array(array.length).fill(null);
  let maxSumIndex = 0;

  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    while (j >= 0) {
      const current = array[i];
      const prev = array[j];
      const prevSum = sums[j];

      if (current > prev) {
        if (prevSum + current > sums[i]) {
          sums[i] = prevSum + current;
          sequences[i] = j;
        }
      }

      j--;
    }

    if (sums[maxSumIndex] < sums[i]) {
      maxSumIndex = i;
    }
  }

  return [sums[maxSumIndex], buildSequence(array, sequences, maxSumIndex)];
}

function buildSequence(array, sequences, currentIdx) {
  const sequence = [];

  while (currentIdx !== null) {
    sequence.unshift(array[currentIdx]);
    currentIdx = sequences[currentIdx];
  }

  return sequence;
}

console.log(maxSumIncreasingSubsequence([8, 12, 2, 3, 15, 5, 7]));
