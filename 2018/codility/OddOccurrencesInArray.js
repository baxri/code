// Solution Address
// https://app.codility.com/demo/results/trainingYUQ4KP-F6W/

let A = [1, 1, 1, 1, 56,];

// let A = [];

// for (let i = 1; i <= 999999; i++) {
//     A.push(i);
//     if (i != 229) {
//         A.push(i);
//     }
// }


function solution(A) {
    A.sort();

    for (let i = 0, count = 0; i < A.length; i++) {
        count++;

        if (A[i] != A[i + 1]) {
            if (count % 2 != 0) return A[i];
            count = 0;
        }
    }
}


let result = solution(A);

console.log(result);