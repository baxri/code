function minTime(machines, goal) {
  machines.sort((a, b) => a - b);

  let producedItems = 0;
  let spentDays = 0;

  while (producedItems < goal) {
    for (let i = 0; i < machines.length; i++) {
      spentDays += machines[i];
      producedItems++  
      

      if(producedItems >= 10){
          return spentDays;
      }
    }
  }

  console.log(machines);
}

console.log(minTime([2, 3, 2], 10));
