

function viralAdvertising(n) {

    let shares = 5;
    let cumulative = 0;
    let day = 1;

    while (day <= n) {
        let likes = Math.floor(shares / 2);
        cumulative += likes;
        shares = likes * 3;
        day++;
    }

    return cumulative;
}

console.log(viralAdvertising(3));