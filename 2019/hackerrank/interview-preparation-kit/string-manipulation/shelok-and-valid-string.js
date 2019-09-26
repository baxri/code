function isValid(s) {
  let hash = {};

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] + 1 || 1;
  }

  let lastCheckedElement = null;
  let isValid = true;
  let canRemove = true;

  let ocurencies = [];

  Object.keys(hash).map(key => {
    ocurencies.push(hash[key]);
  });

  ocurencies.sort();

  ocurencies.forEach(number => {
    if (lastCheckedElement !== null) {
      if (lastCheckedElement !== number) {
        if (!canRemove) {
          isValid = false;
        } else {
          if (Math.abs(lastCheckedElement - number) === 1) {
            canRemove = false;
            number--;
          } else {
            isValid = false;
          }
        }
      }
    }

    lastCheckedElement = number;
  });

  console.log('hash', hash)

  return isValid ? "YES" : "NO";
}

console.log(isValid("abcdefghhgfedecba"));
