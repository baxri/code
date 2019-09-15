// Solution Address
// https://app.codility.com/demo/results/trainingB6RAWU-TFJ/

let A = [0,1,0,1,1]

function solution(A) {

    let add = 0;
    let count = 0;

    for (let i = 0; i < A.length; i++) {

        if (A[i] == 0) {
            add++;
        } else {
            count += add;
        }
    }

    if (count > 1000000000) {
        return -1;
    }

    return count;
}

let result = solution(A);
console.log(result);