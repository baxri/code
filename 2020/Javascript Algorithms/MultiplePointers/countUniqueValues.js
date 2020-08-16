function countUniqueValues(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    const prevValue = arr[i - 1];
    const currentValue = arr[i];

    if (prevValue === currentValue) {
      continue;
    }

    counter++;
  }

  return counter;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3]));
