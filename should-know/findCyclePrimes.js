

function findCyclePrimes(number) {

    let found = [];

    for (let i = 0; i < number; i++) {
        if (isCyclePrime(i)) {
            found.push(i);
        }
    }

    return found;
}

console.log(findCyclePrimes(100));

function isCyclePrime(number) {

    let temp = number;

    while (isPrime(temp)) {

        let last = temp % 10;
        let prefix = parseInt(temp / 10);

        temp = parseInt(`${last}${prefix}`);

        if (temp == number) {
            return true;
        }
    }

    return false;
}


function isPrime(number) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}
