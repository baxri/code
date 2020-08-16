function validAnagram(a, b) {
  const aCounter = {};
  const bCounter = {};

  for (const val of a) {
    aCounter[val] = (aCounter[val] || 0) + 1;
  }

  for (const val of b) {
    bCounter[val] = (bCounter[val] || 0) + 1;
  }

  for (const key in aCounter) {
    if (!(key in bCounter)) {
      return false;
    }

    if (bCounter[key] !== aCounter[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("aaz", "azz"));
