// https://www.geeksforgeeks.org/check-whether-number-circular-prime-not/

function isPrime(n) {

    if (n <= 1)
        return false;

    // Check if wen can devide on any number  
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

function checkCircular(N) {

    let num = N;
    while (isPrime(num)) {

        let rem = num % 10;
        let div = parseInt(num / 10);

        num = parseInt(rem.toString() + div.toString());

        if (num == N)
            return true;

    }

    return false;
}

console.log(checkCircular(113));
console.log(checkCircular(1193));