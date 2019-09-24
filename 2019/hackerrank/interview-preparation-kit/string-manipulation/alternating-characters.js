function alternatingCharacters(s) {
  let lastElement = null;
  let deleteCount = 0;

  s.split("").forEach(char => {
    if (lastElement == char) {
      deleteCount++;
    } else {
      lastElement = char;
    }
  });

  return deleteCount;
}

console.log(alternatingCharacters("AABAAB"));
