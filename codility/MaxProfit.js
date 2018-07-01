// Solution Address
// https://app.codility.com/demo/results/trainingGTGGFS-N2N/

let A = [];
A[0] = 23171
A[1] = 21011
A[2] = 21123
A[3] = 21366
A[4] = 21013
A[5] = 21367

function solution(A) {

    let maxProfit = 0;

    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            let profit = A[j] - A[i];
            if (maxProfit < profit) {
                maxProfit = profit;
            }
        }
    }


    return maxProfit;
}


let result = solution(A);
console.log(result);
