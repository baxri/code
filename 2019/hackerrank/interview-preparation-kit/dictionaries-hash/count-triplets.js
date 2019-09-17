let a = 3;

function countTriplets(arr, r) {
  let counter = 0;

  const combinations = {};
  const posibilities = {};

  arr.forEach(numner => {
    counter += combinations[numner] || 0;

    const nextNumber = numner * r;

    combinations[nextNumber] =
      (combinations[nextNumber] || 0) + (posibilities[numner] || 0);

    posibilities[nextNumber] = (posibilities[nextNumber] || 0) + 1;
  });

  return counter;
}

console.log(countTriplets([1, 5, 5, 25, 125], 5));
