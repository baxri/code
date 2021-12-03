function freqQuery(q) {
  const valCount = {};
  const freqCount = {};

  const result = [];

  for (const val of q) {
    const operation = val[0];
    const data = val[1];

    let frequencyCurrent = valCount[data] || 0;
    let frequency;

    switch (operation) {
      case 1:
        frequency = frequencyCurrent + 1;

        valCount[data] = frequency;

        if (freqCount[frequencyCurrent] > 0) {
          freqCount[frequencyCurrent] -= 1;
        }

        freqCount[frequency] = (freqCount[frequency] || 0) + 1;
        break;
      case 2:
        if (frequencyCurrent > 0) {
          frequency = frequencyCurrent - 1;

          valCount[data] = frequency;

          if (freqCount[frequencyCurrent] > 0) {
            freqCount[frequencyCurrent] -= 1;
          }

          freqCount[frequency] = (freqCount[frequency] || 0) + 1;
        }

        break;
      case 3:
        if (freqCount[data] > 0) {
          result.push(1);
        } else {
          result.push(0);
        }
        break;
    }
  }

  return result;
}

console.log(
  freqQuery([
    [1, 1],
    [2, 2],
    [3, 2],
    [1, 1],
    [1, 1],
    [2, 1],
    [3, 2],
  ])
);
