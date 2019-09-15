


function maximumToys(prices, k) {

    prices.sort((a, b) => a - b);

    let toys = 0;
    let left = k;
    let i = 0;

    while (left >= prices[i]) {
        left -= prices[i];
        i++;
        toys++;
    }

    return toys;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))