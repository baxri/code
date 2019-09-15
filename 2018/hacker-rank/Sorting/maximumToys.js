


function maximumToys(prices, k) {

    prices.sort((a,b) => a-b );

    let toys = 0;

    prices.map(price => {
        if( k - price >= 0 ){
            toys++;
            k = k - price;
        }
    });

    return toys;
}


console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
console.log(maximumToys([1,2,3,4,5,6,7], 7));
