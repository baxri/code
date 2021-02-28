function twins(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    const str1 = a[i];
    const str2 = b[i];
    result.push(isTwins(str1, str2));
  }

  return result;
}

function isTwins(a, b) {
  str1 = a.split("");
  str2 = b.split("");

  if (str1.length !== str2.length) {
    return "No";
  }

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];

    if (char === str2[i]) {
      continue;
    }

    let found = false;

    for (let x = i; x < str2.length; x += 2) {
      const charToFind = str2[x];

      for (let j = i + 2; j < str1.length; j += 2) {
        const detectedChar = str1[j];

        if (detectedChar === charToFind) {
          const temp = char;
          str1[i] = detectedChar;
          str1[j] = temp;
          found = true;

          //   str2[x] = str2[i];
          //   str2[i] = charToFind;
            continue;
        }
      }
    }
    if (!found) {
      return "No";
    }
  }

  return "Yes";
}

console.log(twins(["abcd", "abcd"], ["cbad", "adbc"]));
