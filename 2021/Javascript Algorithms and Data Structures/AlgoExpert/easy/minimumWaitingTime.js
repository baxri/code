function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let waitingTime = 0;
  let duration = 0;

  for (const val of queries) {
    waitingTime += duration;
    duration += val;
  }

  return waitingTime;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
