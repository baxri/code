function findWord(arr) {
  const str = [];
  const linkedHash = {};
  const reversedHash = {};

  for (let i = 0; i < arr.length; i++) {
    const [a, b] = arr[i].split(">");
    linkedHash[a] = b;
    reversedHash[b] = a;
  }

  let cursor = null;

  for (key in linkedHash) {
    if (!reversedHash[key]) {
      cursor = key;
    }
  }

  str.push(cursor);

  while (linkedHash[cursor]) {
    str.push(linkedHash[cursor]);
    cursor = linkedHash[cursor];
  }

  return str.join("");
}

console.log(findWord(["P>E", "E>R", "R>U"]));
console.log(findWord(["I>N", "A>I", "P>A", "S>P"])); // SPAIN

console.log(findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"])); // HUNGARY
console.log(findWord(["I>F", "W>I", "S>W", "F>T"])); // SWIFT
console.log(findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"])); // PORTUGAL
console.log(
  findWord([
    "W>I",
    "R>L",
    "T>Z",
    "Z>E",
    "S>W",
    "E>R",
    "L>A",
    "A>N",
    "N>D",
    "I>T",
  ])
); // SWITZERLAND
