function makeAnagram(a, b) {
  let aHash = {};
  let bHash = {};

  for (let i = 0; i < a.length; i++) {
    aHash[a[i]] = aHash[a[i]] + 1 || 1;
  }

  for (let i = 0; i < a.length; i++) {
    bHash[a[i]] = bHash[b[i]] + 1 || 1;
  }

  let removeCount = 0;

  Object.keys(aHash).map(key => {
    if (bHash[key]) {
    //   removeCount = Math.abs(aHash[key], bHash[key]);
    }

    // delete(aHash[key])
    console.log(key)
    // delete(bHash[key])
  });

  console.log(aHash);
  console.log(bHash);
}

// console.log(makeAnagram("cde", "dcf"));
console.log(makeAnagram("cde", "abc"));
