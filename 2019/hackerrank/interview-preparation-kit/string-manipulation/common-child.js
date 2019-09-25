function commonChild(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");

  const matrix = new Array(7).fill(0).map(() => new Array(6).fill(0));

  for (let i = 0; i < s1.length + 2; i++) {
    for (let j = 0; j < s1.length + 2; j++) {
      if (i < 2 && j < 2) {
        matrix[i][j] = 0;
      }

      if (i == 0 && j > 1) {
        matrix[i][j] = s1[j - 2];
      }

      if (i == 1 && j > 1) {
        matrix[i][j] = 0;
      }

      if (j == 0 && i > 1) {
        matrix[i][j] = s2[i - 2];
      }

      if (j == 1 && i > 1) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let i = 2; i < s1.length + 2; i++) {
    for (let j = 2; j < s1.length + 2; j++) {
        
        let last_s1 = s1[j-2]
        let last_s2 = s1[i-2]
        
        if(  last_s1 == last_s2 ){
            matrix[i][j] = matrix[i-1][j-1] + 1
        }else{
            matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1])
        }
    } 
  }

  console.log(matrix)

  return matrix[matrix.length-1][matrix.length-1]
}

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

console.log(commonChild("AGGTAB", "GXTXAYB"));
