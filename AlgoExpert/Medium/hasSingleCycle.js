function hasSingleCycle(array) {
  const visited = {};
  let index = 0;

  do {
    if (visited[index]) {
      return false;
    }

    visited[index] = true;
    index = getNextIndex(index, array);
  } while (index !== 0);

  return Object.keys(visited).length === array.length;
}

function getNextIndex(index, array) {
  let nextIndex = (index + array[index]) % array.length;
  if (nextIndex < 0) {
    nextIndex = nextIndex + array.length;
  }
  return nextIndex;
}

console.log(hasSingleCycle([2, 3, 1, -4, -4, 2]));
console.log(hasSingleCycle([1, 1, 1, 1, 2]));
