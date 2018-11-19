


function countSwaps(a) {

    let count = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length-1; j++) {
            if (a[j] > a[j + 1]) {
                swap(a, j, j + 1);
                count++;
            }
        }
    }

    console.log("Array is sorted in "+count+" swaps.");
    console.log("First Element:", a[0]);
    console.log("Last Element:", a[a.length-1]);
}

function swap(a, i, j){
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}


// console.log(countSwaps([7,2,3,4,5,6]));
// console.log(countSwaps([3, 2, 1]));
console.log(countSwaps([4, 2, 3, 1,]));