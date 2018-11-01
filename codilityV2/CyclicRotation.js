// Solution Address
// https://app.codility.com/demo/results/trainingWNMCC4-AEQ/


const A = [3, 8, 9, 7, 6];
const K = 1;

function solution(A, K) {

    if (A.length < 2) {
        return A;
    }

    let newArray = new Array(...A);

    for (let i = 0; i < A.length; i++) {

        // Calculate new index
        let newIndex = i + K;

        // If new index is unbound the array set it in the begining
        if (typeof A[newIndex] == 'undefined') {
            newIndex = newIndex % A.length;
        }

        // Change value in new array with new index
        newArray[newIndex] = A[i];
    }

    return newArray;
}


console.log(solution(A, K));