// Solution Address
// https://app.codility.com/demo/results/trainingHGZWFB-YSW/

let N = 2;

function solution(N) {

    let i = 1;
    let result = 0;

    while (i * i < N) {

        if (N % i == 0) {
            result += 2;
        }
        i++;
    }

    if (i * i == N) {
        result += 1;
    }

    return result;
}


let result = solution(N);
console.log(result);
