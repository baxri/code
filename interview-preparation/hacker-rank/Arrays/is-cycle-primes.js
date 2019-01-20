

function isCyclePrime(n) {

    if (!isPrime(n)) {
        return false;
    }

    let temp = n;

    while (isPrime(temp)) {
        let last = (temp % 10).toString();
        let prefix = parseInt(temp / 10).toString();

        temp = parseInt(last + prefix);

        if (temp == n) {
            return true;
        }

        i++;
    }

    return false;
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isCyclePrime(70))