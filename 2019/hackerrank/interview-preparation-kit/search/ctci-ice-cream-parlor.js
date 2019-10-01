// Complete the whatFlavors function below.

function whatFlavors(cost, money) {
  //   cost = cost.sort((a, b) => a - b);

  for (let i = 0; i < cost.length; i++) {
    for (let j = i + 1; j < cost.length; j++) {
      if (cost[i] + cost[j] === money) {
        console.log([i + 1, j + 1].sort((a, b) => a - b).join(" "));
        break;
      }
    }
  }
}
