function commonChild(s1, s2) {
  const matrix = buildMatrix(s1, s2);

  // trace function to get the string

  return matrix[s2.length][s1.length];
}

function buildMatrix(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");

  const matrix = new Array(s2.length + 1)
    .fill(0)
    .map(() => new Array(s1.length + 1).fill(0));

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      let lastS1 = s1[j - 1];
      let lastS2 = s2[i - 1];

      let left = matrix[i][j - 1];
      let top = matrix[i - 1][j];
      let diagonal = matrix[i - 1][j - 1];

      if (lastS1 == lastS2) {
        str += lastS1;
        matrix[i][j] = diagonal + 1;
      } else {
        matrix[i][j] = Math.max(left, top);
      }
    }
  }

  return matrix;
}

//   A B C D
// A 1 1 1 1
// B 1 2 2 2
// D 1 2 2 3
// C 1 2 3 3

console.log(commonChild("ABCD", "ABDC"));

// function commonChild(s1, s2) {
//   return commonChildRec(s1, s2, s1.length - 1, s2.length - 1);
// }

// function commonChildRec(s1, s2, s1i, s2i) {
//   if (s1i < 0 || s2i < 0) {
//     return 0;
//   }

//   if (s1[s1i] == s2[s2i]) {
//     return 1 + commonChildRec(s1, s2, s1i - 1, s2i - 1);
//   }

//   return Math.max(
//     commonChildRec(s1, s2, s1i - 1, s2i),
//     commonChildRec(s1, s2, s1i, s2i - 1)
//   );
// }
