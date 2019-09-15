// Solution Address
// 

let A = [];
A[0] = 1
A[1] = 5
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
    let result = 0;

    for (let i = 1; i < peaks.length; i++) {

        let flags = i + 1;
        let flagsCount = i + 1;
        let mountains = [...peaks];
        let flaged = [];
        let prevFlag = null;

        console.log(peaks);

        for (let f = 0; f < A.length; f++) {

            if (flags == 0) {
                break;
            }

            if (mountains.includes(f)) {

                console.log(f);

                let distance = 0;

                if (prevFlag) {
                    distance = Math.abs(A[f] - A[prevFlag]);
                }

                console.log(prevFlag);
                console.log(distance);
                console.log(flagsCount);

                if (!prevFlag || distance >= flagsCount) {
                    flaged.push(f);
                    flags--;
                    prevFlag = f;
                }
            }
        }

        console.log(flaged);
        break;

    }

    return result;
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

let result = solution(A);
console.log(result);
