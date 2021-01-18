function longestPeak(array) {
  const peaks = [];

  // find peak indexes
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
      peaks.push(i);
    }
  }

  // Calculate longest peak
  let maxPeak = 0;

  for (let i = 0; i < peaks.length; i++) {
    let center = peaks[i];
    let left = peaks[i] - 1;
    let right = peaks[i] + 1;

    let runningPeak = [center];

    while (array[left] < array[left + 1]) {
      runningPeak.push(left);
      left--;
    }

    while (array[right] < array[right - 1]) {
      runningPeak.push(right);
      right++;
    }

    if (runningPeak.length > maxPeak) {
      maxPeak = runningPeak.length;
    }
  }

  return maxPeak;
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
