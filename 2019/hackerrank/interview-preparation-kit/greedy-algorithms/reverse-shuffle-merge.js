// Complete the reverseShuffleMerge function below.
function reverseShuffleMerge(s) {
  s = s.split("");

  let splitIndex = s.length / 2;

  let left = s.slice(0, splitIndex).reverse();

  let i = 0;

  while (left.length > 0) {
    if (s[i] == left[0]) {
      left.splice(0, 1);
      s.splice(i, 1);
    } else {
      i++;
    }
  }

  return s.join("");
}

console.log(reverseShuffleMerge("aeiouuoiea"));
// console.log(reverseShuffleMerge("abcdefgabcdefg"));
