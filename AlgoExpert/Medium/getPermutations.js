function getPermutations(array) {
  const permutations = [];
  getPermutationsHelper(array, [], permutations);
  return permutations;
}

function getPermutationsHelper(array, currentPermutation, permutations) {
  if (!array.length && currentPermutation) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      let newArray = array.slice(0, i).concat(array.slice(i + 1));
      let newPemutation = [...currentPermutation, array[i]];
      getPermutationsHelper(newArray, newPemutation, permutations);
    }
  }
}

console.log(getPermutations([1, 2, 3]));
