

function triplets(a, b, c) {
    for (let i of [a, b, c]) {
        i.sort((a, b) => a - b)
    }
    a = [...new Set(a)]
    b = [...new Set(b)]
    c = [...new Set(c)]

    let bi = 0;
    let ai = 0;
    let ci = 0;
    let total = 0;
    while (bi < b.length && b[bi] != b[bi - 1]) {
        while (ai < a.length && a[ai] <= b[bi]) {
            ai++
        }
        while (ci < c.length && c[ci] <= b[bi]) {
            ci++
        }
        total += ai * ci;
        bi++
    }
    return total
}


function tripletsV1(a, b, c) {
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  c.sort((a, b) => a - b);

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
