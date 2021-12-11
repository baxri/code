function reverseShuffleMerge(s) {
  // Write your code here

  s = s.split("").reverse();

  const unUsed = {};
  const used = {};
  const required = {};

  for (let i = 0; i < s.length; i++) {
    unUsed[s[i]] = (unUsed[s[i]] || 0) + 1;
  }

  for (let char of Object.keys(unUsed)) {
    required[char] = unUsed[char] / 2;
  }

  let result = [];

  for (const char of s) {
    if (required[char] > 0) {
      result.push(char);
      required[char]--;
    }

    unUsed[char]--;
  }

  return result.join("");
}

console.log(reverseShuffleMerge("eggegg"));
// console.log(reverseShuffleMerge("aeiouuoiea"));
// console.log(reverseShuffleMerge("abcdefgabcdefg"));
