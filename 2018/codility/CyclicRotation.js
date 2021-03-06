// Solution Address
// https://app.codility.com/demo/results/trainingSQNN4C-ZMG/

let A = [1, 2, 3, 4, 5];
let K = 42;

function solution(A, K) {

    if (K == A.length) {
        return A;
    }

    if(K > A.length){
        K = K%A.length;
    }

    let arrayPrefix = [];

    for (let i = A.length - K; i < A.length; i++) {
        arrayPrefix.push(A[i]);
    }
    A.splice((A.length - K), K);
    let shiftedArray = arrayPrefix.concat(A);
    return shiftedArray;
}


let result = solution(A, K);

console.log(result);