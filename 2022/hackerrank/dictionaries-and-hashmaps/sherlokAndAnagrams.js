// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
  let substrings = {};
  let ccc = [];

  for (let i = 0; i <= s.length; i++) {
    for (let j = i; j <= s.length; j++) {
      let str = s.substring(i, j);

      if (!str) {
        continue;
      }

      if (!substrings[signature(str)]) {
        substrings[signature(str)] = [str];
      } else {
        substrings[signature(str)].push(str);
      }

      ccc.push(str);
    }
  }

  let counter = 0;

  for (let val in substrings) {
    counter += possibleCombinations(substrings[val].length);
  }

  return counter;
}

function signature(str) {
  return str.split("").sort().join("");
}

function possibleCombinations(n) {
  if (n < 2) {
    return 0;
  }
  return (n * (n - 1)) / 2;
}

// console.log(sherlockAndAnagrams("abba"));
// console.log(sherlockAndAnagrams("ifailuhkqq"));
// console.log(sherlockAndAnagrams("kkkk"));
console.log(sherlockAndAnagrams("cdcd"));

// c d c d   2
// cd dc cd 3
// cdc dcd
