function checkMagazine(magazine, note) {
  const words = magazine;
  const noteWords = note;

  const magazineObj = {};

  for (let word of words) {
    magazineObj[word] = (magazineObj[word] || 0) + 1;
  }

  for (let noteWord of noteWords) {
    if (magazineObj[noteWord] > 0) {
      magazineObj[noteWord]--;
    } else {
      console.log("No");
      return;
    }
  }

  console.log("Yes");
}

// console.log(
//   checkMagazine("give me one grand today night", "give one grand today")
// );

// console.log(
//   checkMagazine("two times three is not four", "two times two is four")
// );

// console.log(
//   checkMagazine("ive got a lovely bunch of coconuts", "ive got some coconuts")
// );
