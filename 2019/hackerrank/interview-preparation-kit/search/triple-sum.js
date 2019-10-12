function triplets(a, b, c) {
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  c.sort((a, b) => a - b);

  console.log(a, b, c);

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      for (let k = 0; k < c.length; k++) {
        if (a[i] < b[j] && b[j] < c[j]) {
          console.log([a[i], b[j], c[j]]);
        }
      }
    }
  }
}

console.log(triplets([3, 5, 7], [3, 6], [4, 6, 9]));
