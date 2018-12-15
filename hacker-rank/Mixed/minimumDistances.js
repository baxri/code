

function minimumDistances(a) {

    let hashtable = {};
    let distances = {};

    a.map((val, key) => {

        if (typeof hashtable[val] === 'undefined') {
            hashtable[val] = key;
        } else {
            if (!distances[val]) {
                distances[val] = key - hashtable[val];
            }
        }

    });

    let min = null;

    Object.keys(distances).map(key => {

        if (min === null || distances[key] < min) {
            min = distances[key];
        }

    });

    if (min === null) {
        return -1;
    }

    return min;
}

console.log(minimumDistances([7, 1, 3, 4, 1, 1, 7]))