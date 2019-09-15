// Solution Address
// 

let A = 3
let B = 11
// let B = 11
let K = 3

function solution(A, B, K) {

    if(K > B){
        return 0;
    }

    if(A == B && A%K == 0){
        return 1;
    }

    let total = parseInt((B-A)/K);

    if(A%K == 0){
        total++;
    }

    return total;
}

let result = solution(A, B, K);

console.log(result);