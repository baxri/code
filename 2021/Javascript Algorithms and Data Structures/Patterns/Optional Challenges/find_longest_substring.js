function findLongestSubstring(a) {
  const indexes = {};

  let length = 0;
  let left = 0;

  for (let i = 0; i < a.length; i++) {
    if (!indexes[a[i]] || indexes[a[i]] <= left) {
      indexes[a[i]] = i + 1;
    } else {
      const l = i - left;

      if (l > length) {
        length = l;
      }

      left = indexes[a[i]];
      indexes[a[i]] = i + 1;
    }
  }

  return length;
}

console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("bbbbbbbb"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("longestsubstring"));
