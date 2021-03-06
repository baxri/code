function capitalizeFirst(arr) {
  if (!arr.length) return [];

  return [
    arr[0].charAt(0).toUpperCase() + arr[0].slice(1),
    ...capitalizeFirst(arr.slice(1)),
  ];
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
