// Solution Address
// https://app.codility.com/demo/results/trainingJ4EXBN-C3C/

let A = [];

A[0] = 1
A[1] = 2
A[2] = 3
A[3] = 4
A[4] = 3
A[5] = 4
A[6] = 1
A[7] = 2
A[8] = 3
A[9] = 4
A[10] = 6
A[11] = 2

function solution(A) {

    let peaks = findPeaks(A);

    if (peaks.length == 0) {
        return 0;
    }

    let devider = deviders(A.length);
    devider.sort((a, b) => b - a);

    for (let i = 1; i < devider.length; i++) {

        let range = A.length / devider[i];
        let arrays = [];
        let start = 0;

        for (let j = 0; j < A.length; j += range) {

            let array = [...A].splice(j, range);

            if (!containsPeak(peaks, j, j + range - 1)) {
                break;
            }

            arrays.push(array);
        }

        if (arrays.length == devider[i]) {
            return devider[i];
        }
    }

    return 0;
}

function findPeaks(A) {

    let peaks = [];

    for (let i = 0; i < A.length; i++) {

        if (A[i] < A[i + 1] && A[i + 1] > A[i + 2]) {
            peaks.push(i + 1);
        }

    }
    return peaks
}

function containsPeak(peaks, start, end) {

    let contains = false;

    for (let i = start; i <= end; i++) {
        if (peaks.includes(i)) {
            contains = true;
        }
    }

    return contains;
}

function deviders(N) {
    let i = 1;
    let result = 0;
    let deviders = [];

    while (i * i < N) {

        if (N % i == 0) {
            result += 2;
            deviders.push(i);
            deviders.push(N / i);
        }
        i++;
    }

    if (i * i == N) {
        result++;
        deviders.push(i);
    }

    return deviders;
}

let result = solution(A);
console.log(result);
