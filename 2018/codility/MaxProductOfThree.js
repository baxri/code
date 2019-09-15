// Solution Address
// https://app.codility.com/demo/results/trainingRGFR9C-ZDY/

let A = [4, 7, 3, 2, 1, -3, -5];


function solution(A) {
    let result = null;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            for (let k = j + 1; k < A.length; k++) {
                let val = A[i] * A[j] * A[k];
                if (result === null || val > result) {
                    result = val;
                }
            }
        }
    }

    return result;
}


let result = solution(A);
console.log(result);

