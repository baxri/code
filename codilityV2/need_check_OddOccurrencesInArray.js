// Solution Address
// 

let A = [9, 3, 9, 3, 9, 7, 9];

function solution(A) {

    // If array hash only one element just return this element
    if (A.length == 1) {
        return A[0];
    }

    // Initialize empty hashmap
    let hashmap = {};

    for (let i = 0; i < A.length; i++) {

        let value = A[i];

        // Incriment array element oqqurency
        if (typeof hashmap[value] == 'undefined') {
            hashmap[value] = 1;
        } else {
            hashmap[value] = ++hashmap[value];
        }
    }

    // Iterate on hashmap and check which element is equals 1
    for (key in hashmap) {
        if (hashmap[key] == 1) {
            return parseInt(key);
        }
    }

}

console.log(solution(A));