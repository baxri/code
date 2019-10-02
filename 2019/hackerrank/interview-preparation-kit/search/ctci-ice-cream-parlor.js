// Complete the whatFlavors function below.

function whatFlavors(cost, money) {
  let hash = {};

  for (let i = 0; i < cost.length; i++) {
    if (typeof hash[cost[i]] === "undefined") {
      hash[cost[i]] = i + 1;
    }
  }


  cost.sort((a, b) => a - b);


  for (let i = 0; i < cost.length; i++) {
    let search = money - cost[i];

    let comp = binarySearch(cost, search, i + 1)

    if(comp !== null){
      console.log(i + 1, hash[comp])
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

// console.log(whatFlavors([1, 4, 5, 3, 2], 4));
console.log(whatFlavors([2,  2, 4, 3], 4));
