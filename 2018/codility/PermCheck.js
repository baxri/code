// Solution Address
// https://app.codility.com/demo/results/trainingBJPPT3-K8D/

let A = [4, 1, 3, 2];

function solution(A) {

    A.sort(((a, b) => a - b));

    if (A[0] != 1) {
        return 0;
    }

    for (var i = 1; i <= A.length; i++) {
        if (A[i - 1] != i) {
            return 0;
        }
    }

    return 1;
}


let result = solution(A);
console.log(result);