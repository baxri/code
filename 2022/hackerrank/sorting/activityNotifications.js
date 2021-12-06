function median(arr) {
  let middle = Math.floor(arr.length / 2);
  arr = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0
    ? arr[middle]
    : (arr[middle - 1] + arr[middle]) / 2;
}

function activityNotifications(expenditure, d) {
  let notifictions = 0;

  const arr = expenditure.slice(0, d);

  let m = median(arr);

  for (let i = d; i < expenditure.length; i++) {
    if (expenditure[i] >= m * 2) {
      notifictions++;
    }

    arr.shift();
    arr.push(expenditure[i]);
    m = median(arr);
  }

  return notifictions;
}

console.log(activityNotifications([10, 20, 30, 40, 50], 3));
console.log(activityNotifications([1, 2, 3, 4, 4], 4));
