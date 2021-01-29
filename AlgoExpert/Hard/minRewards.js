function minRewards(scores) {
  const result = new Array(scores.length).fill(0);

  for (let i = 0; i < scores.length; i++) {
    if (i === 0) {
      result[i] = 1;
      continue;
    }

    if (scores[i] > scores[i - 1]) {
      result[i] = result[i - 1] + 1;
      continue;
    }

    if (scores[i] < scores[i - 1]) {
      result[i] = 1;

      if (result[i - 1] === 1) {
        // for (let j = i - 1; j <= 0; j--) {
        //     result[j] = result[j] + 1;
        // }
      }
    }
  }

  console.log(result);
}

console.log(minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]));
