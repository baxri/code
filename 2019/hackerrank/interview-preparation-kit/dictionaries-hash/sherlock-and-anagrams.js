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



    console.log('substrings', substrings)
  }

  return anagrams;
}

console.log(sherlockAndAnagrams("kkkk"));
// console.log(sherlockAndAnagrams('mom'))
