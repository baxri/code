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

  console.log(substrings);

  for (let val in substrings) {
    const arr = substrings[val];

    if (arr.length > 1) {
      counter++;
    }
  }

  return counter;
}

function signature(str) {
  return str.split("").sort().join("");
}

// console.log(sherlockAndAnagrams("abba"));
// console.log(sherlockAndAnagrams("ifailuhkqq"));
console.log(sherlockAndAnagrams("kkkk"));
// console.log(sherlockAndAnagrams("cdcd"));
