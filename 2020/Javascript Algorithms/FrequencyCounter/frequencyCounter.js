// Straitworward implementation
function frequencyCounter(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let val of a) {
    let index = b.indexOf(val ** 2);

    if (index === -1) {
      return false;
    }

    b.splice(index, 1);
  }

  return true;
}

// Nice implementation
function frequencyCounterNice(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const aCounter = {};
  const bCounter = {};

  for (let val of a) {
    aCounter[val] = (aCounter[val] || 0) + 1;
  }

  for (let val of b) {
    bCounter[val] = (bCounter[val] || 0) + 1;
  }

  for (let key in aCounter) {
    if (!(key ** 2 in bCounter)) {
      return false;
    }

    if (bCounter[key ** 2] !== aCounter[key]) {
      return false;
    }
  }

  return true;
}

console.log(frequencyCounter([1, 2, 3, 2], [1, 4, 9, 4]));
