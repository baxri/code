function hourglassSum(arr) {
  let hourGlasses = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      let sum = hourGlassSum(arr, i, j);

      if (sum !== null) {
        hourGlasses.push(sum);
      }
    }
  }

  hourGlasses.sort((a, b) => b - a);
  return hourGlasses[0];
}

function hourGlassSum(arr, i, j) {
  const topLeft = arr[i][j];
  const topCenter = arr[i][j + 1];
  const topRight = arr[i][j + 2];
  const centerCenter = arr[i + 1][j + 1];
  const bottomLeft = arr[i + 2][j];
  const bottomCenter = arr[i + 2][j + 1];
  const bottomRight = arr[i + 2][j + 2];
  return (
    topLeft +
    topCenter +
    topRight +
    centerCenter +
    bottomLeft +
    bottomCenter +
    bottomRight
  );
}

let matrix = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

console.log(hourglassSum(matrix));
