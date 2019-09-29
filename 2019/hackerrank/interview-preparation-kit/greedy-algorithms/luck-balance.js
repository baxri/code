function luckBalance(k, contests) {
  contests.sort((a, b) => b[0] - a[0]);

  let sum = 0;

  for (let i = 0; i < contests.length; i++) {
    let value = contests[i][0];
    let importance = contests[i][1];

    if (importance === 1) {
      if (k > 0) {
        sum += value;
        k--;
      } else {
        sum -= value;
      }
    } else {
      sum += value;
    }
  }

  return sum;
}

console.log(luckBalance(1, [[5, 1], [1, 1], [4, 0]]));

// 5, 1;
// 4, 0;
// 1, 1;
