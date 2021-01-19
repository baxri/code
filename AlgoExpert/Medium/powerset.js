function powerset(array) {
  const subsets = [[]];

  for (const ele of array) {
    const length = subsets.length;

    for (let i = 0; i < length; i++) {
      const newSubset = [...subsets[i], ele];
      subsets.push(newSubset);
    }
  }

  return subsets;
}

console.log(powerset([1, 2, 3]));
