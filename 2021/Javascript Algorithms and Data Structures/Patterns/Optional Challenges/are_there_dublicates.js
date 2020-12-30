// Multiple pointer
function areThereDuplicates(...args) {
  const sortedArgs = args.sort();

  for (const key in sortedArgs) {
    if (sortedArgs[key] === sortedArgs[parseInt(key) + 1]) {
      return true;
    }
  }

  return false;
}

// Frequency counter
function areThereDuplicatesFrequencyCounter(...args) {
  const obj = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    obj[arg] = obj[arg] + 1 || 1;

    if (obj[arg] > 1) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(4, 4, 2, 1));
console.log(areThereDuplicates("c", "a"));
