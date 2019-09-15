function checkMagazine(magazine, note) {
  magazine = magazine.split(" ");
  note = note.split(" ");

  let result = null;

  note.map(word => {
    let index = magazine.indexOf(word);

    if (index > -1) {
      magazine.splice(index, 1);
    } else {
      result = "No";
    }
  });

  if (result === null) {
    result = "Yes";
  }

  return result;
}

console.log(
  checkMagazine("give me one grand today night", "give one grand today")
);
