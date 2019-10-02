// Complete the whatFlavors function below.

function whatFlavors(cost, money) {
  let hash = {};


  console.log('cost', cost.slice())

  let sortedMenu = [...cost].sort((a, b) => a - b);

  for (let i = 0; i < cost.length; i++) {
    if (typeof hash[cost[i]] === "undefined") {
      hash[cost[i]] = i + 1;
    }
  }

  for (let i = 0; i < sortedMenu.length; i++) {
    let search = money - cost[i];

    let comp = cost.slice(i + 1).indexOf(search)

    if (comp > -1) {
      console.log(i + 1, comp + 1 + i + 1);
      break;
    }
  }
}

function binarySearch(arr, search, left = 0, right = arr.length - 1) {
  if (left > right) {
    return null;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === search) {
    return arr[mid];
  } else if (search > arr[mid]) {
    return binarySearch(arr, search, mid + 1, right);
  } else if (search < arr[mid]) {
    return binarySearch(arr, search, left, mid);
  }
}

console.log(whatFlavors([1, 4, 5, 3, 2], 4));
// console.log(whatFlavors([2, 2, 4, 3], 4));
