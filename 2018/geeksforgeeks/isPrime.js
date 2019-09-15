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


console.log(isPrime(1193));