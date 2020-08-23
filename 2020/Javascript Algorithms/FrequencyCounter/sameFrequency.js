function sameFrequency(a, b) {
  if (a.toString().length !== b.toString().length) {
    return false;
  }

  const aObj = {};
  const bObj = {};

  for (const val of a.toString()) {
    aObj[val] = aObj[val] + 1 || 1;
  }

  for (const val of b.toString()) {
    bObj[val] = bObj[val] + 1 || 1;
  }

  for (const key in aObj) {
    if (aObj[key] !== bObj[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
