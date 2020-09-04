function twoStrings(s1, s2) {
  const s1Obj = {};

  for (let char of s1) {
    s1Obj[char] = (s1Obj[char] || 0) + 1;
  }

  for (let char of s2) {
    if (s1Obj[char]) {
      return "YES";
    }
  }

  return "NO";
}

console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));
console.log(twoStrings("hi", "world"));
