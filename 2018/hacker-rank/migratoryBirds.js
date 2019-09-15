

function migratoryBirds(arr) {

    let hashmap = {};
    let most = null;
    let most_type = null;

    arr.map(type => {
        if (typeof hashmap[type] == 'undefined') {
            hashmap[type] = 1;
        } else {
            hashmap[type] = hashmap[type] + 1;
        }
    });

    Object.keys(hashmap).map(key => {
        if (most == null || most < hashmap[key]) {
            most = hashmap[key];
            most_type = key;
        }
    })

    return most;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));