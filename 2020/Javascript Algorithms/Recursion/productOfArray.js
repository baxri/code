function productOfArray(arr) {
  let product = arr[0];

  if (arr.length === 1) {
    return arr[0];
  }

  product = product * productOfArray(arr.slice(1));

  return product;
}

console.log(productOfArray([1, 2, 3, 10]));
