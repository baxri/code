function makeAnagram(a, b) {
  let aHash = {};
  let bHash = {};

  for (let i = 0; i < a.length; i++) {
    aHash[a[i]] = aHash[a[i]] ? aHash[a[i]] + 1 : 1;
  }

  for (let i = 0; i < b.length; i++) {
    bHash[b[i]] = bHash[b[i]] ? bHash[b[i]] + 1 : 1;
  }

  let removeCount = 0;

  Object.keys(aHash).map(key => {
    removeCount += Math.abs(aHash[key] - (bHash[key] || 0));

    delete bHash[key];
  });

  Object.keys(bHash).map(key => {
    removeCount += bHash[key];
  });

  return removeCount;
}

console.log(makeAnagram("cde", "dcf"));
console.log(makeAnagram("cde", "abc"));
