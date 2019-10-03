// Complete the whatFlavors function below.

function whatFlavors(cost, money) {
  
  let sortedMenu = [...cost].sort((a, b) => a - b);

  for (let i = 0; i < sortedMenu.length; i++) {
    let complement = money - sortedMenu[i];

    let location = recursiveFunction(sortedMenu, complement, i + 1)


    if (location !== null && complement === sortedMenu[location]) {
      console.log(getIndexes(cost, sortedMenu[i], complement).join(' ')) 
      break;
    }
  }
}

function getIndexes(menu, value1, value2){
  let index1 = indexOf(menu, value1, -1)
  let index2 = indexOf(menu, value2, index1)

  return [Math.min(index1, index2) + 1, Math.max(index1, index2) + 1]
}

function indexOf(menu, value, excludeThis){
  for (let i = 0; i < menu.length; i++) {
    if(menu[i] === value && i !== excludeThis){
      return i
    }
  }
  return -1
}

function binarySearch(arr, search, left = 0, right = arr.length - 1) {
  if (left > right) {
    return null;
  }

  let mid=Math.floor((left + right)/2); 

  if (arr[mid] === search) {
    return mid;
  } else if (search > arr[mid]) {
    return binarySearch(arr, search, mid + 1, right);
  } else if (search < arr[mid]) {
    return binarySearch(arr, search, left, mid);
  }
}

let recursiveFunction = function (arr, x, start, end) { 
       
  // Base Condtion 
  if (start > end) return false; 
 
  // Find the middle index 
  let mid=Math.floor((start + end)/2); 
 
  // Compare mid with given key x 
  if (arr[mid]===x) return mid; 
        
  // If element at mid is greater than x, 
  // search in the left half of mid 
  if(arr[mid] > x)  
      return recursiveFunction(arr, x, start, mid-1); 
  else

      // If element at mid is smaller than x, 
      // search in the right half of mid 
      return recursiveFunction(arr, x, mid+1, end); 
} 

console.log(whatFlavors([1, 4, 5, 3, 2], 4));
// console.log(whatFlavors([2, 2, 4, 3], 4));

