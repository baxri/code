

function chocolateFeast(n, c, m) {

    let chocolates = parseInt(n / c);
    let warappers = chocolates;

    while (warappers >= m) {

        let additional = parseInt(warappers / m);

        chocolates += additional;
        warappers = additional + warappers % m;
    }

    return chocolates;
}

console.log(chocolateFeast(7, 3, 2))