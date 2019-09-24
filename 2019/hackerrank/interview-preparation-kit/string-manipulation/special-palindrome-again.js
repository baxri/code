function substrCount(n, s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let temp = 0;

    for (let j = i; j < s.length; j++) {
      if (s[i] == s[j]) {
        count++;
        temp++;
      } else {
        break;
      }
    }

    let l = 0;

    for (let j = i + temp + 1; j <= i + temp + temp; j++) {
      if (s[i] == s[j]) {
        l++;
      } else {
        break;
      }
    }

    if (l == temp) {
      count++;
    }
  }


  return count;
}

console.log(substrCount(8, "mnonopoo"));
// console.log(substrCount(5, "asasd"));
