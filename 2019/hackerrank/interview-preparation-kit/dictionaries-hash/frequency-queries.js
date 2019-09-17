function freqQuery(queries) {
  let numbers = {};
  let result = [];
  let freq = {};

  
  queries.forEach(([action, number]) => {
    switch (action) {
      case 1:
        numbers[number] = numbers[number] || 0;

        if (numbers[number] > 0) {
          freq[numbers[number]] = freq[numbers[number]] - 1;
        }

        numbers[number] += 1;
        freq[numbers[number]] = (freq[numbers[number]] || 1) + 1;

        break;
      case 2:
        if (numbers[number] > 0) {
          freq[numbers[number]] -= 1;
          numbers[number] -= 1;
          freq[numbers[number]] = (freq[numbers[number]] || 0) + 1;
        }
        break;
      case 3:
        result.push(freq[number] > 0 ? 1 : 0);
        break;
    }
  });

  return result;
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
