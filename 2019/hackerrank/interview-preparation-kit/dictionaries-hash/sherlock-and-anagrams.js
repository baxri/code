function sherlockAndAnagrams(s) {
  let substrings = {};
  let anagrams = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let str = s
        .substring(i, j)
        .split("")
        .sort()
        .join("");

      if (typeof substrings[str] == "undefined") {
        substrings[str] = [str];
      } else {
        substrings[str].push(str);
      }
    }
  }

  console.log(substrings)

  Object.keys(substrings).map(key => {
    for (let i = 0; i < substrings[key].length; i++) {
      for (let j = i + 1; j < substrings[key].length; j++) {
        anagrams++;
      }
    }
  });

  return anagrams;
}

// console.log(sherlockAndAnagrams("kkkk"));
// console.log(sherlockAndAnagrams("mom"));
// console.log(sherlockAndAnagrams("ifailuhkqq"));
console.log(sherlockAndAnagrams("abba"));
// console.log(sherlockAndAnagrams("abcd"));
