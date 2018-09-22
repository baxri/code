

let str_1 = 'giorgi';
let str_2 = 'igroig';

function checkPermutation(str_1, str_2) {

    let length_1 = str_1.length;
    let length_2 = str_2.length;

    if (length_1 != length_2) {
        return false;
    }

    let length = length_1;

    for (key in str_1) {

        let left_index = key;
        let right_index = length - 1 - key;

        let left = str_1[left_index];
        let right = str_2[right_index];

        if (left != right) {
            return false;
        }

    }

    return true;
}

console.log(checkPermutation(str_1, str_2));