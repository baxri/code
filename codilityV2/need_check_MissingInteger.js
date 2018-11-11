
let A = [1];


function solution(A) {

    A = A.sort();
    let missing = 1;

    for (let i = 0; i < A.length; i++) {
        
        let current = A[i];
        if (current <= 0) {
            continue;
        }
        if (current > missing) {
            return missing;
        }

        let next = A[i + 1];
        if (next != current) {
            missing++;
        }
    }
    return missing;
}


console.log(solution(A));
