function countUniqValuesMy(a) {
  if (a.length === 0) {
    return 0;
  }

  let uniqValues = 1;

  let i = 0;
  let j = 1;

  while (j < a.length) {
    const prevValue = a[i];
    const currentValue = a[j];

    if (currentValue != prevValue) {
      uniqValues++;
    }

    j++;
    i++;
  }

  return uniqValues;
}

function countUniqValues(a) {
  if (a.length === 0) {
    return 0;
  }

  let i = 0;
  let j = 1;

  while (j < a.length) {
    const prevValue = a[i];
    const currentValue = a[j];

    if (currentValue != prevValue) {
      i++;
      a[i] = a[j];
    }

    j++;
  }

  return i + 1;
}

console.log(countUniqValues([1, 1, 1, 1, 2]));
console.log(countUniqValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqValues([-2, -1, -1, 0, 1]));
console.log(countUniqValues([]));

function sumZero(a) {
  let left = 0;
  let right = a.length - 1;

  while (left < right) {
    const leftValue = a[left];
    const rightValue = a[right];

    const sum = leftValue + rightValue;

    if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    } else {
      return [leftValue, rightValue];
    }
  }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
