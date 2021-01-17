function factorial(a) {
  if (a === 1) {
    return a;
  }

  return a * factorial(a - 1);
}

console.log(factorial(3));
