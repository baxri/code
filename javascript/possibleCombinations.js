

function isPrime(n) {
    // Corner cases 
    if (n <= 1)
        return false;
    if (n <= 3)
        return true;

    for (let i = 2;  i * 2 <= n; i++){
        
        if( n%i == 0 ){
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

console.log(isPrime(113));