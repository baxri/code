function powerset(array) {
  const subsets = [[]];

  for (val of array) {
    const length = subsets.length;

    for (let i = 0; i < length; i++) {
      const newSubset = [...subsets[i], val];
      subsets.push(newSubset);
    }
  }

  return subsets;
}

console.log(powerset([1, 2]));
