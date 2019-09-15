

function gemstones(arr) {

    let hashmap = {};

    for (let i = 0; i < arr.length; i++) {

        let exists = {};

        for (let j = 0; j < arr[i].length; j++) {

            console.log(arr[i][j])

            if (typeof hashmap[arr[i][j]] == 'undefined') {
                if (typeof exists[arr[i][j]] == 'undefined') {
                    hashmap[arr[i][j]] = 1;
                    exists[arr[i][j]] = true;
                }
            } else {
                if (typeof exists[arr[i][j]] == 'undefined') {
                    hashmap[arr[i][j]]++;
                    exists[arr[i][j]] = true;
                }
            }
        }
    }

    let result = 0;

    Object.keys(hashmap).map(char => {

        if (hashmap[char] == arr.length) {
            result++;
        }
    })

    return result;
}


console.log(gemstones(['abcdde', 'baccd', 'eeabg']))