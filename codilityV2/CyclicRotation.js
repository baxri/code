// Solution Address
// https://app.codility.com/demo/results/trainingWNMCC4-AEQ/

const A = [3, 8, 9, 7, 6];
const K = 1;


function solution(A, K) {

    // If array length less then 2 elements return same array
    if (A.length < 2) {
        return A;
    }

    // Allocate new array from old elements
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