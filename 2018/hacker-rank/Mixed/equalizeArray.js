

function equalizeArray(arr) {

    let hashtable = {};

    arr.map(v => {
        if (typeof hashtable[v] == 'undefined') {
            hashtable[v] = 1;
        } else {
            hashtable[v]++;
        }
    })

    let maxKey = null;
    let maxValue = null;

    Object.keys(hashtable).map(key => {

        if (maxKey == null || maxValue < hashtable[key]) {
            maxKey = key;
            maxValue = hashtable[key];
        }

    })

    let minElements = 0;

    Object.keys(hashtable).map(key => {
        if (key != maxKey) {
            minElements += hashtable[key];
        }
    });

    return minElements;
}


console.log(equalizeArray([3, 3, 2, 1, 3]));