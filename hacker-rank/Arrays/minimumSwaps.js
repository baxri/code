


function minimumSwaps(arr) {

    let swapCount = 0;
    let swaped = false;

    let sorted_arr = [...arr].sort();

    console.log(arr);
    console.log(sorted_arr);

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j] && arr[i] != sorted_arr[i]) {
                swap(arr, i, j);
                swaped = true;
            }

        }

        if (swaped) {
            swapCount++;
        }
    }

    console.log(arr);

    return swapCount;
}


function swap(q, i, j) {
    let temp = q[i];
    q[i] = q[j];
    q[j] = temp;
}


console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));