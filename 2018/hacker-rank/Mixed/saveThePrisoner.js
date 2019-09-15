
// 1 1 1 1 1 1 1 

function saveThePrisoner(n, m, s) {

    let a = s + m - 1;

    if (a > n) {

        let left = a % n;

        if (left == 0) {
            a = n;
        } else {
            a = left;
        }
    }

    return a;
}

console.log(saveThePrisoner(7, 14, 1));