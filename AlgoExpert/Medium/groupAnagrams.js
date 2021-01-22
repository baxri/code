function groupAnagrams(words) {
  const groups = {};

  for (const word of words) {
    const group = groups[getKey(word)] || [];
    group.push(word);
    groups[getKey(word)] = group;
  }

  return Object.values(groups);
}

function getKey(word) {
  return word.split("").sort().join("");
}

console.log(
  groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])
);
