// function isMonotonic(array) {
//   let direction = -1;

//   for (let i = 0; i < array.length; i++) {
//     if (direction === null && array[i] !== array[i + 1]) {
//       direction = array[i] > array[i + 1] ? "DECREASING" : "INCREASING";
//     }

//     if (direction === "INCREASING" && array[i] > array[i + 1]) {
//       return false;
//     }

//     if (direction === "DECREASING" && array[i] < array[i + 1]) {
//       return false;
//     }
//   }

//   return true;
// }

function isMonotonic(array) {
  let direction = null;

  for (let i = 0; i < array.length; i++) {
    if (direction === null && array[i] !== array[i + 1]) {
      direction = array[i] > array[i + 1] ? -1 : 1;
    }

    if (direction !== null && (array[i + 1] - array[i]) * direction <= 0) {
      return false;
    }
  }

  return true;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
