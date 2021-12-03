function checkMagazine(m, n) {
  console.log(checkMagazineImpl(m, n));
}

function checkMagazineImpl(m, n) {
  const mHash = {};

  m.split(" ").forEach((word) => {
    mHash[word] = (mHash[word] || 0) + 1;
  });

  for (let word of n.split(" ")) {
    if (!mHash[word] || mHash[word] < 1) {
      return "No";
    }

    --mHash[word];
  }

  return "Yes";
}

console.log(
  checkMagazine("ive got a lovely bunch of coconuts", "ive got some coconuts")
);
