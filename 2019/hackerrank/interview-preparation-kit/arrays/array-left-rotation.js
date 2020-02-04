function rotLeft(a, d) {
  let rotatedArray = new Array(a.length);
  a.forEach((element, i) => {
    if (d > a.length) {
      d = d % a.length;
    }
    let newIndex = i - d;
    if (newIndex < 0) {
      newIndex = a.length + newIndex;
    }
    rotatedArray[newIndex] = element;
  });
  return rotatedArray;
}

console.log(rotLeft([1, 2, 3, 4, 5], 6));