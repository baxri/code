

function minimumBribesBruthForce(q) {
  let swapCount = 0;
  let sorted = false;
  let swipes = {};

  for (let i = 0; i < q.length; i++) {
    let sortedElements = 0;
    for (let j = 0; j < q.length; j++) {
      if (q[j] < q[j + 1]) {
        sortedElements++;
        continue;
      }
      if (swipes[q[j]] > 1) {
        continue;
      }
      if (q[j] > q[j + 1]) {
        swipes[q[j]] = swipes[q[j]] ? swipes[q[j]] + 1 : 1;
        swapCount++;
        swap(q, j, j + 1);
      }
    }

    if (sortedElements == q.length) {
      sorted = true;
      break;
    }
  }
  if (sorted === false) {
    sorted = true;

    for (let i = 0; i < q.length; i++) {
      if (q[i] > q[i + 1]) {
        sorted = false;
      }
    }
  }

  return sorted ? swapCount : "Too chaotic";
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(minimumBribes([2, 1, 5, 3, 4]));
console.log(minimumBribes([2, 5, 1, 3, 4]));
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));
