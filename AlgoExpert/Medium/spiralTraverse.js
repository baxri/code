function spiralTraverse(array) {
  const result = [];
  calculatePerimeter(
    array,
    0,
    array.length - 1,
    0,
    array[0].length - 1,
    result
  );
  return result;
}

function calculatePerimeter(
  array,
  startRow,
  endRow,
  startColumn,
  endColumn,
  result
) {
  if (startRow > endRow || startColumn > endColumn) {
    // Stop here dude :D
    return;
  }

  // Traverse top row
  for (let i = startColumn; i <= endColumn; i++) {
    result.push(array[startRow][i]);
  }

  // Traverse right column
  for (let i = startRow + 1; i <= endRow; i++) {
    result.push(array[i][endColumn]);
  }

  if (endRow > startRow) {
    // Traverse Bottom row
    for (let i = endColumn - 1; i >= startColumn; i--) {
      result.push(array[endRow][i]);
    }
  }

  if (endColumn > startColumn) {
    // Traverse left column
    for (let i = endRow - 1; i >= startRow + 1; i--) {
      result.push(array[i][startColumn]);
    }
  }

  calculatePerimeter(
    array,
    startRow + 1,
    endRow - 1,
    startColumn + 1,
    endColumn - 1,
    result
  );
}

console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
);
