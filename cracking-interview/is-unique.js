

let str = '';

function isUnique(str) {

    if (str.length == 0) {
        return false;
    }

    let uniqueHashTable = {};

    for (key in str) {

        if (uniqueHashTable.hasOwnProperty(str[key])) {
            return false;
        }

        uniqueHashTable[str[key]] = true;
    }
    return true;
}

console.log(isUnique(str));