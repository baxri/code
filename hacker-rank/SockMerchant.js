


function sockMerchant(n, ar) {

    let hashmap = {};

    ar.map(value => {

        if (typeof hashmap[value] == 'undefined') {
            hashmap[value] = 1;
        } else {
            hashmap[value]++;
        }

    });

    let count = 0;

    Object.keys(hashmap).map(key => {
        let res = hashmap[key] / 2;
        count += parseInt(res);
    });

    return count;
}


console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));