function arrayManipulation(n, queries) {
  let maxValue = 0;

  let finalOperations = {};

  for (let i = 0; i < queries.length; i++) {
    let left = queries[i][0] - 1;
    let right = queries[i][1] - 1;
    let value = queries[i][2];

    for (j = left; j <= right; j++) {
      finalOperations[j] =
        typeof finalOperations[j] !== "undefined"
          ? finalOperations[j] + value
          : value;

      if (maxValue < finalOperations[j]) {
        maxValue = finalOperations[j];
      }
    }
  }

  return maxValue;
} 

function arrayManipulationV1(n, queries) {
  let zeros = new Array(n).fill(0);
  let maxValue = 0;

  for (let i = 0; i < queries.length; i++) {
    let left = queries[i][0] - 1;
    let right = queries[i][1] - 1;
    let value = queries[i][2];

    for (let j = 0; j < zeros.length; j++) {
      if (j >= left && j <= right) {
        zeros[j] += value;

        if (zeros[j] > maxValue) {
          maxValue = zeros[j];
        }
      }
    }
  }

  return maxValue;
}

console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]));

// 0 0 0 0 0 0 0 0 0 0 
   3         -3