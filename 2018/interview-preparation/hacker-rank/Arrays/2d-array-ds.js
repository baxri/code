

const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

function hourglassSum(arr) {

    let maxSum = null;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let sum = getSum(arr, i, j);
            if (sum !== null) {
                if (maxSum === null || maxSum < sum) {
                    maxSum = sum;
                }
            }
        }
    }

    return maxSum;
}

function getSum(arr, i, j) {

    if (i >= arr.length - 2) return null;
    if (j >= arr.length - 2) return null;

    let sum = 0;
    sum += arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
    sum += arr[i + 1][j + 1];
    sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
    return sum;

}

console.log(hourglassSum(arr))