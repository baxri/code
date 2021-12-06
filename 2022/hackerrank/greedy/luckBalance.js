function luckBalance(k, contests) {
  let balance = 0;

  const importantContests = [];

  for (let i = 0; i < contests.length; i++) {
    const value = contests[i][0];
    const important = contests[i][1];

    if (important) {
      importantContests.push(value);
    } else {
      balance += value;
    }
  }

  importantContests.sort((a, b) => b - a);

  for (let i = 0; i < importantContests.length; i++) {
    if (i < k) {
      balance += importantContests[i];
    } else {
      balance -= importantContests[i];
    }
  }

  return balance;
}

console.log(
  luckBalance(3, [
    [5, 1],
    [2, 1],
    [1, 1],
    [8, 1],
    [10, 0],
    [5, 0],
  ])
);
