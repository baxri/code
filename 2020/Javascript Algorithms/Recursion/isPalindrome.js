function isPalindrome(str) {
  const length = str.length;

  if (length < 2) {
    return true;
  }

  if (str[0] !== str[length - 1]) {
    return false;
  }

  return isPalindrome(str.substring(1, length - 1));
}

console.log(isPalindrome("tacocat"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("awesome"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
