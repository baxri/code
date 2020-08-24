function isSubsequence(str1, str2) {
  let left = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str1[left] === str2[i]) {
      left++;
    }
  }

  return left === str1.length;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
