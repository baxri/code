function tournamentWinner(competitions, results) {
  const aggr = {};

  let champion = [];

  for (let i = 0; i < competitions.length; i++) {
    const winner = competitions[i][results[i] ? 0 : 1];

    aggr[winner] = (aggr[winner] | 0) + 3;

    if (champion.length === 0 || champion[1] < aggr[winner]) {
      champion = [winner, aggr[winner]];
    }
  }

  return champion[0];
}

console.log(
  tournamentWinner(
    [
      ["html", "ccs"],
      ["c#", "python"],
      ["python", "html"],
    ],
    [0, 0, 1]
  )
);
