function isSubsecuence(a, b) {
  if (a.length > b.length) {
    return false;
  }

  let left = 0;

  for (val of b) {
    if (val === a[left]) {
      left++;
    }
  }

  return left === a.length;
}

console.log(isSubsecuence("sing", "string"));
console.log(isSubsecuence("hello", "hello world"));
console.log(isSubsecuence("abc", "bca"));
