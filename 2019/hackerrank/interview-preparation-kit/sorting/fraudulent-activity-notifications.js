// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
  let numberOfNotification = 0;

  let trailing = [];
  let sum = 0;

  for (let i = 0; i < expenditure.length; i++) {
    if (trailing.length == d) {
      const median = sum / trailing.length;

      if (median * 2 <= expenditure[i]) {
        numberOfNotification++;
      }

      sum -= expenditure[0];
      trailing.shift();
    }

    sum += expenditure[i];
    trailing.push(expenditure[i]);
  }

  return numberOfNotification;
}

console.log(activityNotifications([10, 20, 30, 40, 50], 3));
