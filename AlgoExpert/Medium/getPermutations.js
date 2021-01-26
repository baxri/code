function getPermutations(array) {
  const result = [];
  getPermutationsHelper(array, [], result);
  return result;
}

function getPermutationsHelper(array, permutation, result) {
  if (!array.length && permutation.length) {
    result.push(permutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = [array[i], ...permutation];
      getPermutationsHelper(newArray, newPermutation, result);
    }
  }
}

console.log(getPermutations([1, 2, 3]));
