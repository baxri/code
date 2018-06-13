// Solution Address
// https://app.codility.com/demo/results/training5JY2GE-EYA/

let A = [3, 1, 2, 4, 3];

// let A = [];

// for (let i = 1; i <= 100000; i++) {
//     A.push(i);
// }

function solution(A) {

    let diference = null;
    let left = [];
    let right = [];

    for (let i = 0, q = A.length - 1; i < A.length; i++) {

        if (i === 0) {
            left[i] = 0;
        } else {
            left[i] = left[i - 1] + A[i - 1];
        }

        if (q === A.length - 1) {
            right[q] = A[q];
        } else {
            right[q] = right[q + 1] + A[q];
        }

        q--;
    }

    let result = Math.abs(left[1] - right[1]);

    for (let i = 2; i < left.length; i++) {
        let diff = Math.abs(left[i] - right[i]);
        if (diff < result) {
            result = diff;
        }
    }

    return result;
}

let result = solution(A);
console.log(result);