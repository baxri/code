
let A = [1, 1, 1, 1, 56,];

// let N = [];

// for (let i = 1; i <= 999999; i++) {
//     N.push(i);

//     if (i != 90) {
//         N.push(i);
//     }
// }



// console.log(N   );

function solution(A) {
    A.sort();
    let i, j, count = 0;

    for (i = 0; i < A.length; i++) {
        for (j = i + 1; j < A.length; j++) {
            if (A[i] == A[j])
                count++;
            else
                break;
        }

        if (count % 2 == 0)
            return A[i];
        else {
            count = 0;
            i = j - 1;
        }
    }

    return 0;
}


let result = solution(A);

console.log(result);