// Solution Address
// 

let A = [3, 2, 6, -1, 4, 5, -1, 2];

function solution(A) {

    let result = 0;

    if (A.length == 3) {
        return 0;
    }


    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            for (let k = j + 1; k < A.length; k++) {

                let left = [...A];
                let right = [...A];

                left = left.slice(i + 1, j);
                right = right.slice(j + 1, k);

                let leftSum = 0;
                let rightSum = 0;

                if (left.length > 0)
                    leftSum = left.reduce((a, b) => a + b);

                if (rightSum.length > 0)
                    rightSum = right.reduce((a, b) => a + b);

                if (result < (leftSum + rightSum)) {
                    result = leftSum + rightSum;
                }
            }
        }
    }

    return result;
}


let result = solution(A);
console.log(result);
