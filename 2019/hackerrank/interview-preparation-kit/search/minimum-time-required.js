function minTime(machines, goal) {
  let low = 1;
  let high = 100;
  let ans = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    let done = 0;

    for (let i = 0; i < machines.length; i++) {
      done += mid / machines[i];

      if (done >= goal) {
        break;
      }
    }

    if (done >= goal) {
      high = mid - 1;
      ans = mid;
    } else {
      low = mid + 1;
    }
  }

  return ans
}

console.log(minTime([2, 3, 2], 10));

// Bruteforce solution
function minTimeBruteForce(machines, goal) {
  let producedItems = 0;
  let spentDays = 0;
  let workingMachies = {};
  let optimizedMachines = {};

  for (let i = 0; i < machines.length; i++) {
    optimizedMachines[machines[i]] = optimizedMachines[machines[i]] + 1 || 1;
  }

  while (true) {
    spentDays++;

    try {
      Object.keys(optimizedMachines).map(key => {
        workingMachies[key] = workingMachies[key] + 1 || 1;
        if (workingMachies[key] == key) {
          producedItems += optimizedMachines[key];
          workingMachies[key] = 0;

          if (producedItems >= goal) {
            throw new Error();
          }
        }
      });
    } catch (err) {
      break;
    }
  }

  return spentDays;
}
