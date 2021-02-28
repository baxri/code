function largestRange(array) {
  array.sort((a, b) => a - b);

  let result = [];
  let runningResult = [];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const next = array[i + 1];

    if (runningResult.length === 0) {
      runningResult.push(current);
    }

    if (current + 1 === next || current === next) {
      continue;
    }

    runningResult.push(current);

    if (
      result.length === 0 ||
      runningResult[1] - runningResult[0] > result[1] - result[0]
    ) {
      result = runningResult;
      runningResult = [];
    }
  }

  return result;
}

console.log(
  largestRange([
    19,
    -1,
    18,
    17,
    2,
    10,
    3,
    12,
    5,
    16,
    4,
    11,
    8,
    7,
    6,
    15,
    12,
    12,
    2,
    1,
    6,
    13,
    14,
  ])
);
// console.log(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]));
