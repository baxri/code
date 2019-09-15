function freqQuery(queries) {
  let arr = [];
  let hash = {};
  let result = [];
  let freq = {};

  for (let i = 0; i < queries.length; i++) {
    if (queries[i][0] === 1) {
      insert(arr, hash, freq, queries[i][1]);
    }

    if (queries[i][0] === 2) {
      remove(arr, hash, freq, queries[i][1]);
    }

    if (queries[i][0] === 3) {
      result.push(freq[queries[i][1]] > 0 ? 1 : 0);
    }
  }

  return result;
}

function insert(arr, hash, freq, x) {
  arr.push(x);

  if (typeof hash[x] === "undefined") {
    hash[x] = 1;
  } else {
    hash[x] = hash[x] + 1;
  }

  freq[hash[x] - 1] = (freq[hash[x] - 1] || 0) - 1;
  freq[hash[x]] = (freq[hash[x]] || 0) + 1;
}

function remove(arr, hash, freq, y) {
  if (arr.indexOf(y) > -1) {
    arr.splice(arr.indexOf(y), 1);
    freq[hash[y] - 1] = freq[hash[y] - 1] + 1;
    freq[hash[y]] = freq[hash[y]] - 1;

    if (typeof hash[y] != "undefined") {
      hash[y] = hash[y] - 1;
    }
  }
}

console.log(
  freqQuery([[1, 1], [2, 2], [3, 2], [1, 1], [1, 1], [2, 1], [3, 2]])
);

console.log(
  freqQuery([[1, 5], [1, 6], [3, 2], [1, 10], [1, 10], [1, 6], [2, 5], [3, 2]])
);

console.log(freqQuery([[3, 4], [2, 1003], [1, 16], [3, 1]]));

console.log(
  freqQuery([
    [1, 3],
    [2, 3],
    [3, 2],
    [1, 4],
    [1, 5],
    [1, 5],
    [1, 4],
    [3, 2],
    [2, 4],
    [3, 2]
  ])
);
