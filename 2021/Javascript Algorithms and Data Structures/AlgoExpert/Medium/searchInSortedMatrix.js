function searchInSortedMatrix(matrix, target) {
  return searchInSortedMatrixHelper(matrix, target, 0, matrix[0].length - 1);
}

function searchInSortedMatrixHelper(matrix, target, x, y) {
  if (x > matrix.length && y < 0) {
    return [-1, -1];
  }

  const value = matrix[x][y];

  if (value === target) {
    return [x, y];
  } else if (target < value) {
    return searchInSortedMatrixHelper(matrix, target, x, y - 1);
  } else {
    return searchInSortedMatrixHelper(matrix, target, x + 1, y);
  }
}

console.log(
  searchInSortedMatrix(
    [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004],
    ],
    44
  )
);
