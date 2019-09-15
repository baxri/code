


function makeAnagram(a, b) {

    let a_hashmap = {};
    let b_hashmap = {};

    a.split('').map(char => {
        if (typeof a_hashmap[char] == 'undefined') {
            a_hashmap[char] = 1;
        } else {
            a_hashmap[char] += 1;
        }
    })

    b.split('').map(char => {
        if (typeof b_hashmap[char] == 'undefined') {
            b_hashmap[char] = 1;
        } else {
            b_hashmap[char] += 1;
        }
    })

    console.log(a_hashmap);
    console.log(b_hashmap);

    Object.keys(a_hashmap).map(key => {
        if (typeof b_hashmap[key] != 'undefined') {

            if (a_hashmap[key] == b_hashmap[key]) {
                delete a_hashmap[key];
                delete b_hashmap[key];
            }

            if (a_hashmap[key] > b_hashmap[key]) {
                a_hashmap[key] = a_hashmap[key] - b_hashmap[key];
                delete b_hashmap[key];
            }

            if (b_hashmap[key] > a_hashmap[key]) {
                b_hashmap[key] = b_hashmap[key] - a_hashmap[key];
                delete a_hashmap[key];
            }
        }
    });

    console.log(a_hashmap);
    console.log(b_hashmap);

    let removeSymbols = 0;

    Object.keys(a_hashmap).map(key => {
        removeSymbols += a_hashmap[key];
    });

    Object.keys(b_hashmap).map(key => {
        removeSymbols += b_hashmap[key];
    });

    return removeSymbols;
}



console.log(makeAnagram('abcdd', 'abcdddd'));