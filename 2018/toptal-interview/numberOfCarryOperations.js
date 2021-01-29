function numberOfCarryOperations(a, b) {
  a = a + "";
  b = b + "";

  if (a.length > b.length) {
    const diff = a.length - b.length;
    const zeros = new Array(diff).fill(0);
    b = zeros.join("") + b;
  }

  if (b.length > a.length) {
    const diff = b.length - a.length;
    const zeros = new Array(diff).fill(0);
    a = zeros.join("") + a;
  }

  const max = Math.max(a.length, b.length);

  let carry = 0;
  let count = 0;

  for (i = max - 1; i >= 0; i--) {
    const first = parseInt(a[i] || 0);
    const second = parseInt(b[i] || 0);

    const result = carry + first + second;

    if (result > 9) {
      carry = 1;
      count++;
    } else {
      carry = 0;
    }
  }

  return count;
}

console.log(numberOfCarryOperations(555, 555));
console.log(numberOfCarryOperations(1234, 5678));

console.log(numberOfCarryOperations(900, 11)); // 0
console.log(numberOfCarryOperations(145, 55)); // 2
console.log(numberOfCarryOperations(0, 0)); // 0
console.log(numberOfCarryOperations(1, 99999)); // 5
console.log(numberOfCarryOperations(999045, 1055)); // 5
console.log(numberOfCarryOperations(101, 809)); // 1
console.log(numberOfCarryOperations(189, 209)); // 1
