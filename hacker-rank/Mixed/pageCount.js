
function pageCountNew(n, p) {

    let turns = parseInt(p/2);

    if (n % 2 == 0) {
        n = n + 1;
    }

    let turns2 = parseInt((n - p)/2);

    console.log(turns);
    console.log(turns2);

    return Math.min(turns, turns2);
}


function pageCount(n, p) {

    let turns = 0;

    for (let i = 0; i <= n; i = i + 2) {
        if (i != p && i + 1 != p) {
            turns++;
        } else {
            break;
        }
    }

    let turns2 = 0;

    if (n % 2 == 0) {
        n = n + 1;
    }

    for (let i = n; i > 0; i = i - 2) {
        if (i != p && i - 1 != p) {
            turns2++;
        } else {
            break;
        }
    }
   

    return Math.min(turns, turns2);
}

console.log(pageCountNew(6, 2));
console.log(pageCountNew(5, 4));