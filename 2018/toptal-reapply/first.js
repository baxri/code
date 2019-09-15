//1c, 5c, 10c, 25c, 50c, 100




function getChange(M, P) {

    let exchange = M * 100 - P * 100;

    console.log(M)
    console.log(P)
    console.log(exchange)

    let ret = [0, 0, 0, 0, 0, 0];

    if (exchange >= 100) {
        ret[5] = parseInt(exchange / 100);
        exchange = exchange % 100;
    } else {
        ret[5] = 0;
    }


    if (exchange >= 50) {
        ret[4] = parseInt(exchange / 50);
        exchange = exchange % 50;
    } else {
        ret[4] = 0;
    }

    console.log(exchange)

    if (exchange >= 25) {
        ret[3] = parseInt(exchange / 25);
        exchange = exchange % 25;
    } else {
        ret[3] = 0;
    }

    console.log(exchange)
    console.log(ret)

    if (exchange >= 10) {
        ret[2] = parseInt(exchange / 10);
        exchange = exchange % 10;
    } else {
        ret[2] = 0;
    }

    if (exchange >= 5) {
        ret[1] = parseInt(exchange / 5);
        exchange = exchange % 5;
    } else {
        ret[1] = 0;
    }

    if (exchange >= 1) {
        ret[0] = parseInt(exchange / 1);
        exchange = exchange % 1;
    } else {
        ret[0] = 0;
    }

    return ret;
}


// console.log(getChange(5, 0.99))
// console.log(getChange(5, 1))

console.log(getChange(3.14, 1.99)) // should return [0,1,1,0,0,1]
console.log(getChange(4, 3.14)) // should return [1,0,1,1,1,0]
console.log(getChange(0.45, 0.34)) // should return [1,0,1,0,0,0]