function sameFrequency(a, b) {
  if (a.toString().length != b.toString().length) {
    return false;
  }

  const aHash = {};
  const bHash = {};

  for (const val of a.toString()) {
    aHash[val] = (aHash[val] || 0) + 1;
  }

  for (const val of b.toString()) {
    bHash[val] = (bHash[val] || 0) + 1;
  }

  for (key in aHash) {
    if (aHash[key] != bHash[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281));
