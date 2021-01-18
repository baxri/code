function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let difference = Infinity;
  let result = null;

  let cursorOne = 0;
  let cursorTwo = 0;

  while (cursorOne < arrayOne.length && cursorTwo < arrayTwo.length) {
    let runningDifference = 0;
    let one = arrayOne[cursorOne];
    let two = arrayTwo[cursorTwo];

    if (one === two) {
      return [one, two];
    } else if (one > two) {
      runningDifference = one - two;
      cursorTwo++;
    } else {
      runningDifference = two - one;
      cursorOne++;
    }

    if (runningDifference < difference) {
      difference = runningDifference;
      result = [one, two];
    }
  }

  return result;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
