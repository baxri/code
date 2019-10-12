function minTime(machines, goal) {
  machines.sort((a, b) => a - b);

  let producedItems = 0;
  let spentDays = 0;
  let workingMachies = {};

  while (true) {
    spentDays++;

    for (let i = 0; i < machines.length; i++) {
      let key = `key_${i}${machines[i]}`;

      workingMachies[key] = workingMachies[key] + 1 || 1;

      if (workingMachies[key] === machines[i]) {
        producedItems++;

        workingMachies[key] = 0;

        if (producedItems >= goal) {
          return spentDays;
        }
      }
    }
  }
}

console.log(minTime([2, 3, 2], 10));
