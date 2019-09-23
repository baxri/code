function mathPlus(a, b) {
  a = a + "";
  b = b + "";

  let a_length = a.length;
  let b_length = b.length;

  let mathMax = Math.max(b_length, a_length);

  a = formatNumber(a, mathMax);
  b = formatNumber(b, mathMax);

  let save = 0;
  let result = [];

  for (let i = a.length - 1; i >= 0; i--) {
    let top = a[i] * 1;
    let down = b[i] * 1;

    let sum = top + down + save;

    if (sum >= 10) {
      save = 1;
      sum = sum - 10;
    } else {
      save = 0;
    }

    result.unshift(sum)
    
  }
  console.log("a", a);
  console.log("b", b);

  return result.join('')
}

function formatNumber(a, numbers) {
  let zeros = numbers - a.length;

  let str = "";

  for (let i = 0; i < zeros; i++) {
    str += "0";
  }

  return str + a;
}

console.log(mathPlus(1, 199));
