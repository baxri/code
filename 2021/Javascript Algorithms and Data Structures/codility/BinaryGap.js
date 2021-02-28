function BinaryGap(N) {
  const string = N.toString(2);

  let maxGap = 0;
  let startCountingGap = false;
  let gapCounter = 0;

  for (let i = 0; i < string.length; i++) {
    const prev = string[i - 1];
    const current = string[i];
    const next = string[i + 1];

    if (prev === "1" && current === "0") {
      startCountingGap = true;
    }

    if (startCountingGap) {
      gapCounter++;
    }

    if (next === "1" && startCountingGap) {
      maxGap = Math.max(maxGap, gapCounter);

      startCountingGap = false;
      gapCounter = 0;
    }
  }

  return maxGap;
}

console.log(BinaryGap(1041));
