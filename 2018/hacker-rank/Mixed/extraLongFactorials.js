
// 5 4 3 2 1

function extraLongFactorials(n) {
    console.log(factorial(n).toString());
}

function factorial(n) {
    if (n == 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(extraLongFactorials(25));
