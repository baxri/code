function countTriplets(arr, n) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[j] === arr[i] * n && arr[k] === arr[j] * n) {
          counter++;
        }
      }
    }
  }

  return counter;
}

function countTripletsOptimal(arr, n) {
  let counter = 0;

  let before = {};
  let after = {};

  for (let i = 0; i < arr.length; i++) {
    after[arr[i]] = (after[arr[i]] || 0) + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    let prev = arr[i] / n;
    let cur = arr[i];
    let next = arr[i] * n;

    after[cur]--;

    if (before[prev] > 0 && cur % n === 0 && after[next] > 0) {
      counter += before[prev] * after[next];
    }

    before[cur] = (before[cur] || 0) + 1;
  }

  return counter;
}

console.log(countTripletsOptimal([1, 1, 1], 1));
