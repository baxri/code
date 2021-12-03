function twoStrings(s1, s2) {
  const s1Hash = {};

  for (let char of s1.split("")) {
    s1Hash[char] = (s1Hash[char] || 0) + 1;
  }

  for (let char of s2.split("")) {
    if (s1Hash[char]) {
      return "YES";
    }
  }

  return "NO";
}

console.log(twoStrings("hi", "world"));
