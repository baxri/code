// function twoStrings(s1, s2) {
//   for (let i = 0; i < s2.length; i++) {
//     for (let j = i + 1; j <= s2.length; j++) {
//       let substr = s2.substring(i, j);

//       if (s1.indexOf(substr) > -1) {
//         return "YES";
//       }
//     }
//   }

//   return "NO";
// }

function twoStrings(s1, s2) {
  let chars = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < chars.length; i++) {
      if( s1.indexOf(chars[i]) > -1 && s2.indexOf(chars[i]) > -1 ){
          return 'YES'
      }
  }

  return "NO";
}

console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));
