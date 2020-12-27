function validAnagram(a, b) {
  if (a.length != b.length) {
    return false;
  }

  const aHash = {};
  const bHash = {};

  for (val of a) {
    aHash[val] = (aHash[val] || 0) + 1;
  }

  for (val of b) {
    bHash[val] = (bHash[val] || 0) + 1;
  }

  for (val in aHash) {
    if (aHash[val] != bHash[val]) {
      return false;
    }
  }

  return true;
}

// console.log(validAnagram("", ""));
// console.log(validAnagram("aaz", "zza"));
// console.log(validAnagram("anagram", "nagaram"));

function same(a, b) {
  if (a.length != b.length) {
    return false;
  }

  const aHash = {};
  const bHash = {};

  a.forEach((e) => {
    aHash[e * e] = (aHash[e * e] || 0) + 1;
  });

  b.forEach((e) => {
    bHash[e] = (bHash[e] || 0) + 1;
  });

  for (e in aHash) {
    if (bHash[e] != aHash[e]) {
      return false;
    }
  }

  return true;
}

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 4, 1]));
