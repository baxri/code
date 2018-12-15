

function howManyGames(p, d, m, s) {

    let games = 0;
    let price = p;
    let left_money = s;

    while (left_money >= price) {

        left_money = left_money - price;
        games++;

        if(price > m){
            price = price - d;
        }

        if (price <= m) {
            price = m;
        }
    }

    console.log(left_money);

    return games;
}

console.log(howManyGames(20, 3, 6, 85))