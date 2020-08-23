function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)

  const obj = {};

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i];

    obj[arg] = obj[arg] + 1 || 1;

    if (obj[arg] > 1) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates("a", "b", "c", "a"));
