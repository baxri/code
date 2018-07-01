
let A = [1, 2, 4, -90];


function golden_max_slice(A) {
    let max_ending = 0;
    let max_slice = 0;

    for (let i = 0; i < A.length; i++) {
        max_ending = Math.max(0, max_ending + A[i]);

        console.log(max_ending);

        max_slice = Math.max(max_slice, max_ending);
    }
    return max_slice;
}

console.log(golden_max_slice(A));