function countTriplets(arr, r) {
  const arrObj = {};
  const posibilities = {};

  let total = 0;

  for (const index in arr) {
    arrObj[arr[index]] = index;
    posibilities[arr[index]] = (posibilities[arr[index]] || 0) + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    let second = first * r;
    let third = second * r;

    if (arrObj[first] <= arrObj[second] && arrObj[second] <= arrObj[third]) {
      total += posibilities[second] * posibilities[third];
    }
  }

  return total;
}

// console.log(countTriplets([1, 4, 16, 64], 4));
// console.log(countTriplets([1, 2, 2, 4], 2));
// console.log(countTriplets([1, 5, 5, 25, 125], 5));
console.log(countTriplets([1, 1, 1], 1));
