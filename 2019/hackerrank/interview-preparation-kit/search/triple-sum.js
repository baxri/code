function triplets(a, b, c) {

  let count = 0;
  let hash = {};

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      for (let k = 0; k < c.length; k++) {
        if (a[i] <= b[j] && b[j] >= c[k]) {
          if(!hash[`${a[i]}${b[j]}${c[k]}`]){
            count++;
            hash[`${a[i]}${b[j]}${c[k]}`] = true
          }
        }
      }
    }
  }

  return count;
}

console.log(triplets([3, 5, 7], [3, 6], [4, 6, 9]));
