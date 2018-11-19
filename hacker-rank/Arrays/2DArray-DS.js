

// let arr = [
//     [1, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 2, 4, 4, 0],
//     [0, 0, 0, 2, 0, 0],
//     [0, 0, 1, 2, 4, 0],
// ]

let arr = [
    [-1, - 1, 0, - 9, - 2, - 2,],
    [- 2, - 1, - 6, - 8, - 2, - 5],
    [- 1, - 1, - 1, - 2, - 3, - 4],
    [- 1, - 9, - 2, - 4, - 4, - 5],
    [- 7, - 3, - 3, - 2, - 9, - 9],
    [- 1, - 3, - 1, - 2, - 4, - 5],
]

function hourglassSum(arr) {

    let maxSum = null;

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr.length; col++) {

            let sum = getSum(arr, col, row);

            if (sum === null) {
                continue;
            }

            if (sum > maxSum || maxSum === null) {
                maxSum = sum;
            }

        }
    }

    return maxSum;
}

function getSum(arr, col, row) {

    // If last element is exists in hourglass
    if (typeof arr[row][col + 2] == 'undefined') {
        return null;
    }

    // If last element is exists in hourglass
    if (typeof arr[row + 2] == 'undefined') {
        return null;
    }

    let header = arr[row][col] + arr[row][col + 1] + arr[row][col + 2];
    let body = arr[row + 1][col + 1];
    let footer = arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];
    return header + body + footer;
}


console.log(hourglassSum(arr));