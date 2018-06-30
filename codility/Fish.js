// Solution Address
// https://app.codility.com/demo/results/trainingAWX6TJ-9KT/

let A = [7, 1, 10, 22, 23];

let B = [1, 1, 1, 0, 0];

let result = solution(A, B);
console.log(result);

function solution(A, B) {

    let OP = [];

    for (let i = 0; i < A.length; i++) {
        if (B[i] == 1) {
            OP.push(A[i]);
            A.splice(i, 1);
            B.splice(i, 1);
            i--;
            continue;
        }

        if (OP.length > 0) {
            if (A[i] > OP[OP.length - 1]) {
                OP.splice(-1, 1);
                i--;
            } else {
                A.splice(i, 1);
                B.splice(i, 1);
                i--;
            }
        }
    }

    let sum = [...A, ...OP];
    return sum.length;

}




